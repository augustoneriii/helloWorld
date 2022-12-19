import React from 'react'
import { ICadastro } from '../../types/cadastro'
import Botao from '../Botao'

class Formulario extends React.Component<{
    setCadastro: React.Dispatch<React.SetStateAction<ICadastro[]>>
}> {

    state = {
        nome: '',
        idade: '',
        altura: '',
        peso: ''
    }

    addPessoa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        this.props.setCadastro(cadastrosAntigos => [...cadastrosAntigos, { ...this.state }])
        this.setState({
            nome: '',
            idade: '',
            altura: '',
            peso: ''
        })
    }

    render() {
        return (
            <div className='container bg-light mt-5 p-4'>
                <form onSubmit={this.addPessoa.bind(this)}>
                    <div className="input-group mb-3">
                        <label htmlFor="nome" className="input-group-text" id="basic-addon1">Nome</label>
                        <input
                            id='nome'
                            type="text"
                            value={this.state.nome}
                            className="form-control"
                            onChange={evento => this.setState({ ...this.state, nome: evento.target.value })}
                            required
                        />
                    </div>
                    <div className="input-group mb-3">
                        <label htmlFor="idade" className="input-group-text" id="basic-addon1">Idade</label>
                        <input
                            id='idade'
                            type="number"
                            value={this.state.idade}
                            className="form-control"
                            onChange={evento => this.setState({ ...this.state, idade: evento.target.value })}
                            required
                        />
                    </div>
                    <div className="input-group mb-3">
                        <label htmlFor="altura" className="input-group-text" id="basic-addon1">Altura</label>
                        <input
                            id='altura'
                            type="number"
                            value={this.state.altura}
                            className="form-control"
                            onChange={evento => this.setState({ ...this.state, altura: evento.target.value })}
                            required
                        />
                    </div>
                    <div className="input-group mb-3">
                        <label htmlFor="peso" className="input-group-text" id="basic-addon1">Peso</label>
                        <input
                            id='peso'
                            type="number"
                            value={this.state.peso}
                            className="form-control"
                            onChange={evento => this.setState({ ...this.state, peso: evento.target.value })}
                            required
                        />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Botao />
                    </div>

                </form>
            </div >
        )
    }
}


export default Formulario