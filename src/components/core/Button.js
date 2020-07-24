import React from 'react';

const Button = ({ children, isSelected, onClick}) => {
    return (
        <button 
        className='btn-primary'
        onClick={onClick}>
        {children}
        </button>
    )
};





export default Button;