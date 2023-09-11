import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {DeleteButton} from './DeleteButton'; 

export const UntouchedTask = (props) => {

    const {untouchedTask, onClickProcessing, onClickDelete} = props;

    return(
        <div className="status-area__untouched">
            <p className="title">未着手のタスク</p>
            <ul className="task-list">
                {untouchedTask.map((task, index) => {
                    return(
                        <li key={uuidv4()} className="task-list__item">
                            <p>{task}</p>
                            <button onClick={() => onClickProcessing(index)}>着手</button>
                            <DeleteButton
                                onClick={onClickDelete}
                                index={index}
                                status={'untouched'}
                            />
                        </li>
                    );  
                })}
            </ul>
        </div>
    );
}