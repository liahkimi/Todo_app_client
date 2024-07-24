import styled from "styled-components";

const S = {};

    S.Background = styled.div`
        width: 100%;
        height: 100vh;
        background-color: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    S.Wrapper = styled.div`
        width: 430px;
        height: 700px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: 0 30px;
    `
    S.Main = styled.main`
        flex: 1;
    `

    S.Header = styled.header`
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        & a {
            font-size: 24px;
            font-weight: 600;
            display: block;
        }
    `
    S.Nav = styled.nav`
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & a {
            font-size: 16px;
            text-align: center;

            & p {
                color: #bec4c9;
            }
            .icon{
                font-size: 24px;
                padding: 4px;
                path{
                    color : #bec4c9;
                }
            }
        }

        & .active {
            & p {
                color: #917cf0 !important;
            }

            & path {
                color: #917cf0 !important;
            }
        }
    `
export default S;