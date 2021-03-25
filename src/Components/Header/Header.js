import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Catagories from '../Categories/Catagories';

const Header = () => {
    const category = useContext(CategoryContext);
    return (
        <div style={{border: '2px solid purple', marginTop:'10px',padding:'10px'}} >
            <h2>Header: {category}</h2>
            <Catagories></Catagories>
        </div>
    );
};

export default Header;