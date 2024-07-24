import React from 'react';
import useInput from '../../hooks/useInput';
import S from './style';

const TodoInsert = ({todos, isTodoUpdate, setIsTodoUpdate}) => {
    const [value, onChangeValue, setValue] = useInput("")
    
    // CRUD
    // 투두리스트 추가, POST

    // {
    //     "id": "1",
    //     "title": "todo 리스트 프로젝트!",
    //     "content": "이해하면 정말 쉬운 서버와의 통신",
    //     "userId": "홍길동",
    //     "isChecked": true
    //  },
    const onKeyDownAddTodo = async (e) => {
        if(e.key === 'Enter'){
            if(!window.confirm('이대로 추가하시겠습니까?')) return;

            await fetch('http://localhost:4000/todo', {
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({
                    id : (todos.length+1).toString(),
                    title : value,
                    isChecked : false
                })
            }).then((response) => {
                if(!response.ok) return console.log(`Error ${response}`)
                setIsTodoUpdate(!isTodoUpdate)
                setValue("")
            })
        }
    }

    return (
        <div>
           <S.Input type='text' placeholder='할 일을 추가해 볼까요?' value={value} onChange={onChangeValue} onKeyDown={onKeyDownAddTodo}/>
        </div>
    );
};

export default TodoInsert;