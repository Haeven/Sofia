import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const [dateClickCount, setDateClickCount] = useState({});

  const handleClick = async () => {
    const date = new Date().toISOString().split('T')[0];
    setClickCount(clickCount + 1);
    setDateClickCount({
      ...dateClickCount,
      [date]: (dateClickCount[date] || 0) + 1,
    });

  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <TouchableOpacity onPress={handleClick}>
          <Text>Click me!</Text>
        </TouchableOpacity>
        <Text>Click count: {clickCount}</Text>
      </View>
    </View>
  );
};

export default App;