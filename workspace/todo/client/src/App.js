import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserStatus } from './modules/user';

function App() {

  const currentUser = useSelector((state) => state.user.currentUser);
  const userStatus = useSelector((state) => state.user.userStatus);
  const dispatch = useDispatch();

  // 최초 1번 토큰의 여부 검증
  useEffect(()=>{
    const isAuthenticate = async () => {
      const response = await fetch('http://localhost:8000/user/auth', {
        method : 'POST',
        headers : {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`,
        }
      })
      if(!response.ok){
        return;
      }
      const getAuthenticate = await response.json();
      return getAuthenticate;
    }

    isAuthenticate()
      .then((res) => {
        console.log(res)
        let {message, ...user} = res;
        dispatch(setUser(user))
        dispatch(setUserStatus(true))
      })
      .catch(console.error)

  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
