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
    const [todo_text, setTodoText] = useState("");

    function onAddTodo(new_todo) {
        props.onAddTodo(new_todo)
    }

    function onSearchTextChanged() {
        props.onSearchTextChanged(todo_text);
    }

    function changed_text(e) {
        let new_str = e.target.value.toString();
        setTodoText(new_str);
        onSearchTextChanged();
    }

    function check_enter(e) {
        let text = todo_text;
        e.target.value = "";

        let keypress = (e.keyCode ? e.keyCode : e.which);
        if (keypress === 13) {
            let todo = TodoItem(text);
            onAddTodo(todo)
        }
    }

    return (
        <div>
            <p className={"visually-hidden"} >Type Here, Enter to Add</p>
            <SearchText type="text" placeholder="Type Here, Enter to Add" onChange={e => changed_text(e)} onKeyDown={e => check_enter(e)} />
        </div>
    );
}


export default SearchBox