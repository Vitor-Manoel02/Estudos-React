import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{type?: "button" | "submit" | "reset" | undefined, //props opcional = ?:
  onClick?: ()=> void }> { 
  render() {
    const {type="button", onClick} = this.props;
    return (
      <button onClick={onClick}  className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao;