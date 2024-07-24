// main 페이지에 관련된 스타일만 정의
import styled from "styled-components";
import { flexCenterColumn } from "../../global/common";

const S = {}

    S.Wrapper = styled.div`
        width: 100%;
        height: 100%;
        ${flexCenterColumn}
    `
    S.ImageWrapper = styled.div`
        flex: 0.7;
        ${flexCenterColumn}
    `

    S.ButtonWrapper = styled.div`
        width: 100%;
        height: 110px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `

export default S;