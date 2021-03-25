import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Home = (props) => {
    const [count, setCount] = useContext(CategoryContext);
    return (
        <div>
            <h1>Home:{count}</h1>
            <button onClick={()=>setCount(count+1)} >Click Me</button>
        </div>
    );
};

export default Home;