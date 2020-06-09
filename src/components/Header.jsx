import React from 'react'

const Header = () => {
    return ( 
        <header className="bg-primary p-5 text-white text-center">
            <h1 className="jumbotron bg-primary">
                Crea <span><i className="fas fa-pencil-alt ml-2"/></span><br/>
                Edita <span><i className="fas fa-edit ml-2" /></span><br/>
                Gestiona tus notas
                <span><i className="far fa-sticky-note ml-3"/></span>
            </h1>
        </header>
    );
}

export default Header;