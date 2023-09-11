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

    //タスクを進行中にする関数
    const onClickProcessing = (index) => {
        const newUntouchedTask = [...untouchedTask];
        newUntouchedTask.splice(index, 1);

        const newProcessingTask = [...processingTask, untouchedTask[index]];
        setProcessingTask(newProcessingTask)
        setUntouchedTask(newUntouchedTask);
        
        //untouchedTaskを直接配列操作しても結果が変わらないのはなぜ？
        // const newProcessingTask = [...processingTask, untouchedTask[index]];
        // untouchedTask.splice(index, 1);
        // setProcessingTask(newProcessingTask);
    }

    //タスクを完了する関数
    const onClickDone = (index) => {

        const newProcessingTask = [...processingTask];
        newProcessingTask.splice(index, 1);

        const newDoneTask = [...doneTask, processingTask[index]];

        setDoneTask(newDoneTask);
        setProcessingTask(newProcessingTask);

        //processingTaskを直接配列操作しても結果が変わらないのはなぜ？
        // const newDoneTask = [...doneTask, processingTask[index]];
        // processingTask.splice(index, 1);
        // setDoneTask(newDoneTask);
    }

    //タスクを進行中に戻す関数
    const onClickBack = (index) => {
        const newDoneTask = [...doneTask];
        newDoneTask.splice(index,1);

        const newProcessingTask = [...processingTask, doneTask[index]];

        setProcessingTask(newProcessingTask);
        setDoneTask(newDoneTask);
        
        //doneTaskを直接配列操作しても結果が変わらないのはなぜ？
        // const newProcessingTask = [...processingTask, doneTask[index]]
        // doneTask.splice(index, 1);
        // setProcessingTask(newProcessingTask);
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
                        {doneTask.map((task, index) => {
                            return(
                                <li className="task-list__item">
                                    <p>{task}</p>
                                    <button onClick={() => onClickBack(index)}>戻す</button>
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