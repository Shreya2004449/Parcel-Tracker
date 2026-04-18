import React from "react";
function TrackCard({ data }) {
  return (
    <div className="card mt-4 shadow-lg border-0">
      <div className="card-body">
        <h5 className="text-primary">Tracking ID: {data.id}</h5>

        <p>
          Status: <span className="badge bg-success">{data.status}</span>
        </p>

        <p>📍 Location: {data.location}</p>
        <p>📦 Delivery: {data.delivery}</p>
      </div>
    </div>
  );
}

export default TrackCard;