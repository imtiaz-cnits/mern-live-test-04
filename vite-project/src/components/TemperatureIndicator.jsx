import React from 'react';
const TemperatureIndicator = ({ temperature }) => {
    if (temperature > 30) {
        return <p>It's hot!</p>;
    }
    else if (temperature < 20) {
        return <p>It's Cool</p>;
    }
};
export default TemperatureIndicator;