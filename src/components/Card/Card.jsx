import React from 'react';

function Card({ title, characteristics }) {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '200px' }}>
            <h2>{title}</h2>
            <ul style={{ padding: 0, listStyleType: 'none' }}>
                {characteristics.map((characteristic, index) => (
                    <li key={index}>{characteristic}</li>
                ))}
            </ul>
        </div>
    );
}

export default Card;