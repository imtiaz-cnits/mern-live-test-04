import React from 'react';
import Person from "./components/Person.jsx";
import Greetings from "./components/Greetings.jsx";
import TemperatureIndicator from "./components/TemperatureIndicator.jsx";

const App = () => {
    return (
        <div>
            <Person name={"Rahat"}/>
            <Greetings isGreeting={false}/>
            <TemperatureIndicator temperature={19}/>
        </div>
    );
};
export default App;