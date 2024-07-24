import { createAction, handleActions } from "redux-actions";
// 리덕스 설치
// > yarn add redux
// > yarn add react-redux
// > yarn add redux-actions
// > yarn add redux-devtools-extension

// user 관련 상태를 관리하는 리듀서 생성

// 액션 타입 정의

// 이전 URL을 설정하는 액션
const SET_PREVIOUS_URL = "user/SET_PREVIOUS_URL";
// 현재 사용자를 설정하는 액션
const SET_USER = "user/SET_USER";
// 사용자의 로그인 상태를 설정하는 액션
const SET_USER_STATUS = "user/SET_USER_STATUS";

// 초기값
const userInitialValue = {
    currentUser : {}, //현재 사용자 객체
    isLogin : false, //로그인 상태
    previousUrl : "",// 이전 URL
}

// 액션을 생성
export const setPreviousUrl = createAction(SET_PREVIOUS_URL, (previousUrl) => previousUrl);
export const setUser = createAction(SET_USER, (currentUser) => currentUser);
export const setUserStatus = createAction(SET_USER_STATUS, (isLogin) => isLogin);

// 리듀서 생성
const user = handleActions({
    //previousUrl을 업데이트
    // action.payload : 액션을 디스패치할 때 전달된 데이터를 담고 있음.
    //
    [SET_PREVIOUS_URL] : (state = userInitialValue, action) => ({ ...state, previousUrl: action.payload }),
    //currentUser를 업데이트
    [SET_USER] : (state = userInitialValue, action) => ({ ...state, currentUser: action.payload }),
    // isLogin을 업데이트
    [SET_USER_STATUS] : (state = userInitialValue, action) => ({ ...state, isLogin: action.payload })
}, userInitialValue)
// 리듀서가 처음 호출될 때 초기 상태를 설정하기 위해서 userInitialValue를 handleActions의 두번째 값에 넣는다.

export default user;