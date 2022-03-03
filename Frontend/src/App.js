import React, { useState } from 'react';
import Tasks from './home/Tasks';
import Modal from './home/Modal';
import './App.scss';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [val, setVal] = useState('');
  const [active, setActive] = useState(false);
  const [edit, setEdit] = useState([]);
  const [editInput, setEditInput] = useState([]);
  const [task, setTask] = useState([]);

  return (
    <div className="App">
    <Modal active={active} setActive={setActive} setEditInput={setEditInput} task={task} setTask={setTask} editInput={editInput}>
        <p>{edit}</p>
    </Modal>
      <div className='wrap'>
        <h1 className='header'>Hellow world!</h1>
      </div>
      <Tasks tasks={tasks} setTask={setTask} setTasks={setTasks} val={val} setVal={setVal} active={active} setActive={setActive} setEdit={setEdit} editInput={editInput}/>
    </div>
  );
}

export default App;
