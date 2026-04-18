import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (id.trim()) {
      navigate(`/result/${id}`);
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Tracking ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button className="btn btn-primary" onClick={handleSearch}>
        Track
      </button>
    </div>
  );
}

export default SearchBar;