import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoInsert from './TodoInsert';

const TodoContainer = () => {

    // http://localhost:4000/todo에 데이터를 콘솔에 찍기
    // fetch로 요청을 보내기
    // 실습 5분

    const [ todos, setTodos ] = useState([]);
    const [ error, setError ] = useState(false);
    const [ isTodoUpdate, setIsTodoUpdate ] = useState(false);

    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:4000/todo');
            const datas = await response.json();
            return datas;
        } catch (error) {
            setError(error);
        }
    }
    useEffect(() => {
        getTodos().then(setTodos);
    }, [isTodoUpdate]);

    return (
        <div>
            <TodoInsert 
                todos={todos}
                isTodoUpdate={isTodoUpdate}
                setIsTodoUpdate={setIsTodoUpdate}
            />
            {<p className='sub-title'>남은 할일:😒 {todos && todos.length}개 </p>}
            {/* map함수 이용해서 todo 컴포넌트 만들기, todos, getTodos props로 보내기 */}
            <ul>
                {todos && todos.map((todo, i) => (
                    <Todo 
                        key={i} 
                        todo={todo} 
                        getTodos={getTodos} 
                        setTodos={setTodos} 
                        isTodoUpdate={isTodoUpdate} 
                        setIsTodoUpdate={setIsTodoUpdate}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoContainer;