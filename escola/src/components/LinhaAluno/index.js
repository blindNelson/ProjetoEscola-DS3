import React, { Component } from 'react';

export default class LinhaAluno extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <tbody>
                <tr>
                    <td>{ this.props.ra }</td>
                    <td>{ this.props.nome }</td>
                    <td>{ this.props.codCurso }</td>
                </tr>
            </tbody>
        )
    }
}