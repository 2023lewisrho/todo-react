import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { TodoItem } from '../todoitem';

const SearchText = styled.input`
    background-color: white;
    border-radius: 1rem;
    min-height: 2rem;
    width: 100%;
`;

function SearchBox(props) {
    const [todo_text, setTodoText] = useState("")

    function onAddTodo(new_todo) {
        props.onAddTodo(new_todo)
    }

    function onSearchTextChanged() {
        console.log(todo_text)
        props.onSearchTextChanged(todo_text)
    }

    function changed_text(e) {
        let new_str = e.target.value
        setTodoText(new_str)
        console.log(todo_text)
        onSearchTextChanged()
    }

    function check_enter(e) {
        let keypress = (e.keyCode ? e.keyCode : e.which);
        if (keypress === 13) {
            let todo = TodoItem(todo_text)
            setTodoText("")
            onAddTodo(todo)
        }
    }

    return (
        <div>
            <p className={"visually-hidden"} >Type Here, Enter to Add</p>
            <SearchText type="search" placeholder="Type Here, Enter to Add" onChange={changed_text} onKeyDown={check_enter}/>
        </div>
    );
}


export default SearchBox