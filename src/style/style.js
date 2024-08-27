import styled, { css } from "styled-components";

//header
export const MHeader = styled.header`
    text-align: center;

    h1 {
        font-size: 30px;
        font-weight: 700;
        padding: 30px 0 20px;
    }
`

export const List = styled.nav`

    ul {
        width: 600px;
        height: 65px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }

    li {
        flex: 1;
        height: 100%;
        box-sizing: border-box;
    }
`

export const GnbButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 20px 10px;
    background-color: ${({ isActive }) => (isActive ? "#FF4C4C" : "#333")};
    border-bottom: ${({ isActive }) => (isActive ? "solid 3px  #fff" : "none")};
    font-size: 18px;
    box-sizing: border-box;
    cursor: pointer;

    img {
        width: 25px;
        margin-right: 10px;
        vertical-align: top;
        filter: invert(1);
    }

    &:hover {
        background-color: ${({ isActive }) => (isActive ? "none" : "#444")};
    }
`