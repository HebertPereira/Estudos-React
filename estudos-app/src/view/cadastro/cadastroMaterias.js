import React from 'react'
import EstudoService from '../../app/estudoService';


const estadoInicial = {
    materia: null,
    sucesso: null
}

export default class CadastraMateria extends React.Component {
    state = estadoInicial;
    //constructor() {
       // super()
        //this.service = new EstudoService;
     
    //}

    onChange = (event) => {
        const valor = event.target.value
        this.setState({materia : valor})
        console.log(this.state.materia)
        
    }

    onSubmit = (event) => {
         const materia = { nomeMateria: this.state.materia}

         try{
             if(this.state.materia != null){
                console.log(materia)
                this.setState({sucesso: true})
             }
            
         }catch(erro){
            alert("Não foi possivel realizar o processo devido a um erro interno. Tente novamente mais tarde.")

         }
    }

    render(){
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        Cadastrar nova materia
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <h6>Materia:</h6>
                            <div className="col-md-10">
                                <div className="form-group">
                                    <input onChange={this.onChange} placeholder="Digite o nome da materia" type="text" name="materia" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-2">
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