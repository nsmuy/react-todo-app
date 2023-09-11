import React from "react";
import './styles.css';

export const App = () => {
    return (
        <>
            <div id="input-area" className="input-area">
                <input placeholder="タスクを入力してください。" type="text" />
                <button className="add-button">追加</button>
            </div>

            <div id="status-area" className="status-area">

                {/* 未着手のタスク */}
                <div className="status-area__untouched">
                    <p class="title">未着手のタスク</p>
                    <ul className="task-list">
                        <li className="task-list__item">
                            <p>タスク1</p>
                            <button>着手</button>
                            <button>削除</button>
                        </li>
                        <li className="task-list__item">
                            <p>タスク2</p>
                            <button>着手</button>
                            <button>削除</button>
                        </li>
                    </ul>
                </div>


                {/* 進行中のタスク */}
                <div className="status-area__processing">
                    <p class="title">進行中のタスク</p>
                    <ul className="task-list">
                        <li className="task-list__item">
                            <p>タスク3</p>
                            <button>完了</button>
                            <button>削除</button>
                        </li>
                        <li className="task-list__item">
                            <p>タスク4</p>
                            <button>完了</button>
                            <button>削除</button>
                        </li>
                    </ul>
                </div>


                {/* 完了したタスク */}
                <div className="status-area__done">
                    <p class="title">完了したタスク</p>
                    <ul className="task-list">
                        <li className="task-list__item">
                            <p>タスク5</p>
                            <button>戻す</button>
                            <button>削除</button>
                        </li>
                        <li className="task-list__item">
                            <p>タスク6</p>
                            <button>戻す</button>
                            <button>削除</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}