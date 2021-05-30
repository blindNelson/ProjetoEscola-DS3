import React, { Component } from 'react';
import LinhaAluno from '../LinhaAluno';
import './ListagemAlunos.css';

const Alunos = [
    { 'ra': 11111, 'nome': 'André Silva Costa Santos Albuquerque', 'codCurso': 19},
    { 'ra': 22222, 'nome': 'Amanda', 'codCurso': 28},
    { 'ra': 33333, 'nome': 'Pedro', 'codCurso': 39},
    { 'ra': 44444, 'nome': 'Alice', 'codCurso': 59},
];

export default class ListagemAlunos extends Component{
    render(){
        return(
        <div className="listagem">
            <h1 className="tituloListagem">Listagem de Alunos</h1>
            <table className="listaAlunos" id="tblListaAlunos">
                <thead>
                    <tr className="cabecTabela">
                        <th className="tabTituloRa">Ra</th>
                        <th className="tabTituloNome">Nome</th>
                        <th className="tabTituloCurso">Curso</th>
                    </tr>
                </thead>
                {Alunos.map((aluno) => <LinhaAluno ra={aluno.ra} nome={aluno.nome} codCurso={aluno.codCurso} />)}
            </table>
        </div>);
    }
}