import React from 'react';
import BasicButton from '../../components/button/BasicButton';
import S from './style';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <S.Wrapper>
            <S.ImageWrapper>
                <img src={process.env.PUBLIC_URL + '/images/main/penguin.png'} />
            </S.ImageWrapper>
            <S.ButtonWrapper>
                <Link to={'/signIn'}><BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>로그인</BasicButton></Link>
                <Link to={'/signUp'}><BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>회원가입</BasicButton></Link>
            </S.ButtonWrapper>
        </S.Wrapper>
    );
};

export default Main;