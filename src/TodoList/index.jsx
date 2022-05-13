import styled from 'styled-components'
import { useEffect, useState } from 'react';
import SearchBox from '../SearchBox';
import * as JsSearch from 'js-search';
import { TodoItem } from '../todoitem';
import Todo from '../Todo';

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
    const [todoState, setTodoState] = useState({
        all: [],
        displayed: [],
    });
    const [boxtext, setBoxText] = useState("");

    function newTodoItem(new_todo) {
        setTodoState( (previous) => {
            let p = previous.all
            p.push(new_todo)
            return {
                all: p,
                ...previous
            }
        })
    }

    function removeTodo(todo) {}

    function searchTextChanged(new_text) {
        setBoxText(new_text);
    }

    function getRemaining() {
        if (todoState.all.length === 0 || !todoState) {
            return "No tasks remaining!"
        } else if (todoState.all.length === 1) {
            return `${todoState.all.length} task remaining!`
        } else {
            return `${todoState.all.length} tasks remaining!`
        }
    }

    // PERFORMANCE ISSUES!!!
    // useEffect(() => {
    //     const search = new JsSearch.Search("todo");

    //     if (boxtext !== "") {
    //         let lookup = search.search(boxtext);
    //         let new_displayed = todoState.displayed.filter(todo => {
    //             let result = lookup.indexOf(todo.name) !== -1;
    //             if (result >= 0) {
    //                 lookup.remove(result)
    //             }
    //             return result;
    //         })
    //         console.log(new_displayed);
    //         setTodoState( (prev) => {
    //             return {
    //                 displayed: new_displayed,
    //                 ...prev
    //             }
    //         } )
    //     } else {
    //         setTodoState( (prev) => {
    //             return {
    //                 displayed: prev.all,
    //                 ...prev
    //             }
    //         } )        
    //     }
    // }, [])


    return(
        <EverythingContainer>
            <RemainingCount>{getRemaining()}</RemainingCount>
            <SearchBox onAddTodo={e => newTodoItem(e)} onSearchTextChanged={e => {searchTextChanged(e)}} />
            <SeperatorLine />
            <div>
                {
                    todoState.displayed.map( (item, index) => (
                        <Todo key={index} index={index}>{item.name}</Todo>
                    ) ) 
                }
            </div>
        </EverythingContainer>
    );

}

export default TodoList
export {TodoItem}