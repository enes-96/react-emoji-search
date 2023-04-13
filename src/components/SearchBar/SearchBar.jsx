import React from "react";
import "./SearchBar.css";
import { FaGithub } from "react-icons/fa";
export default function SearchInput({ value, onChange }) {
  return (
    <header>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search emoji"
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/enes-96/react-emoji-search"
      >
        <FaGithub className="github-icon" />
      </a>
    </header>
  );
}
