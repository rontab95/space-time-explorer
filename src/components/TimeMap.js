import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import anomalies from '../data/anomalies.json';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './TimeMap.css';
import { Tooltip } from 'react-leaflet';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
});

const TimeMap = () => {
  const [filter, setFilter] = useState({
    Scientific: true,
    Mythical: true,
    Fictional: true
  });

  const handleToggle = (type) => {
    setFilter((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <>
      <div className="filter-panel">
        {Object.keys(filter).map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              checked={filter[type]}
              onChange={() => handleToggle(type)}
            />
            {type}
          </label>
        ))}
      </div>

      <MapContainer center={[20, 0]} zoom={2} style={{ height: '100vh' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {anomalies
          .filter((a) => filter[a.type])
          .map((spot, i) => (
            <Marker
            key={i}
            position={[spot.lat, spot.lng]}
            icon={L.divIcon({
              className: `custom-icon marker-icon--${spot.type.toLowerCase()}`,
              iconSize: [20, 20],
              html: '<div></div>'
            })}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={0.9} permanent={false}>
              <div style={{ textAlign: 'center' }}>
                <strong>{spot.name}</strong><br />
                <small>{spot.drift}</small>
              </div>
            </Tooltip>
          
            <Popup>
                
              <strong>{spot.name}</strong><br />
              <em>{spot.type}</em><br />
              Time Drift: {spot.drift}<br />
              {spot.description}
            </Popup>
          </Marker>
          

          ))}
      </MapContainer>
    </>
  );
};

export default TimeMap;
