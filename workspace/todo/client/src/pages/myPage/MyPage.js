import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const MyPage = () => {
    const fileInputRef = useRef(null);
    
    // 리덕스 상태
    const previousUrl = useSelector((state)=> state.user.previousUrl);
    const currentLogin = useSelector((state)=> state.user.isLogin);
    const currentUser = useSelector((state)=> state.user.currentUser);

    const {
        register, handleSubmit, 
        formState : { isSubmitting, isSubmitted, errors } 
    } = useForm({mode : "onChange"})

    // 현재 로그인 상태를 확인하여 아닌 경우
    if(!currentLogin){
        // replace 왔던 기록을 없애버린다. history
        return <Navigate to={previousUrl} replace={true}/>
    }
    const addData = () => {
        console.log(fileInputRef.current.files[0])
    }
    return (
        <div>
            관리자 페이지
            <div className='userProfileImg'>
                <img src='' alt='유저프로필'/>
            </div>
            <form onSubmit={handleSubmit(async (data)=>{
                const formData = new FormData();
                formData.append("profile",fileInputRef.current.files[0]);
                console.log(fileInputRef.current.files[0])
                console.log(formData)
                await fetch('http://localhost:8000/user/my', {
                    method: 'POST',
                    body : formData
                })
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                })
            })}>
                <input type='file' ref={fileInputRef} onChange={addData}/>
                <button disabled={isSubmitting}>업로드</button>
            </form>
        </div>
    );
};

export default MyPage;