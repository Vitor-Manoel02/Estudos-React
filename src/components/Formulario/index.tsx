import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { ITarefa } from '../../types/tarefas';

class Formulario extends React.Component<{
  setTarefas:React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state = { //valor do formulario vem para cá 
    tarefa: "",
    tempo: "00:00"
  }
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault();
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}])
    console.log('state: ', this.state);
    
  }
  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
            value={this.state.tarefa}
            onChange={evento => this.setState({...this.setState, tarefa: evento.target.value})}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
            value={this.state.tempo}
            onChange={evento => this.setState({...this.setState, tempo: evento.target.value})} // para mudar no formulario ao mesmo tempo
          />
        </div>
        <Botao type="submit">
          Adicionar
        </Botao>
      </form>
    )
  }
}

export default Formulario;