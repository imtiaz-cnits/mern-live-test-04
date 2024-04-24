import React from 'react';
const Greetings = ({ isGreeting }) => {
    return (
        <div>
            {isGreeting ? "Hello, World!" : "Goodbye"}
        </div>
    );
};
export default Greetings;