import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar({ setData, setLoading, setError }) {
  //Creates a list with the topics and mapped over it to display topics to choose
  const topics = [
    "Business",
    "Technology",
    "Entertainment",
    "Sports",
    "Science",
    "Health",
  ];
  // added a state to keep track of the topics query
  const [query, setQuery] = useState("");
  //using useEffect I am fetching the data when the topic matches the topic options
  useEffect(() => {
    async function fetchTopics(topic) {
      try {
        const response = await fetch(
          `https://gnews.io/api/v4/top-headlines?topic=${topic.toLowerCase()}&token=${
            process.env.REACT_APP_API_TOKEN
          }&lang=en`
        );
        const fetchedData = await response.json();
        //passing setData and setError up as a prop
        console.log(fetchedData);
        setData(fetchedData);
      } catch (err) {
        setError(err);
      }
    }
    fetchTopics(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <nav data-testid="navTestId" className="navbar">
      {/* update the query state when a topic option is clicked */}

      <select
        data-testid="selectTestId"
        className="select"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      >
        <option value="">Topics</option>{" "}
        {topics.map((topic, i) => (
          <option
            data-testid={`opTestId-${i}`}
            key={topic}
            value={topic}
            className="navListItem"
          >
            {topic}
          </option>
        ))}
      </select>
      <ul className="navList">
        {topics.map((topic, i) => (
          <li
            data-testid={`liTestId-${i}`}
            key={topic}
            onClick={() => setQuery(topic)}
            value={topic}
            className="navListItem"
          >
            {topic}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
