import React from 'react'
function Input({ tip, mesaj, degisme }) {
    return (
        <div className='col-md-12 py-2 mx-auto'>
            <input
                type={tip} className='form-control'
                placeholder={mesaj} onChange={degisme}
            />
        </div>
    )
}

export default Input;