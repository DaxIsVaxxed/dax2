import { useState } from 'react';

function Counter({ increment, buttonColor }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevCount) => (prevCount + increment > 10 ? 0 : prevCount + increment));
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement} style={{ backgroundColor: buttonColor }}>
                Increment by {increment}
            </button>
        </div>
    );
}

export default Counter;
