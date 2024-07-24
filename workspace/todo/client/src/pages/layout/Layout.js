import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import S from './style';
// 폰트어썸
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faBell, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setPreviousUrl } from '../../modules/user'; 

const Layout = () => {

    // 비로그인 회원이 myPage 접근을 못하게 막는 로직
    const location = useLocation();
    const dispatch = useDispatch(); // 이전 경로 담아둔 곳

    // url중에서 uri만 분리
    const path = location.pathname + location.search;
    console.log(path)
    
    // 만약에 path가 my페이지가 아니면,
    if(path !== "/my"){
        dispatch(setPreviousUrl(path))
    }

    return (
        <S.Background>
            <S.Wrapper>
                <S.Header>
                    <Link to={"/"}>Liah Todo</Link>
                </S.Header>
                <S.Main>
                    <Outlet />
                </S.Main>
                <S.Nav>
                    <NavLink to={'/'}>
                        <FontAwesomeIcon icon={faHouse} className='icon'/>
                        <p>피드</p>
                    </NavLink>
                    <NavLink to={'/search'}>
                        <FontAwesomeIcon icon={faSearch} className='icon'/>
                        <p>검색</p>
                    </NavLink>
                    <NavLink to={'/bell'}>
                        <FontAwesomeIcon icon={faBell} className='icon'/>
                        <p>알림</p>
                    </NavLink>
                    <NavLink to={'/todo'}>
                        <FontAwesomeIcon icon={faPenToSquare} className='icon'/>
                        <p>할일</p>
                    </NavLink>
                    <NavLink to={'/my'}>
                        <FontAwesomeIcon icon={faUser} className='icon'/>
                        <p>My</p>
                    </NavLink>
                </S.Nav>
            </S.Wrapper>
        </S.Background>
    );
};

export default Layout;