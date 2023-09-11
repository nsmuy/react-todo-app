import React from 'react';

export const DeleteButton = (props) => {
    const {onClick, index, status} = props;

    return(
        <button onClick={() => onClick(index, status)}>削除</button>
    );
}