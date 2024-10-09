import styled, { css } from "styled-components";
import heart_empty from '../assets/img/icon/heart_empty.png';
import heart_full from '../assets/img/icon/heart_full.png';

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
    background-color: ${({ $isActive }) => ($isActive ? "#FF4C4C" : "#333")};
    border-bottom: ${({ $isActive }) => ($isActive ? "solid 3px  #fff" : "none")};
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

// 공통 

const flexCn = css`
    display: flex;
    justify-content: center;
`
const flexS = css`
    display: flex;
    justify-content: flex-start;
`
export const InfoWrap = styled.div`
    ${flexCn}
    max-width: 1200px;
    /* height: auto; */
    margin: 30px auto;
`
//Map 지도 화면
export const StyledMap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background-color: #1e1e1e;
    max-width: 800px;
    padding: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-sizing: border-box;

  svg path {
    position: relative;
    fill: #eee;
    cursor: pointer;
    transition: fill 0.3s;
    
    &:hover:not(.selected) {
      fill: #FADBD8; // hover 시 변경될 배경색
    }
    &:hover {
        fill: #EE1C25;
    }
  }

  path.clicked {
    fill: #EE1C25;
  }

`;

// 정보 화면
export const InfoListWrap = styled.div`
    width: 400px;
    /* height: 100%; */
    padding: 25px;
    background-color: #444;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-sizing: border-box;

    .title {
        font-size: 24px;
        font-weight: 700;
    }
`
export const NameTag = styled.div`
    position: relative;
    padding: 12px 40px 12px 10px;
    font-size: 18px;
    font-weight: 700;
    background-color: ${({ $listopen }) => ($listopen ? "#FF4C4C" : "none")};
    cursor: pointer;
`

export const InfoDataList = styled.ul`
    margin-top: 10px;

    li {
        border-bottom: solid 1px #555;
        img {
            width: 150px;
        }
    }
`

export const ContBox = styled.div`
    display: ${({ $listopen }) => ($listopen ? "block" : "none")};
    padding: 10px 10px 12px;

    p {
        margin-top: 10px;
        font-weight: 18px;
        line-height: 1.1;
    }
`

export const ImgCont = styled.div`
    ${flexS}
    gap: 10px;

    div {
        p {
            &:nth-of-type(1) {
                margin-top: 0;
            }
        }
    }
`
export const LikeShortcutWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 40px;
    height: 100%;
    z-index: 10;
    right: 0;
    top: 0;
    
    background-color: #333;
`

export const LikeBtn = styled.label`
    overflow: hidden;
    font-size: 0;

    input[type='checkbox'] {
        margin: 0;
        border-radius: 0;
        box-shadow: none;
        background: transparent;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        &:checked + .icon {
            &:before {
                background-image: url(${heart_full});
                filter: invert(0);
            }
        }
    }

    .icon {
        position: relative;
        display: inline-block;
        width: 20px;
        height: 20px;

        &:before {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            background-image: url(${heart_empty});
            background-size: contain;
            filter: invert(1);
        }
    }
`

export const LikeCount = styled.p`
    font-size: 16px;
    color: #fff;
`