// CVDisplayScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const CVDisplayScreen = ({ route }) => {
  const [cvData, setCVData] = useState('');

  useEffect(() => {
    // Fetch stored data from local storage
    // Display data in a well-organized manner
    setCVData(route.params.cvData);
  }, [route.params.cvData]);

  return (
    <View>
      <Text>CV Display</Text>
      <Text>{cvData}</Text>
    </View>
  );
};

export default CVDisplayScreen;
