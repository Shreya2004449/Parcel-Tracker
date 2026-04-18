import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!id.trim()) return alert("Enter Tracking ID");
    navigate(`/result/${id}`);
  };

  return (
    <div className="home">
      <h1>📦 Parcel Tracker</h1>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Enter Tracking ID..."
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleSearch}>Track 🚀</button>
      </div>

      <p>Try: 1234 / 5678 / 9999</p>
    </div>
  );
}