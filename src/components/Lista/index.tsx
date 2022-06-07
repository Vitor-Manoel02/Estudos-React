import Item from './Item';
import style from './Lista.module.scss';
import { ITarefa } from '../../types/tarefas';

function Lista({tarefas}: {tarefas: ITarefa[]}) { // tarefa pode ser vazia ou conter info

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;