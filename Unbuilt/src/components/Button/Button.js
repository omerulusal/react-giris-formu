import React from 'react';

function Button({ tiklandi }) {

    return (
        <div className='d-block py-4 text-center'>
            <button
                type='button'
                className='btn btn-lg w-50 btn-dark'
                onClick={tiklandi}
            >Login
            </button>
        </div>
    )
}

export default Button