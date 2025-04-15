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
    'Scientific': true,
    'Mythical': true,
    'Fictional': true,
    'Time-Slip Encounter': true,
    'Historical Distortion Site': true,
    'Geo-Temporal Field': true,
    'Verified Drift Zone': true,
    'Theoretical Time Rift': true,
    'Mass Vanishing Event': true,
    'Chrono-Sealed Location': true,
    'Temporal Disaster Zone': true
  });
  

  const handleToggle = (type) => {
    setFilter((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <><div class="map-anomalies"><h2>Map of the Anomalies</h2></div>
    
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
      {/* <TileLayer
  url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  attribution='© Stadia Maps, OpenMapTiles, OpenStreetMap'
/> */}

<TileLayer
  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  attribution='© OpenStreetMap & CartoDB'
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
