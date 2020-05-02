import React from 'react'

import { Link } from 'react-router-dom'

class UserPage extends React.Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        Disciplinas -
                    </div>
                    <div className="card-body">
                        <form id="frmProduto" >
                            <h3>Materia</h3>
                            <div className="row">
                                <div className="col-md-10">
                                    <h5>NomeDisciplina</h5>
                                </div>

                                <div className="col-md-2">
                                    <div className="form-group">
                                        <h5>Nota: 80 %</h5>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="progress" style={{ height: "20px" }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>Progresso: 80%{}</div>
                        </div>
                        <div style={{ width: "150px", marginTop: "150px", }}>
                            <Link className="btn-primary btn-lg" to="/" role="button">Sair - Logoff</Link>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default UserPage;

//<label>Materia</label>
//<input type="text" name="nome" className="form-control" />


//<label>SKU: *</label>
//<input type="text" name="sku" className="form-control" />


//<table className="table table-hover">
//                                        <thead>
//                                            <tr>
//                                                <td>NomeDisciplina{}</td>
//                                                <td align="right">Nota:</td>
//                                            </tr>
//                                        </thead>
//                                    </table>