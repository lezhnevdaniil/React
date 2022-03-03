import React from 'react';
import './Modal.scss';
import imgOk from '../img/ok.png';
import axios from 'axios';

const Modal = ({active, setActive, children, setEditInput, task, editInput}) => {

  const url = 'http://localhost:8000';

  const editFunction = async(editInput, task) => {
    await axios.patch(`${url}/updateTask`, {
      text: editInput,
      _id: task._id
    }).then(res => {
    });
  }

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modalContent active' : 'modalContent'} onClick={e => e.stopPropagation()}>
        <div className='information'>
          <p>Изменить:</p>
          {children}
        </div>
        <div className='ok-div'>
          <input className='edit-text' type={'text'} placeholder={'Введите другой текст'} onChange={(e) => setEditInput(e.target.value)}></input>
          <img className='ok-img' src={imgOk} alt='Упс'  onClick={() => {editFunction(editInput, task); setActive(false)}}></img>
        </div>
      </div>
    </div>
  );
}

export default Modal;