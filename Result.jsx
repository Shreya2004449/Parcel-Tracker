import React from "react";
import { useParams } from "react-router-dom";

export default function Result() {
  const { id } = useParams();

  // 👉 DATA YAHI PE (NO EXTRA FILE)
  const trackingData = [
    {
      id: "1234",
      status: "In Transit 🚚",
      location: "Lucknow",
      delivery: "20 April 2026",
    },
    {
      id: "5678",
      status: "Delivered ✅",
      location: "Delhi",
      delivery: "15 April 2026",
    },
    {
      id: "9999",
      status: "Out for Delivery 🏃",
      location: "Varanasi",
      delivery: "Tomorrow",
    }
  ];

  const data = trackingData.find((item) => item.id === id);

  if (!data) {
    return <h2 className="notfound">❌ Tracking ID Not Found</h2>;
  }

  return (
    <div className="result">
      <div className="card">
        <h2>📦 Tracking ID: {data.id}</h2>
        <p><strong>Status:</strong> {data.status}</p>
        <p><strong>Location:</strong> {data.location}</p>
        <p><strong>Delivery:</strong> {data.delivery}</p>
      </div>
    </div>
  );
}