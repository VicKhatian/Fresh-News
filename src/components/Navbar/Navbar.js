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
  //to keep track of the topics query
  const [query, setQuery] = useState("");

  //isNavExpanded is false by default, it will be true only after hamburger button is clicked
  const [isNavExpanded, setIsNavExpanded] = useState(false);

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
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon JSX <svg/> is copied from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className={isNavExpanded ? "navbar-menu expanded" : "navbar-menu"}>
        <ul>
          {topics.map((topic, i) => (
            <li
              data-testid={`liTestId-${i}`}
              key={topic}
              onClick={() => setQuery(topic)}
              value={topic}
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
