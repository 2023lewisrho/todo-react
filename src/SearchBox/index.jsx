import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { TodoItem } from '../todoitem';

const SearchText = styled.input`
    background-color: white;
    border-radius: 1rem;
    min-height: 2rem;
    width: 90%;
`;

const AddButton = styled.button`
    width: 10%;
`

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

    function on_add() {
        if (todo_text !== "") {
            let todo = TodoItem(todo_text)
            setTodoText("")
            document.getElementById("thetodosearchbox").value = ""
            onAddTodo(todo)
        }
    }

    return (
        <div>
            <p className={"visually-hidden"} >Type Here, Enter to Add</p>
            <SearchText id='thetodosearchbox' type="search" placeholder="Type Here, Enter to Add" onChange={changed_text}/>
            <AddButton type="button" onClick={on_add}>Add</AddButton>
        </div>
    );
}


export default SearchBox