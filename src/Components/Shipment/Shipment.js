import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [count, setCount] = useContext(CategoryContext);
    return (
        <div style={{border: '1px solid red', marginTop:'10px',padding: '10px'}} >
            <h3>Shipment:{count}</h3>
            <button  onClick={()=>setCount(count+1)}>Again Click</button>
        </div>
    );
};

export default Shipment;