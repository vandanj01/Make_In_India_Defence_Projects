import React, { useState } from "react";
import defenceProjects from "./data/defenceProjects";
import DefenceCard from "./components/DefenceCard";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  const categories = ["All", ...new Set(defenceProjects.map(p => p.category))];

  const filteredProjects = defenceProjects.filter((project) => {
    return (
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || project.category === selectedCategory)
    );
  });

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <h1>Make in India – Defence Projects Dashboard</h1>

      <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-btn">
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <input
        type="text"
        placeholder="Search by project name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="dropdown-filter"
      >
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>

      <div className="cards-container">
        {filteredProjects.map((project, index) => (
          <DefenceCard key={index} project={project} />
        ))}
      </div>
      <footer className="footer">
  <p>Made with ❤️ by Vandan</p>
  <a
    href="https://github.com/vandanj01/Make_In_India_Defence_Projects"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub Repository
  </a>
</footer>

    </div>
  );
}

export default App;