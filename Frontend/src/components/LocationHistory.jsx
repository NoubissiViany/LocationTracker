import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

function LocationHistory() {
  const userId = localStorage.getItem("id");
  const [locationData, setLocationData] = useState();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/get-locations/${userId}`
        );
        setLocationData(response.data.locations);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchLocation();
  }, []);

  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
      {loading ? (
        <Loader />
      ) : (
        <div>
          {" "}
          <h1 className="text-3xl font-bold mb-6">Location History</h1>
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Latitude</th>
                <th className="border px-4 py-2">Longitude</th>
                <th className="border px-4 py-2">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {locationData.map((entry) => (
                <tr key={entry.id}>
                  <td className="border px-4 py-2">{entry.latitude}</td>
                  <td className="border px-4 py-2">{entry.longitude}</td>
                  <td className="border px-4 py-2">{entry.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default LocationHistory;
