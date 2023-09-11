import React from 'react';

export const UntouchedTask = (props) => {

    const {untouchedTask, onClickProcessing, onClickDelete} = props;

    return(
        <div className="status-area__untouched">
            <p className="title">未着手のタスク</p>
            <ul className="task-list">
                {untouchedTask.map((task, index) => {
                    return(
                        <li key={task} className="task-list__item">
                            <p>{task}</p>
                            <button onClick={() => onClickProcessing(index)}>着手</button>
                            <button onClick={() => onClickDelete(index, 'untouched')}>削除</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}