"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const About = () => {
  const [position, setPosition] = useState<LatLngExpression | null>(null);
  const icon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    iconSize: [38, 38]
  });
  useEffect(() => {
    const id = navigator.geolocation.watchPosition(
      (e) => {
        const latitude = e.coords.latitude;
        const longitude = e.coords.longitude;
        const newPosition: LatLngExpression = [latitude, longitude];
        console.log(newPosition);
        setPosition(newPosition);
      },
      (err) => {
        console.log(`ERROR(${err.code}): ${err.message}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
    return () => {
      navigator.geolocation.clearWatch(id);
    };
  }, []);

  return (
    position && (
      <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
        <TileLayer
          attribution="Google Maps"
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
          // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
          // url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        {position && (
          <Marker position={position} icon={icon}>
            <Popup>You😁</Popup>
          </Marker>
        )}
      </MapContainer>
    )
  );
};

export default About;
