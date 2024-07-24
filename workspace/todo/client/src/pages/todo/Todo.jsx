import { faCheck, faPen, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import S from './style';

const Todo = ({todo, getTodos, setTodos , isTodoUpdate, setIsTodoUpdate}) => {
    const { id, title } = todo;
    const [ isChecked, setIsChecked ] = useState(todo.isChecked);
    const [ isEdit, setIsEdit ] = useState(false);
    const [ inputValue, setInputValue ] = useState(title);

    // 수정 모드
    const handleEdit = () => {
        setIsEdit(!isEdit);
    }

    // 타이틀 수정
    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    }

    const onChangeUpdateTodo = async () => {
        // fetch PUT 메서드를 이용한 title 수정
        await fetch(`http://localhost:4000/todo/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                ...todo,
                title: inputValue,
            })
        }).then((response)=>{
            console.log(response);
            if(!response.ok) return console.log(`error ${response}`);
            setIsEdit(!isEdit);
            setIsTodoUpdate(!isTodoUpdate);
        })

    }

    // CRUD
    // UPDATE, 체크리스트 수정
    const handleChecked = async () => {
        // setIsChecked(!isChecked);
        await fetch(`http://localhost:4000/todo/${id}`, {
            method: "PUT",
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                ...todo,
                isChecked: !isChecked
            })
        }).then((response)=>{
            console.log(response)
            if(!response.ok) return console.log(`error ${response}`)
            setIsChecked(!isChecked)
        })
    }

    // DELETE, 투두리스트 삭제
    const handleRemoveTodo = async () => {
        if(window.confirm("정말로 삭제하시겠습니까?")){
            await fetch(`http://localhost:4000/todo/${id}`,{method : "DELETE"}).then((response)=>{
                if(response.ok){
                    console.log('ok', response);
                    // getTodos().then(setTodos);
                    setIsTodoUpdate(!isTodoUpdate);
                }
            })
        }
    }
    return (
        <S.Li>
            <S.Wrapper>
                <input type="checkbox" checked={isChecked} onChange={handleChecked}/>
                {isEdit? (
                    <>
                        <input className='update-input' type='text' value={inputValue} onChange={onChangeInput}/>
                    </>
                ):(
                    <>
                        <S.Title className={isChecked? "complete": ""}>
                            {title}
                        </S.Title>
                    </>
                )}
                
            </S.Wrapper>
            <S.Wrapper>
                {isEdit? (
                    <>
                        <S.Button onClick={onChangeUpdateTodo}><FontAwesomeIcon icon={faCheck} className='check'/></S.Button>
                        <S.Button onClick={handleEdit}><FontAwesomeIcon icon={faX} className='exit'/></S.Button>
                    </>
                ):(
                    <>
                        <S.Button onClick={handleEdit}><FontAwesomeIcon icon={faPen} className='pen'/></S.Button>
                    </>
                )}
                
                <S.Button onClick={handleRemoveTodo}><FontAwesomeIcon icon={faTrash} className='trash'/></S.Button>
            </S.Wrapper>
        </S.Li>
    );
};

export default Todo;