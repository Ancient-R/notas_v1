import React from 'react'

const HeaderNota = ({clase, titulo }) => {
    return ( 
        <div className={`card-header ${clase}` }>
            <p className="card-title h4 text-center">{titulo}</p>
        </div>
    );
}

export default HeaderNota;