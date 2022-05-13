import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Todo(props) {
    const order = props.index;
    const text = props.text;
    const [item, setItem] = useState(false);
    
    function onRemoveClicked() {
        props.onRemoveClicked(order)
    }

    return (
        <div>
            <input type="checkbox" id={`todo-item-num-${order}`} name={`todo-item-num-${order}`} value="" />
            <label htmlFor={`todo-item-num-${order}`} className='visually-hidden'>{`Check Completed for Todo Item "${item.name}" (number #${order})`}</label>
            <p>{text}</p>
        </div>
    );
}

export default Todo;
