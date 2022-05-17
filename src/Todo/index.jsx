import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from 'styled-components'

const DeleteButton = styled.input`
    margin-left: auto;
    align-self: flex-end;
`;

const TodoContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
`;

function Todo(props) {
    const order = props.index;
    const text = props.children;
    const [item, setItem] = useState(false);
    
    function onRemoveClicked() {
        props.onRemoveClicked(order)
    }

    return (
        <TodoContainer>
            <input type="checkbox" id={`todo-item-num-${order}`} name={`todo-item-num-${order}`} value="" />
            <label htmlFor={`todo-item-num-${order}`} className='visually-hidden'>{`Check Completed for Todo Item "${item.name}" (number #${order})`}</label>
            {text}
            <DeleteButton type="button" onClick={onRemoveClicked}></DeleteButton>
        </TodoContainer>
    );
}

export default Todo;
