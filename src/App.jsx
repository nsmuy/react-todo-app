import React, { useState } from "react";
import './styles.css';

export const App = () => {

    const [task, setTask] = useState('');
    const [untouchedTask, setUntouchedTask] = useState([]);
    const [processingTask, setProcessingTask] = useState([]);
    const [doneTask, setDoneTask] = useState([]);

    const onChangeTask = (event) => {setTask(event.target.value);}

    // タスクを追加する関数
    const onClickAdd = () => {
        if (task === '') return;
        const newTask = [...untouchedTask, task];
        setUntouchedTask(newTask);
        setTask('');
    }

    const onClickProcessing = (index) => {
        const newProcessingTask = [...processingTask, untouchedTask[index]];
        setProcessingTask(newProcessingTask);
        console.log(processingTask);
    }

    const onClickDone = (index) => {
        const newDoneTask = [...doneTask, processingTask[index]];
        setDoneTask(newDoneTask);
    }

    return (
        <>
            <div id="input-area" className="input-area">
                <input
                    value={task}
                    onChange={onChangeTask}
                    placeholder="タスクを入力してください。"
                    type="text"
                />
                <button className="add-button" onClick={onClickAdd}>追加</button>
            </div>

            <div id="status-area" className="status-area">

                {/* 未着手のタスク */}
                <div className="status-area__untouched">
                    <p className="title">未着手のタスク</p>
                    <ul className="task-list">
                        {untouchedTask.map((task, index) => {
                            return(
                                <li key={task} className="task-list__item">
                                    <p>{task}</p>
                                    <button onClick={() => onClickProcessing(index)}>着手</button>
                                    <button>削除</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>


                {/* 進行中のタスク */}
                <div className="status-area__processing">
                    <p className="title">進行中のタスク</p>
                    <ul className="task-list">
                        {processingTask.map((task, index) => {
                            return(
                                <li key={task} className="task-list__item">
                                    <p>{task}</p>
                                    <button onClick={() => onClickDone(index)}>完了</button>
                                    <button>削除</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>


                {/* 完了したタスク */}
                <div className="status-area__done">
                    <p className="title">完了したタスク</p>
                    <ul className="task-list">
                        {doneTask.map((task) => {
                            return(
                                <li className="task-list__item">
                                    <p>{task}</p>
                                    <button>戻す</button>
                                    <button>削除</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}