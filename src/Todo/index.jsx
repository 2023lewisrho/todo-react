import { BsFillTrashFill } from "react-icons/bs";
import { BiRadioCircleMarked, BiRadioCircle } from "react-icons/bi";
import { useState } from "react";
import styled from 'styled-components'

const DeleteButton = styled.button`
    margin-left: auto;
    align-self: flex-end;
    border: none;
    background: none;
`;

const TodoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
`;

function Todo(props) {
    const order = props.index;
    const text = props.children;
    const item = props.checked;
    
    function onRemoveClicked() {
        props.onRemoveClicked(order)
    }

    function onChanged() {
        props.onChanged(order, item);
    }
    
    return (
        <TodoContainer>
            <input type="checkbox" id={`todo-item-num-${order}`} name={`todo-item-num-${order}`} checked={item} onChange={onChanged} />
            <label htmlFor={`todo-item-num-${order}`} className='visually-hidden'>{`Check Completed for Todo Item "${item.name}" (number #${order})`}</label>
            {text}
            <DeleteButton>
                <BsFillTrashFill onClick={onRemoveClicked}/>
            </DeleteButton>
        </TodoContainer>
    );
}

export default Todo;
