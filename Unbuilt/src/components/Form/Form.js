import React from 'react';

function Form(props) {
    return (
        <div>
            <div class="form-group bg-warning my-5 p-5 w-50 rounded mx-auto">
                {props.children}
            </div>
        </div>
    )
}

export default Form