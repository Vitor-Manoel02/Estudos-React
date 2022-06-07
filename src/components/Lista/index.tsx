import Item from './Item';
import style from './Lista.module.scss';
import { ITarefa } from '../../types/tarefas';

interface Props{
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props) { // tarefa pode ser vazia ou conter info

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map(item => (
          <Item
          selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          ></Item>
        ))}
      </ul>
    </aside>
  )
}

export default Lista;