import React from "react";

export const ProcessingTask = (props) => {
    const {processingTask, onClickDone, onClickDelete} = props;

    return(
        <div className="status-area__processing">
            <p className="title">進行中のタスク</p>
            <ul className="task-list">
                {processingTask.map((task, index) => {
                    return(
                        <li key={task} className="task-list__item">
                            <p>{task}</p>
                            <button onClick={() => onClickDone(index)}>完了</button>
                            <button onClick={() => onClickDelete(index, 'processing')}>削除</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}