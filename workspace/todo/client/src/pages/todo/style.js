import styled from "styled-components";

const S = {}

    S.Li = styled.li`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        & .complete {
            text-decoration: line-through;
            color: #ddd;
            font-weight: 400;
        }
    `
    S.Title = styled.p`
        font-size: 16px;
        font-weight: 400;
    `

    S.SubTitle = styled.p`
        font-size: 14px;
        font-weight: 600;
        margin: 0 0 25px 0;
    `

    S.Wrapper = styled.div`
        display: flex;
    `

    S.Button = styled.button`
        cursor: pointer;
        background: none;
        font-size: 16px;
        & .pen path{
            color: #5f81f7;
        }
        & .trash path{
            color: #ec6863
        }
    `

    S.Input = styled.input`
        width: 100%;
        height: 40px;
        border: none;
        background-color: #eee;
        padding: 0 16px;
        margin: 0 0 50px 0;
        border-radius: 10px;
        font-size: 14px;

        &::placeholder{
            color: #b5b5b5;
        }
    `

export default S;