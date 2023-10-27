import React from 'react';
import Card from '../Card/Card';

function ContainerBox() {
    const cabezasDeBoskoData = [
        {
            title: 'Cabeza 1',
            characteristics: [
                'Característica 1',
                'Característica 2',
                'Característica 3',
                'Característica 4',
            ],
        },
        {
            title: 'Cabeza 1',
            characteristics: [
                'Característica 1',
                'Característica 2',
                'Característica 3',
                'Característica 4',
            ],
        },
        {
            title: 'Cabeza 1',
            characteristics: [
                'Característica 1',
                'Característica 2',
                'Característica 3',
                'Característica 4',
            ],
        },
        {
            title: 'Cabeza 1',
            characteristics: [
                'Característica 1',
                'Característica 2',
                'Característica 3',
                'Característica 4',
            ],
        },
        {
            title: 'Cabeza 1',
            characteristics: [
                'Característica 1',
                'Característica 2',
                'Característica 3',
                'Característica 4',
            ],
        },
        // Agrega más objetos de datos para cada cabeza de Bosko si es necesario
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
            {cabezasDeBoskoData.map((cabeza, index) => (
                <Card key={index} title={cabeza.title} characteristics={cabeza.characteristics} />
            ))}
        </div>
    );
}

export default ContainerBox;