// ==============================
// Component renders header top which includes logo "Fresh news" and searchbar. Bottom is for navbar
// ==============================

import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header({ search, setSearch, setData, setError, setLoading }) {
  //function to fetch the data when the query changed first or the topic options clicked
  async function fetchData() {
    // Set loading to true until data is fetched?
    setLoading(true);
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${search}&token=${process.env.REACT_APP_API_TOKEN}&lang=en`
      );
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (err) {
      setError(err);
    }
    // if the fetch was resolved I update the loading to false(stipping the loading phase)
    setLoading(false);
  }
  //created a function to handle input erors
  async function handleInputError(string) {
    // if the input field is empty and the function is called, it will update the error state

    if (!string.trim().length) {
      setError("Input field cannot be empty");
      //if the input does not contains letters, the error state will be updated
    } else if (!/[a-z]/gi.test(string)) {
      setError("Your query needs to contain a letter");
    } else {
      await fetchData();
    }
  }
  //function for fetching data when search button is clicked
  async function handleClick() {
    await handleInputError(search);
    setSearch("");
  }
  //function for fetching data when enter key is pressed

  async function handleEnterKey(e) {
    if (e.key === "Enter") {
      await handleInputError(search);
      setSearch("");
    }
  }
  //function for hiding error message

  function hideError() {
    setError(null);
  }
  return (
    <header data-testid="headerTestId" className="header">
      <div className="header-top">
        <p className="logo">FRESH NEWS</p>{" "}
        <div className="inputContainer">
          {/* update the search state when user types in the input field */}
          {/* fetch data when enter key is pressed */}
          {/* hide error when user clicks or focuses on input */}

          <input
            className="input"
            type="text"
            placeholder="Type here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleEnterKey}
            onFocus={hideError}
            onClick={hideError}
          />
          {/* fetch data when button is clicked */}

          <button className="inputButton" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
      {/* pass data to navbar so it can update the state when user clicks on topic options */}

      <Navbar setData={setData} setLoading={setLoading} setError={setError} />
    </header>
  );
}

export default Header;
