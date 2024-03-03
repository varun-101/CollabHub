import React, { useState, useEffect } from "react";
import "./style.css";
import data from "./TemplateData.json";
import axios from "axios";

function App() {
  const [searchTerm, setSearchTerm] = useState("ML");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [arr, setArr] = useState([]);

  const handleSearch = async () => {
    console.log(searchTerm);
    console.log(selectedFilter);
    const formData = new URLSearchParams();
    formData.append('query', searchTerm);
    formData.append('sort', selectedFilter);

    try {
      const res = await axios.post("http://localhost:8081/git", formData);
      const result = res.data;

      const newArr = [];
      for (const item of result.items) {
        const title = await item.full_name;
        const description = await item.description;
        const html = await item.html_url;
        newArr.push({ title, description,html });
      }
      setArr(newArr);
      console.log(arr);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []); // Runs once on component mount

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
  };

  const handleFilterChange = async (event) => {
    setSelectedFilter(event.target.value);
    await handleSearch();
  };
  

  function linkOpener(link)
  {
    window.location.href = link;
  }


  return (
    <div className={`templateContainer ${darkMode ? "darkMode" : ""}`}>
       <div className="themeToggle">
        <input
          type="checkbox"
          id="themeToggle"
          className="toggle"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="themeToggle" className="toggle-btn">
          <span className="sun">
            <i className="fas fa-sun"></i>
          </span>
          <span className="moon">
            <i className="fas fa-moon"></i>
          </span>
        </label>
      </div>
      <div className="searchInput_Container">
        <input
          id="searchInput"
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
        />
        {/* <select
          value={selectedFilter}
          onChange={handleFilterChange}
          className="filterDropdown"
        >
          <option value="All">All</option>
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
          <option value="help-wanted-issues">Help-wanted-issues</option>
          <option value="updated">Updated</option>
        </select> */}
      </div>
      <div className="template_Container">
        {arr
          .filter((val) => {
            if (searchTerm === "" || val.title.toLowerCase().includes(searchTerm.toLowerCase())) 
           {
             if (selectedFilter === "All") return true;
              return val.filter === selectedFilter;
            }
           return false;
         })
          .map((val) => {
            
            return (
              <div
                className={`template ${darkMode ? "darkMode" : ""}`}
                key={val.id}
              >
                <h3 onClick={()=>linkOpener(val.html)}>{val.title}</h3>
                <h4>{val.description}</h4>
         
              </div>
            );
          })}
      </div>
    </div>
  );
        }
       


export default App;
