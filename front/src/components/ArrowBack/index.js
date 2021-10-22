import React from 'react';
import { Link } from 'react-router-dom';


export const ArrowBack = () => {
    return (
        <div>
            <Link to={'/'} class="fas fa-arrow-circle-left">Voltar</Link>
        </div>
    )
}
