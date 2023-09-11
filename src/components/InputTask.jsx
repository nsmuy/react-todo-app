import React from "react";

export const InputTask = (props) => {
    const {task, onChange, onClick} = props;
    return(
        <div className="input-area">
                <input
                    value={task}
                    onChange={onChange}
                    placeholder="タスクを入力してください。"
                    type="text"
                />
                <button className="add-button" onClick={onClick}>追加</button>
        </div>
    );
}