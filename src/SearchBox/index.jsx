import { useEffect, useState } from 'react';
import * as JsSearch from 'js-search';
import styled from 'styled-components';

const SearchText = styled.input`
    background-color: white;
`;

function SearchBox(props) {
    const [search, setSearch] = useState({
        search: JsSearch.Search(),
        todos: Set()
    });

    function onFilterCompleted() {
    }

    function lookup(index) {

    }

    function onAddTodo(todo) {

    }

    useEffect(() => {
        
    }, [props.todos]);

    return (
        <div>
            <p class="visually-hidden">Type Here, Enter to Add</p>
            <SearchText type="text" placeholder="Type Here, Enter to Add"></SearchText>
        </div>
    );
}
