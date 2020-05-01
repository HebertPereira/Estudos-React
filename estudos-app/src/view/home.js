import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className="jumbotron">
            <h1 className="display-3">Bem vindo!</h1>
            <p className="lead">
                Este é seu sistema, utilize o botão login para entrar e gerenciar seus estudos. =)
            </p>
            <hr className="my-4" />
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/Login" role="button">Login</Link>
            </p>
        </div>
    )
}

export default Home;