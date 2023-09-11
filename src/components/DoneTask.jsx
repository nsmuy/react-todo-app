import React from "react";
import { v4 as uuidv4 } from 'uuid';
import {DeleteButton} from './DeleteButton'; 

export const DoneTask = (props) => {
    const {doneTask, onClickBack, onClickDelete} = props;

    return(
        <div className="status-area__done">
            <p className="title">完了したタスク</p>
            <ul className="task-list">
                {doneTask.map((task, index) => {
                    return(
                        <li key={uuidv4()} className="task-list__item">
                            <p>{task}</p>
                            <button onClick={() => onClickBack(index)}>戻す</button>
                            <DeleteButton
                                onClick={onClickDelete}
                                index={index}
                                status={'done'}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}