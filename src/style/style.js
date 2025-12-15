import styled, { css } from "styled-components";
import heart_empty from '../assets/img/icon/heart_empty.png';
import heart_full from '../assets/img/icon/heart_full.png';

//header
export const MHeader = styled.header`
    text-align: center;
    padding: 24px 0 12px;

    h1 {
        font-size: 30px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: #f6f7fb;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
    }
`

export const List = styled.nav`
    margin-top: 30px;

    ul {
        width: 620px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto ;
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
    padding: 18px 12px;
    background: ${({ $isActive }) => ($isActive ? "linear-gradient(135deg, #ff4c4c 0%, #ff6b5f 100%)" : "linear-gradient(135deg, #2a2a2f 0%, #24242a 100%)")};
    border: 1px solid ${({ $isActive }) => ($isActive ? "rgba(255,255,255,0.35)" : "#2f2f36")};
    color: #f8f8f8;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.01em;
    box-sizing: border-box;
    cursor: pointer;
    box-shadow: ${({ $isActive }) => ($isActive ? "0 10px 28px rgba(255, 76, 76, 0.35)" : "0 6px 18px rgba(0,0,0,0.32)")};
    transition: all 180ms ease;

    img {
        width: 25px;
        margin-right: 10px;
        vertical-align: top;
        filter: invert(1);
    }

    &:hover {
        background: ${({ $isActive }) => ($isActive ? "linear-gradient(135deg, #ff4c4c 0%, #ff7b6d 100%)" : "linear-gradient(135deg, #36363d 0%, #2d2d35 100%)")};
        box-shadow: ${({ $isActive }) => ($isActive ? "0 12px 30px rgba(255, 76, 76, 0.45)" : "0 8px 22px rgba(0,0,0,0.38)")};
    }

    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.25), 0 10px 28px rgba(255, 76, 76, 0.35);
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
    margin: 40px auto;
    padding: 0 20px;
`
//Map 지도 화면
export const StyledMap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03), rgba(255,255,255,0)), #111119;
    max-width: 800px;
    padding: 14px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-sizing: border-box;
    border: 1px solid #1f1f2a;
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.45);

  svg path {
    position: relative;
    fill: #d7d7d7;
    cursor: pointer;
    transition: fill 0.25s ease, stroke 0.25s ease;
    stroke: #1c1c22;
    stroke-width: 0.4;
    
    &:hover:not(.selected) {
      fill: #f9e3e3; // hover 시 변경될 배경색
    }
    &:hover {
        fill: #EE1C25;
        stroke: #fff;
        stroke-width: 0.8;
    }
  }

  path.clicked {
    fill: #EE1C25;
    stroke: #ffffff;
    stroke-width: 1;
  }

`;

// 정보 화면
export const InfoListWrap = styled.div`
    width: 400px;
    /* height: 100%; */
    padding: 26px;
    background: linear-gradient(155deg, #14141b 0%, #1a1c24 100%);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid #222733;
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.45);
    box-sizing: border-box;

    .title {
        font-size: 24px;
        font-weight: 800;
        color: #f6f7fb;
        margin-bottom: 12px;
    }
`
export const NameTag = styled.div`
    position: relative;
    padding: 12px 40px 12px 10px;
    font-size: 18px;
    font-weight: 700;
    background: ${({ $listopen }) => ($listopen ? "rgba(255,76,76,0.18)" : "transparent")};
    border-radius: 10px;
    cursor: pointer;
    transition: all 160ms ease;

    &:hover {
        background: ${({ $listopen }) => ($listopen ? "rgba(255,76,76,0.22)" : "rgba(255,255,255,0.05)")};
    }
`

export const InfoDataList = styled.ul`
    margin-top: 10px;

    li {
        border-bottom: solid 1px #2f3340;
        padding: 6px 0 10px;

        &:hover {
            background: rgba(255, 76, 76, 0.06);
            border-radius: 12px;
        }

        img {
            width: 150px;
            border-radius: 10px;
            object-fit: cover;
        }
    }
`

export const ContBox = styled.div`
    display: ${({ $listopen }) => ($listopen ? "block" : "none")};
    padding: 10px 10px 12px;
    transition: all 180ms ease;

    p {
        margin-top: 10px;
        font-weight: 18px;
        line-height: 1.2;
        color: #dcdfe6;
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