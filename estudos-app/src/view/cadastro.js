import React from 'react'
import { Link } from 'react-router-dom'

function Cadastro() {
    return (
        <>
            <div className="jumbotron">
                <div style={{marginLeft: "40px"}}>
                    <h2>Bem vindo a aba cadastro!</h2>
                    <p className="lead">
                         A seguir selecione o que deseja cadastrar:
                    </p>
                </div>
                <div className="row" style={{marginLeft: "30px", marginTop: "30px"}}>
                    <div className="col-md-3">
                        <Link className="btn btn-primary btn-lg" to="/cadastro/cadastro-materia" role="button"
                        style={{width: "250px"}}>Matéria</Link>
                    </div>
                    <div className="col-md-3">
                        <Link className="btn btn-primary btn-lg" to="/" role="button" style={{width: "250px"}}>Atividade</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastro;