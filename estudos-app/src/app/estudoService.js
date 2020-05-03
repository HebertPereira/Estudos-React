const DISCIPLINAS = '_DISCIPLINAS'

export default class EstudoService{

    obterProdutos = () => {
        const verificaMaterias = localStorage.getItem(DISCIPLINAS)
        if(!verificaMaterias){
            return [];
        }
        return JSON.parse(verificaMaterias)
    }

    obterIndex = (disciplina) => {
        let index = null;
        this.obterProdutos().forEach( (disciplina, i) => {
            if(disciplina.materia === disciplina ){
                index = i;
            }
        })
        return index;
    }

    cadastroDisciplinas = (disciplina) =>{
        let materias = localStorage.getItem('DISCIPLINAS')
        
        if(!materias){
            materias = []
        }else{
            materias = JSON.parse(materias)
        }
        console.log(materias)


        const index = this.obterIndex(disciplina.materia)
        console.log(index)
        if(index === null){
            materias.push(disciplina);  
        }else{
            materias[index] = disciplina;
        }


        materias.push(disciplina)
        console.log(materias)
        localStorage.setItem(DISCIPLINAS, JSON.stringify(materias)  )
    }

    
}