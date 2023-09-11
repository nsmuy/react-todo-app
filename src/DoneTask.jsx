import React from "react";

export const DoneTask = (props) => {
    const {doneTask, onClickBack, onClickDelete} = props;

    return(
        <div className="status-area__done">
            <p className="title">完了したタスク</p>
            <ul className="task-list">
                {doneTask.map((task, index) => {
                    return(
                        <li key={task} className="task-list__item">
                            <p>{task}</p>
                            <button onClick={() => onClickBack(index)}>戻す</button>
                            <button onClick={() => onClickDelete(index, 'done')}>削除</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}