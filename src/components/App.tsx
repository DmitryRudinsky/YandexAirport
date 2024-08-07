import React, {useState} from 'react';

export const App: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const IncreaseFunc = () => setCount(prev => prev + 1)
     return(
        <div>
            <h1>{count}</h1>
            <button onClick={IncreaseFunc}>Increase</button>
        </div>
    );
};