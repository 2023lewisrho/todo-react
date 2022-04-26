import styled from 'styled-components';
import Time from '../Time'
import TodoList from '../TodoList';

const TodoBG = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 33%;
    min-width: 400px;
    margin: auto;
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
`;

function MainPage() {
    return(
        <TodoBG>
            <Time />
            <TodoList />
        </TodoBG>
    );
}

export default MainPage;