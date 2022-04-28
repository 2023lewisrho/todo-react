import styled from 'styled-components'
import { useEffect, useState } from 'react';
import SearchBox from '../SearchBox';

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

function TodoItem(name) {
    this.name = name;
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
    const [todos, setTodos] = useState(new Set());

    return(
        <EverythingContainer>
            <div>
                <RemainingCount>{todos.size} task(s) remaining:</RemainingCount>
                <SeperatorLine />
            </div>
            <SearchBox />
        </EverythingContainer>
    );

}

export default TodoList
export {TodoItem}