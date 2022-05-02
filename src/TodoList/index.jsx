import styled from 'styled-components'
import { useEffect, useState } from 'react';
import SearchBox from '../SearchBox';
import * as JsSearch from 'js-search';
import { TodoItem } from '../todoitem';

const EverythingContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const RemainingCount = styled.p`
    color: blue;
`;

const SeperatorLine = styled.hr`
    background-color: gray;
    color: transparent;
`;


function TodoList() {
    const [displayed, setDisplayed] = useState([]);
    const [todos, setTodos] = useState([]);
    const search = JsSearch.Search("todo");
    const [boxtext, setBoxText] = useState("");

    function newTodoItem(new_todo) {
        setTodos( previous => {
            return previous.push(new_todo)
            }
        )
    }

    function removeTodo(todo) {}

    function searchTextChanged(new_text) {
        setBoxText(new_text);
    }

    useEffect(() => {
        if (boxtext !== "") {
            let lookup = todos.search.search(boxtext)
            let new_displayed = displayed.filter(todo => {
                let result = lookup.indexOf(todo.name) !== -1;
                if (result >= 0) {
                    lookup.remove(result)
                }
                return result;
            })
            setDisplayed(new_displayed)
        } else {
            setDisplayed(todos)
        }
    }, [todos, boxtext, displayed])


    return(
        <EverythingContainer>
            <RemainingCount>{todos.size} task(s) remaining:</RemainingCount>
            <SearchBox onAddTodo={e => newTodoItem(e)} onSearchTextChanged={e => {searchTextChanged(e)}} />
            <SeperatorLine />
            <div>
                {
                    displayed && displayed.map(todo => {

                    })
                }
            </div>
        </EverythingContainer>
    );

}

export default TodoList
export {TodoItem}