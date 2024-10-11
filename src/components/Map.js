import React, { useState, useRef, useEffect } from "react";
import { useDispatch} from "react-redux"

import { changeLoca } from '../store/locationSlice.js'

import * as TH from '../style/style'; // 스타일 컴포넌트 임포트
import maps from '../data/HKmap.js'; // 지도 데이터 임포트

const Map = ({ setToggleList}) => {
  const svgRef = useRef();
  const dispatch = useDispatch();

  const [hoveredArea, setHoveredArea] = useState(''); // 호버된 지역 상태
  const [clickedArea, setClickedArea] = useState(''); // 클릭된 지역 상태
  const [tooltipContent, setTooltipContent] = useState(''); // 툴팁 내용 상태
  
  const [mapScale, setMapScale] = useState(1.1); //스크롤 시 지도 크기 상태
  const [mapTranslate, setMapTranslate] = useState({ x: 0, y: 0 }); // 이동 상태 관리
  
  const [isDrag, setIsDrag] = useState(false); // 마우스를 클릭 여부
  const [startPoint, setStartPoint] = useState({x: 0, y: 0}); // 드래그 하기 위해 찍은 위치 값
  const [movePoint, setMovePoint] = useState({x:0, y:0}); // 드래그된 거리

  const dragThreshold = 5;

  const handleMouseEnter = (el) => {
    setHoveredArea(el.id); // 호버된 지역 상태 업데이트
    setTooltipContent(el.ko); // 툴팁 내용 설정
  };

  const handleMouseLeave = () => {
    setHoveredArea(''); // 호버 상태 초기화
    setTooltipContent(''); // 툴팁 내용 초기화
  };

  const handleClick = (el) => {
    setClickedArea(el.id); // 클릭된 지역 상태 업데이트
    setToggleList(0)
  };
  
  const handleMapScale = (e) => {
    e.preventDefault(); // 기본 스크롤 막기

    const svgMaP = svgRef.current
    const rect = svgMaP.getBoundingClientRect(); // SVG의 위치 및 크기 정보 가져오기

    // 마우스 위치를 SVG 좌표계로 변환
    // 마우스 위치 - svg 지도 위치 = 지도 내에서 마우스 위치
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // 확대 비율
    const scaleRatio = 0.1
    let ed = e.deltaY //스크롤 된 숫자
    let newScale = mapScale //새로운 비율
   
    if(ed > 0) {
      // 기존 크기에서 휠을 내렸을 때 scaleRatio만큼 빼라(축소)
      newScale = Math.max(mapScale - scaleRatio, 0.8)
    }else {
      // 기존 크기에서 휠을 올렸을 때 scaleRatio만큼 더해라(확대)
      newScale = Math.min(mapScale + scaleRatio, 2)
    }

     // 새로운 비율과 이전비율의 변화율 - 얼마나 확대 또는 축소되었는 지 확인
    const scaleFactor = newScale / mapScale;

    //확대 축소의 중심점 구하기
    // 중심점을 기준으로 화면이 확대된다. 
    const newTranslateX = mouseX - scaleFactor * (mouseX - mapTranslate.x);
    const newTranslateY = mouseY - scaleFactor * (mouseY - mapTranslate.y);

    setMapScale(newScale); // 확대/축소 상태 업데이트
    setMapTranslate({ x: newTranslateX, y: newTranslateY }); // 이동 상태 업데이트
  }

  const handleMapClick = (e) => {
    const svgMaP = svgRef.current
    const rect = svgMaP.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    //최초 찍은 마우스 좌표
    setStartPoint({x: mouseX, y: mouseY})
    setIsDrag(true)
  }
  
  const handleDragMove = (e) => {
    const svgMaP = svgRef.current
    const rect = svgMaP.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // 이동한 좌표 - 최초찍은 마우스 좌표(변동)
    const moveMouseX = mouseX - startPoint.x
    const moveMouseY = mouseY - startPoint.y
    
    // 클릭이 유지되고 있을 때
    // 현지 위치에서 이동한 거리만큼 이동
    if(isDrag){
      setMapTranslate((prevTrans) => ({ 
        x: prevTrans.x + moveMouseX, 
        y: prevTrans.y + moveMouseY
      }));
      
      setStartPoint({ x: mouseX, y: mouseY});// 마우스 좌표 실시간 반영(안해주면 기하급수로 늘어남)
      setMovePoint({ x: moveMouseX, y: moveMouseY})
    }
  }

  // 마우스 뗐을 때 해제
  const handleMapUnclick = (e) => {
    const svgMaP = svgRef.current
    const rect = svgMaP.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setIsDrag(false);

    const distanceX = Math.abs(mouseX - movePoint.x);
    const distanceY = Math.abs(mouseY - movePoint.y);
    if (distanceX < dragThreshold && distanceY < dragThreshold) {
      handleClick(e);  // 이동 거리가 작을 경우 클릭 이벤트 실행
    }
  }

  // 범위 밖으로 나갔을 때 해제
  const handleMouseOut = () => {
    setIsDrag(false);
  }


  //브라우저에서 휠 이벤트는 기본적으로 passive 모드로 처리되기 때문에 non-passive 모드로 설정
  // mapScale, mapTranslate가 변할 때 마다 실행
  useEffect(() => {
    // svgRef로 svg에 접근
    const svgMap = svgRef.current;
    // 휠 이벤트가 발생했을 때 호출
    const handleWheel = (e) => {
      //확대와 preventDefault 호출
      handleMapScale(e);
    };

    // 이벤트 리스너 추가
    // 세번째 인자로 passive를 false로 설정
    svgMap.addEventListener('wheel', handleWheel, { passive: false });
    // useEffect의 cleanup 함수 - 이전에 추가한 이벤트 리스너를 제거
    return () => {
      svgMap.removeEventListener('wheel', handleWheel);
    };
  }, [mapScale, mapTranslate]);

  dispatch(changeLoca(clickedArea))

  return (
    <TH.StyledMap>
      {/* 툴팁 표시 */}
      {hoveredArea && (
        <div style={{ position: 'absolute', top:0, left:0, marginTop: '10px', color: 'red' }}>
          {tooltipContent}
        </div>
      )}
      <svg ref={svgRef} onMouseDown={handleMapClick} onMouseMove={handleDragMove} onMouseUp={handleMapUnclick} onMouseLeave={handleMouseOut} width="722" height="514.8">
        <g transform={`translate(${mapTranslate.x}, ${mapTranslate.y}) scale(${mapScale})`}>
          {maps.map((el, idx) => (
            <path
              key={idx}
              id={el.id}
              title={el.ko}
              className={clickedArea === el.id ? 'clicked' : ''}
              d={el.d}
              onMouseEnter={() => handleMouseEnter(el)} // 호버 시 처리
              onMouseLeave={handleMouseLeave} // 호버 해제 시 처리
              onClick={() => handleClick(el)} // 클릭 시 처리
            />
          ))}
        </g>
      </svg>
    </TH.StyledMap>
  );
};

export default Map;
