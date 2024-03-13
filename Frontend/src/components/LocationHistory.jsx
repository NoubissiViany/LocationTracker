import React from 'react';


const locationHistoryData = [];

function LocationHistory() {
  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Location History</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Time</th>
            <th className="border px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {locationHistoryData.map((entry) => (
            <tr key={entry.id}>
              <td className="border px-4 py-2">{entry.date}</td>
              <td className="border px-4 py-2">{entry.time}</td>
              <td className="border px-4 py-2">{entry.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LocationHistory;
