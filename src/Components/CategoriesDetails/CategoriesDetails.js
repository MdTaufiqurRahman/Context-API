import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoriesDetails = () => {
    const newCount =useContext(CategoryContext);
    return (
        <div>
            <h3>Categories Details count:{newCount}</h3>
        </div>
    );
};

export default CategoriesDetails;