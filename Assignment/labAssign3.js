import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'; // Updated import

const App = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const getUserLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => console.log('Error getting location:', error),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    getUserLocation(); // Call the function immediately

    // Cleanup function for removing unnecessary subscriptions or listeners
    return () => {
      Geolocation.stopObserving(); // Stop observing when the component unmounts
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: userLocation ? userLocation.latitude : 0,
        longitude: userLocation ? userLocation.longitude : 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {userLocation && (
        <Marker coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude }} title="Your Location" />
      )}
      <Marker coordinate={{ latitude: 33.7103, longitude: 72.9778 }} title="COMSATS Attock" />
    </MapView>
  );
};

export default App;
