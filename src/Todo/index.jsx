import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Todo(props) {
    const order = props.order;
    const [item, setItem] = useState(false);
    
    function onRemoveClicked() {
        props.onRemoveClicked(order)
    }

    return (
        <div>
            <FontAwesomeIcon icon="fa-solid fa-grip-dots-vertical" />
            <input type="checkbox" id={`todo-item-num-${order}`} name={`todo-item-num-${order}`} value="" />
            <label for={`todo-item-num-${order}`} className='visually-hidden'>{`Check Completed for Todo Item \"${item.name}\" (number #${order})`}</label>
            <FontAwesomeIcon icon="fa-solid fa-trash-can" onClick={onRemoveClicked}/>
        </div>
    );
}

export default Todo;