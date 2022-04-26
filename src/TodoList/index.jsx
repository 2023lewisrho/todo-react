import styled from 'styled-components'
import { useEffect, useState } from 'react';
import * as JsSearch from 'js-search';

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

function TodoItem(name, short) {
    this.name = name;
    this.short = short;
    this.visible = true;
    this.checked = false;

    function getSortFunction() {
        return function(todo1, todo2) {
            if (todo1.checked && !todo2.checked) {
                return todo1;
            } else if (!todo1.checked && todo2.checked) {
                return todo2;
            } else {
                return todo1.name > todo2.name ? todo1 : todo2;
            }
        }
    }
}

function TodoList() {
    const [todos, setTodos] = useState(Set());

    return(
        <EverythingContainer>
            <div>
                <RemainingCount>{todos.size} task(s) remaining:</RemainingCount>
                <SeperatorLine />
            </div>
        </EverythingContainer>
    );

}

export default {TodoList, TodoItem};