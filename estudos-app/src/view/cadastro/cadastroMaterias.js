import React from 'react'
import EstudoService from '../../app/estudoService';


const estadoInicial = {
    materia: null,
    sucesso: null
}

export default class Cadastradisciplina extends React.Component {
    state = estadoInicial;
    constructor() {
        super()
        this.service = new EstudoService();
     
    }

    onChange = (event) => {
        const valor = event.target.value
        this.setState({materia : valor})
        console.log(this.state.disciplina)
        
    }

    onSubmit = (event) => {
         const disciplina = this.state.materia

         try{
             if(disciplina != null){
                this.setState({sucesso: true})
                console.log(this.state)
                this.service.cadastroDisciplinas(disciplina)
             }
            
         }catch(erro){
            //alert("Não foi possivel realizar o processo devido a um erro interno. Tente novamente mais tarde.")

         }
    }

    render(){
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        Cadastrar nova disciplina
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <h6>disciplina:</h6>
                            <div className="col-md-10">
                                <div className="form-group">
                                    <input onChange={this.onChange} placeholder="Digite o nome da disciplina" type="text" name="disciplina" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="form-group">
                                    <button className="btn-success" style={{width: "140px", height: "40px", fontSize: "20px", bottom:"1px" }} onClick={this.onSubmit}>Adcionar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}