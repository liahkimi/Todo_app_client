import React from 'react';
import S from './style';
import { useForm } from 'react-hook-form'
import BasicButton from '../../components/button/BasicButton';
import BasicInput from '../../components/input/BasicInput';
import Input from '../../components/input/style';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, getValues, formState : {isSubmitting, isSubmitted, errors}} = useForm({mode: "onChange"})
    
    // email 정규식 문법
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    return (
        <S.Form onSubmit={handleSubmit( async (data)=>{
            // 들고 온 form 데이터를 fetching하기 위한 로직
            console.log(data);

            // {
            // "email" : "이메일",
            // "password" : "비밀번호"
            // }

            // http://localhost:8000/user 경로로 회원가입 시키기
            await fetch("http://localhost:8000/user/register", {
                method : "POST",
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({
                    email: data.email,
                    password : data.password
                })
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.registerSuccess){
                    alert(res.message)
                }
                // 리다이렉트
                navigate('/signIn')
            })
            .catch(console.error)

        })}>

            {/* email */}
            <S.Label htmlFor='email'>
                <S.Title className='Title'>이메일</S.Title>
                <Input 
                    size={"full"} shape={"small"} variant={"gray"} color={"black"}
                    type="text" id="email" placeholder="이메일을 입력하세요."
                    {...register('email', {
                        required : true,
                        pattern : {
                            value : emailRegex
                        }
                    })}
                />
                {errors?.email?.type === 'required' && (
                    <S.ConfirmMessage>이메일을 입력해주세요</S.ConfirmMessage>
                )}
                {errors?.email?.type === 'pattern' && (
                    <S.ConfirmMessage>이메일 양식에 맞게 입력해주세요.</S.ConfirmMessage>
                )}
            </S.Label>

            {/* password */}
            <S.Label htmlFor='password'>
                <S.Title className='Title'>비밀번호</S.Title>
                <Input 
                    size={"full"} shape={"small"} variant={"gray"} color={"black"}
                    type="password" id="password" placeholder="영문, 숫자, 특수문자(!,@,#)를 포함한 8자리이상"
                    {...register('password', {
                        required : true,
                        pattern : {
                            value : passwordRegex
                        }
                    })}
                />
                {errors?.password?.type === 'required' && (
                    <S.ConfirmMessage>비밀번호를 입력해주세요</S.ConfirmMessage>
                )}
                {errors?.password?.type === 'pattern' && (
                    <S.ConfirmMessage>비밀번호 양식에 맞게 입력해주세요.</S.ConfirmMessage>
                )}
            </S.Label>

            {/* password */}
            <S.Label htmlFor='passwordConfirm'>
                <S.Title className='Title'>비밀번호 확인</S.Title>
                <Input 
                    size={"full"} shape={"small"} variant={"gray"} color={"black"}
                    type="password" id="passwordConfirm" placeholder="비밀번호를 다시한번 입력"
                    {...register('passwordConfirm', {
                        required : true,
                        validate : {
                            matchPassword : (value) => {
                                const {password} = getValues();
                                console.log(value, password, value === password)
                                return value === password;
                            }
                        }
                    })}
                />
                {errors?.passwordConfirm && (
                    <S.ConfirmMessage>비밀번호를 확인해주세요</S.ConfirmMessage>
                )}
            </S.Label>

            {/* submit 버튼 */}
            <BasicButton 
                size={"full"} shape={"small"} variant={"black"} color={"white"} disabled={isSubmitting}
            >
                회원가입
            </BasicButton>
        </S.Form>
    );
};

export default SignUp;