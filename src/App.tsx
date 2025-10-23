import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="p-6 text-center">
            <h1>ServiceMap Admin Portal</h1>
            <p>Environment: DEV</p>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    );
}

export default App;
