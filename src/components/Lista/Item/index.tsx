import style from '../Item/Item.module.scss'
import { ITarefa } from '../../../types/tarefas';

interface Props extends ITarefa{
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


export default function Item({ tarefa, tempo, selecionado, concluido, id, selecionaTarefa}: Props) {
  return (
    <li className={`${style.item} ${selecionado ? style.itemSelecionado: ''}`} onClick={() => selecionaTarefa(
      {
      tarefa,
      tempo,
      selecionado,
      concluido,
      id
      }
    )}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}