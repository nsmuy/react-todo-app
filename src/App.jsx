import React, { useState } from "react";
import {InputTask} from './components/InputTask'; 
import {UntouchedTask} from './components/UntouchedTask'; 
import {ProcessingTask} from './components/ProcessingTask'; 
import {DoneTask} from './components/DoneTask'; 
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

    //タスクを削除する関数
    const onClickDelete = (index, status) => {
        if (status === 'untouched') {
            const newUntouchedTask = [...untouchedTask]
            newUntouchedTask.splice(index, 1);
            setUntouchedTask(newUntouchedTask);
        } else if (status === 'processing') {
            const newProcessingTask = [...processingTask]
            newProcessingTask.splice(index, 1);
            setProcessingTask(newProcessingTask);
        } else if (status === 'done') {
            const newDoneTask = [...doneTask]
            newDoneTask.splice(index, 1);
            setDoneTask(newDoneTask);
        }
    }

    return (
        <>

            <InputTask
                task={task}
                onChange={onChangeTask}
                onClick={onClickAdd}
            />

            <div className="status-area">

                {/* 未着手のタスク */}
                <UntouchedTask
                    untouchedTask={untouchedTask}
                    onClickProcessing={onClickProcessing}
                    onClickDelete={onClickDelete}
                />

                {/* 進行中のタスク */}
                <ProcessingTask 
                    processingTask={processingTask}
                    onClickDone={onClickDone}
                    onClickDelete={onClickDelete}
                />


                {/* 完了したタスク */}
                <DoneTask
                    doneTask={doneTask}
                    onClickBack={onClickBack}
                    onClickDelete={onClickDelete}
                />
            </div>
        </>
    );
}