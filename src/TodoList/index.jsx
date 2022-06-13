import styled from 'styled-components'
import { useEffect, useState } from 'react';
import SearchBox from '../SearchBox';
import * as JsSearch from 'js-search';
import { sortTodoItems, TodoItem } from '../todoitem';
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
    background-color: black;
`;

const TodoThing = styled.div`
    height: 2rem;
`;


function TodoList() {
    const [todoState, setTodoState] = useState({
        all: []
    });
    const [boxtext, setBoxText] = useState("");
    function newTodoItem(new_todo) {
        setTodoState( (previous) => {
            let p = previous.all;
            p.push(new_todo);
            return {
                all: p,
            }
        })
    }

    function removeTodo(todo) {
        setTodoState( (previous) => {
            previous.all.splice(todo, 1);
            previous.all.sort(sortTodoItems);
            return {
                all: previous.all,
            }
        });
    }

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

    function onSomethingChanged(order, state) {
        setTodoState( (previous) => {
            previous.all[order].checked = !state;
            previous.all.sort(sortTodoItems);            
            return {
                all: previous.all,
            }
        });
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
            <SeperatorLine />
            <SearchBox onAddTodo={e => newTodoItem(e)} onSearchTextChanged={e => {searchTextChanged(e)}} />
            <TodoThing>
                {
                    todoState.all.map( (item, index) => (
                        <Todo key={index} index={index} onRemoveClicked={removeTodo} onChanged={onSomethingChanged} checked={item.checked} >{item.name}</Todo>
                    ) ) 
                }
            </TodoThing>
        </EverythingContainer>
    );

}

export default TodoList
