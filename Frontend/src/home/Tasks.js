import React, {useState, useEffect } from 'react';
import imgDelete from '../img/download.jpeg';
import imgEdit from '../img/edit-icon-image-0.jpg';
import axios from 'axios';

const Tasks = () => {

  const [tasks, setTasks] = useState([]);
  const [val, setVal] = useState('');
  const [flag, setFlag] = useState(false);
  

  const url = 'http://localhost:8000'

  useEffect(async() => {
    await axios.get(`${url}/allTasks`).then(res => {
     setTasks(res.data);
    });
  }, [tasks])

  const submit = async() => {
    await axios.post(`${url}/createTask`, {
      text: val,
      isCheck: false
    }).then(res => {
      setVal(res.data);
    });  
  }

  const deleteFunction = async(id) => {
    await axios.delete(`${url}/deleteTask?_id=${id}`).then(res => {
      const deleteTask = tasks.filter((task) => task._id !== id);
      setTasks(deleteTask);
    });
  }

  const isCheckFunction = async(id, Check) => {
    await axios.patch(`${url}/updateTask`, {
      _id: id,
      isCheck: !Check
    }).then(res => {
    });
  }

  const editFunction = async(id, Check, text, index) => {

    // await axios.patch(`${url}/updateTask`, {
    //   text: text,
    //   isCheck: !Check,
    //   _id: id,
    // }).then(res => {
    // });
  }
  //editFunction(task._id, task.isCheck, task.text)

  tasks.sort((a, b) => {
    if (a.isCheck === b.isCheck) return 0;

    return (a.isCheck > b.isCheck ? 1 : -1);
  })

  return (
    <div className='tasks'>
      <div className='put'>
        <form onSubmit={submit}>
          <input value={val} onChange={(e) => setVal(e.target.value)}></input>
          <button>Add</button>
        </form>
      </div>
      <div className='main-tasks'>
        {
          tasks.map((task, index) => (
            <div className='task' key={`task-${index}`}>
              <div className='div-input'>
                <input className='isCheck' type={'checkbox'} checked={task.isCheck} onChange={() => isCheckFunction(task._id, task.isCheck)}></input>
              </div>
              <div className='div-p'>
                <p className={task.isCheck ? 'text' : ''}>{task.text}</p>
              </div>
              <div className='imgButton'>
                <div className='edit-div'>
                  <img className='edit-img' src={imgEdit} alt='Упс' onClick={() =>{ setFlag(true);editFunction(task._id, task.isCheck, task.text, index)}}></img>
                </div>
                <div className='delete-img'>
                  <img src={imgDelete} alt='Упс' onClick={() => deleteFunction(task._id)}></img>
                </div> 
              </div>  
            </div>
          ))
        }
      </div> 
    </div>

  );
}

export default Tasks;