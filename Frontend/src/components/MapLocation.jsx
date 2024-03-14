import React, { useRef } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import useGeolocation from './useGeolocation';
import { Icon } from 'leaflet';
import { TbWorld } from "react-icons/tb";

const MapLocation = () => {
  const location = useGeolocation();
  const mapRef = useRef(null); // Define a reference for the MapContainer

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    iconSize: [38, 38] //size of the icon
  });

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.flyTo([location.coordinates.lat, location.coordinates.lng], 13, { animate: true });
    } else {
      alert(location.error.message);
    }
  };

  return (
    <div className="container mx-auto my-3 p-1 shadow-lg rounded-lg">
      <button onClick={showMyLocation} className='flex bg-gradient-to-r from-red-400 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-bold h-8 rounded-full justify-center items-center p-5 m-3 ml-12'>Locate Me <TbWorld className='ml-1' /></button>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} ref={mapRef}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {location.loaded && !location.error && (
          <Marker position={[location.coordinates.lat, location.coordinates.lng]} icon={customIcon}></Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapLocation;
