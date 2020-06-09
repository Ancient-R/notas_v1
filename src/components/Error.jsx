import React from 'react'

const Error = ({ error }) => {
    return ( 
        <p className="h5 alert alert-danger text-center">{ error }</p>
    );
}

export default Error;