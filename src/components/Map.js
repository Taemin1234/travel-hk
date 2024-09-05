import React, { useState, useRef } from "react";
import * as TH from '../style/style'; // 스타일 컴포넌트 임포트
import maps from '../data/HKmap.js'; // 지도 데이터 임포트

const Map = () => {
  const svgRef = useRef();
  const [hoveredArea, setHoveredArea] = useState(''); // 호버된 지역 상태
  const [clickedArea, setClickedArea] = useState(''); // 클릭된 지역 상태
  const [tooltipContent, setTooltipContent] = useState(''); // 툴팁 내용 상태
  const [mapScale, setMapScale] = useState(1.1); //스크롤 시 지도 크기 상태
  const [mapTranslate, setMapTranslate] = useState({ x: 0, y: 0 }); // 이동 상태 관리


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


  return (
    <TH.StyledMap>
      {/* 툴팁 표시 */}
      {hoveredArea && (
        <div style={{ position: 'absolute', marginTop: '10px', color: 'red' }}>
          {tooltipContent}
        </div>
      )}
      <svg ref={svgRef} onWheel={handleMapScale} width="722" height="514.8">
        <g transform={`translate(${mapTranslate.x}, ${mapTranslate.y}) scale(${mapScale})`}>
          {maps.map((el, idx) => (
            <path
              key={idx}
              id={el.id}
              title={el.ko}
              fill={clickedArea === el.id ? '#EE1C25' : '#eee'}
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