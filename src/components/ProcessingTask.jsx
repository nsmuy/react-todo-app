import React from "react";
import { v4 as uuidv4 } from 'uuid';
import {DeleteButton} from './DeleteButton'; 

export const ProcessingTask = (props) => {
    const {processingTask, onClickDone, onClickDelete} = props;

    return(
        <div className="status-area__processing">
            <p className="title">進行中のタスク</p>
            <ul className="task-list">
                {processingTask.map((task, index) => {
                    return(
                        <li key={uuidv4()} className="task-list__item">
                            <p>{task}</p>
                            <button onClick={() => onClickDone(index)}>完了</button>
                            <DeleteButton
                                onClick={onClickDelete}
                                index={index}
                                status={'processing'}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}