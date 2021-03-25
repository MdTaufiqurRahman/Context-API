import React from 'react';

const Home = (props) => {
    const {count,setCount} = props;
    return (
        <div>
            <h1>Home:{count}</h1>
            <button onClick={()=>setCount(count+1)} >Click Me</button>
        </div>
    );
};

export default Home;