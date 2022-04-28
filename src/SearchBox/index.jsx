import { useEffect, useState } from 'react';
import * as JsSearch from 'js-search';
import styled from 'styled-components';
import { TodoItem } from '../TodoList';

const SearchText = styled.input`
    background-color: white;
    border-radius: 1rem;
    min-height: 2rem;
    width: 100%;
`;

function SearchBox(props) {
    const [search, setSearch] = useState({
        search: new JsSearch.Search("todos"),
        todos: [],
        looking: "",
    });

    function onFilterCompleted() {
    }

    function lookup(index) {

    }

    function onAddTodo() {
        
    }

    function addTodo(name) {
        let new_todo = TodoItem(name);
        let new_arr = search.todos
        new_arr.push(new_todo)
        setSearch(prev => {
            return {...prev, todos: new_arr}
        })
    }

    function changedText(e) {
        const new_lookup = e.target.value.toString();
        console.log(new_lookup);
        setSearch(prev => {
            return { ...prev, looking: new_lookup }
        })
    }

    function check_enter(e) {
        let keypress = (e.keyCode ? e.keyCode : e.which);
        if (keypress === 13) { 
            addTodo(search.looking)
            setSearch(prev => {
                return { ...prev, looking: "" }
            })
        }
    }

    useEffect(() => {
        
    }, [search.todos]);


    return (
        <div>
            <p className={"visually-hidden"} >Type Here, Enter to Add</p>
            <SearchText type="text" placeholder="Type Here, Enter to Add" onChange={e => changedText(e)} onKeyDown={e => check_enter(e)} />
        </div>
    );
}


export default SearchBox