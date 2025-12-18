# 홍콩 여행 지도 - 프로젝트 설명

## 📋 프로젝트 개요

홍콩의 여행 정보를 인터랙티브한 지도 기반으로 제공하는 웹 애플리케이션입니다. 사용자는 SVG 기반의 홍콩 지도를 확대/축소하고 드래그하여 탐색할 수 있으며, 특정 지역을 클릭하면 해당 지역의 숙소, 맛집, 카페, 펍, 관광지 정보를 상세하게 확인할 수 있습니다.

## 🛠️ 사용 기술 스택

### 프론트엔드 프레임워크 및 라이브러리
- **React 18.3.1**
  - 함수형 컴포넌트와 Hooks 기반 UI 구현
  - `useState`, `useEffect`, `useRef`를 활용한 컴포넌트 생명주기 및 DOM 제어
  - 재사용 가능한 컴포넌트 아키텍처 설계
  - 단방향 데이터 플로우를 통한 안정적인 상태 관리

- **React Router DOM 6.26.1**
  - SPA(Single Page Application) 기반 클라이언트 사이드 라우팅
  - 페이지 전환 시 리로드 없는 부드러운 사용자 경험 제공

### 언어 및 타입 시스템
- **TypeScript 4.9.5**
  - 타입 안정성을 통한 런타임 에러 방지
  - 커스텀 타입 정의를 통한 데이터 구조 명확화
  - `.d.ts` 파일을 활용한 이미지 모듈 타입 선언

### 상태 관리
- **Redux Toolkit 2.2.7**
  - 전역 상태 관리를 통한 컴포넌트 간 데이터 공유
  - `createSlice`를 활용한 간결한 리듀서 작성
  - `locationSlice`: 선택된 지역 정보를 전역으로 관리
  - `useSelector`, `useDispatch` hooks로 상태 읽기 및 업데이트

- **React Redux 9.1.2**
  - React와 Redux를 연결하는 공식 바인딩 라이브러리
  - Provider 패턴을 통한 전역 스토어 제공

### 스타일링
- **Styled Components 6.1.12**
  - CSS-in-JS 방식의 컴포넌트 스타일링
  - Props 기반 동적 스타일링 (`$isActive`, `$listopen` 등)
  - 테마 관리 및 스타일 재사용성 향상
  - Tagged Template Literals를 활용한 직관적인 스타일 작성

- **Styled Reset 4.5.2**
  - 브라우저 기본 스타일 초기화
  - 일관된 크로스 브라우저 렌더링 보장

### 데이터 시각화
- **D3.js 7.9.0**
  - SVG 기반 지도 데이터 처리 및 렌더링
  - 좌표 변환 및 스케일링 계산
  - 인터랙티브한 지도 인터페이스 구현

### 빌드 도구
- **React Scripts 5.0.1**
  - Create React App 기반 개발 환경 구성
  - Webpack, Babel 등의 복잡한 설정 추상화
  - Hot Module Replacement(HMR)를 통한 개발 생산성 향상

### 배포
- **Vercel**
  - React 애플리케이션에 최적화된 배포 환경
  - 자동 빌드 및 배포 파이프라인
  - CDN을 통한 빠른 글로벌 접근성

## 🎯 주요 기능 및 기술 구현

### 1. 인터랙티브 지도 시스템

#### 마우스 휠 확대/축소 (Zoom)
- **구현 위치**: `src/components/Map.js`의 `handleMapScale` 함수
- **기술 구현**:
  - `useRef`를 활용한 SVG DOM 직접 제어
  - `getBoundingClientRect()`로 SVG 좌표계 계산
  - 마우스 커서 위치를 기준으로 확대/축소 중심점 동적 계산
  - `scaleFactor`를 활용한 부드러운 확대/축소 비율 조정 (0.8배 ~ 2배)
- **동작 원리**:
  ```javascript
  // 마우스 위치를 SVG 좌표계로 변환
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  
  // 확대/축소의 중심점을 마우스 위치로 설정
  const newTranslateX = mouseX - scaleFactor * (mouseX - mapTranslate.x);
  const newTranslateY = mouseY - scaleFactor * (mouseY - mapTranslate.y);
  ```
- **사용자 경험**:
  - 마우스 커서 위치를 중심으로 직관적인 확대/축소
  - 스크롤 이벤트의 기본 동작 방지 (`preventDefault`)
  - `useEffect`와 `addEventListener`를 활용한 non-passive 모드 이벤트 처리

#### 드래그 앤 드롭 이동 (Pan)
- **구현 방식**: `handleMouseDown`, `handleDragMove`, `handleMapMouseUp` 함수
- **상태 관리**:
  - `isDrag`: 드래그 진행 여부
  - `startPoint`: 드래그 시작 지점 (클릭과 드래그 구분)
  - `latelyPoint`: 현재 마우스 위치 (드래그 거리 계산)
  - `mapTranslate`: 지도 이동 좌표 (`{ x, y }`)
- **드래그와 클릭 구분**:
  - 이동 거리가 3px 미만일 경우 클릭으로 인식
  - 3px 이상 이동 시 드래그로 판단하여 지역 선택 방지
- **경계 제한**:
  - `minX`, `maxX`, `minY`, `maxY`로 지도 이동 범위 제한
  - 확대 비율에 따른 동적 경계 재계산 (`reMinX = minX * mapScale`)

#### SVG Path 기반 지역 인터랙션
- **호버 효과**:
  - `onMouseEnter`, `onMouseLeave`로 지역명 툴팁 표시
  - CSS 스타일 변경을 통한 시각적 피드백
- **클릭 이벤트**:
  - 지역 선택 시 Redux 스토어에 지역 ID 저장
  - `clicked` 클래스를 통한 선택된 지역 시각적 구분

### 2. 카테고리 기반 정보 필터링

#### 탭 네비게이션 시스템
- **구현 위치**: `src/components/Header.js`
- **동작 방식**:
  - `tab` state로 현재 선택된 카테고리 관리 (0: 숙소, 1: 맛집, 2: 카페, 3: 펍, 4: 관광지)
  - 카테고리 변경 시 자동으로 정보 리스트 초기화 (`setToggleList(0)`)
- **UI/UX**:
  - Styled Components의 `$isActive` prop으로 활성화된 탭 시각적 표시
  - 아이콘과 텍스트를 함께 표시하여 직관적인 인터페이스 제공

#### 동적 데이터 로딩
- **구현 위치**: `src/components/InfoList.js`
- **기술 활용**:
  - Redux `useSelector`로 선택된 지역 정보 구독
  - `useEffect`를 통한 지역 및 카테고리 변경 감지
  - JSON 데이터에서 `data[district][category]` 형태로 필터링
- **데이터 구조**:
  ```javascript
  {
    "district_id": {
      "k_name": "지역명",
      "hotels": [...],
      "restaurant": [...],
      "cafe": [...],
      "pub": [...],
      "sites": [...]
    }
  }
  ```

### 3. 아코디언 형태의 상세 정보 표시

#### 토글 리스트 구현
- **구현 방식**:
  - `toggleList` state로 현재 열린 항목 인덱스 관리
  - 클릭 시 해당 인덱스로 업데이트하여 다른 항목 자동 닫힘
- **동적 스타일링**:
  - Styled Components의 `$listopen` prop으로 열림/닫힘 상태 제어
  - CSS transition을 활용한 부드러운 애니메이션 효과
- **표시 정보**:
  - 이미지, 별점(`star`), 가격(`price`), 요리 종류(`cuisine`)
  - 상세 설명(`des`), 부제목(`sub_title`)
  - 조건부 렌더링으로 존재하는 데이터만 표시

### 4. 좋아요 기능

#### 로컬 상태 기반 좋아요 카운트
- **구현 위치**: `src/components/LikeShortcut.js`
- **동작 원리**:
  - 체크박스를 활용한 토글 형태의 좋아요 버튼
  - 장소명 길이(`likeLeng.length`)를 초기값으로 설정 (임시 데이터)
  - `onChange` 이벤트로 좋아요 수 증감 관리
- **UI 구현**:
  - CSS를 활용한 하트 아이콘 체크박스 커스터마이징
  - 실시간 좋아요 수 표시

### 5. Redux를 통한 전역 상태 관리

#### 지역 선택 상태 관리
- **구현 위치**: `src/store/locationSlice.js`
- **Slice 구조**:
  - `initialState`: 빈 문자열 (지역 미선택 상태)
  - `changeLocation` reducer: 선택된 지역 ID 업데이트
- **데이터 플로우**:
  1. 지도에서 지역 클릭
  2. `dispatch(changeLocation(clickedArea))`로 Redux 스토어 업데이트
  3. `InfoList` 컴포넌트에서 `useSelector`로 지역 정보 구독
  4. 해당 지역의 카테고리 데이터 자동 로딩

#### 스토어 구성
- **구현 위치**: `src/store/store.js`
- **Redux Toolkit의 `configureStore` 활용**:
  - 단일 스토어에 `locationReducer` 등록
  - Redux DevTools 자동 연동으로 디버깅 편의성 향상

### 6. 타입 안전성 확보

#### 이미지 모듈 타입 선언
- **구현 위치**: `src/images.d.ts`
- **목적**: TypeScript에서 이미지 파일 import 시 타입 에러 방지
- **선언 방식**:
  ```typescript
  declare module '*.png';
  declare module '*.svg';
  declare module '*.jpg';
  ```

### 7. 스타일 시스템

#### Styled Components 기반 디자인 시스템
- **구현 위치**: `src/style/style.js`
- **주요 컴포넌트**:
  - `MHeader`: 헤더 레이아웃
  - `GnbButton`: 탭 버튼 (활성화 상태에 따른 동적 스타일링)
  - `StyledMap`: SVG 지도 컨테이너
  - `InfoListWrap`, `InfoDataList`: 정보 리스트 레이아웃
  - `NameTag`, `ContBox`: 아코디언 리스트 항목
- **Global Style**:
  - `createGlobalStyle`로 전역 스타일 정의
  - `styled-reset`으로 브라우저 기본 스타일 초기화
  - Radial gradient 배경으로 고급스러운 디자인

## 📁 프로젝트 구조

```
src/
├── components/           # 재사용 가능한 UI 컴포넌트
│   ├── Header.js         # 카테고리 탭 네비게이션
│   ├── Map.js            # 인터랙티브 SVG 지도 컴포넌트
│   ├── InfoList.js       # 지역별 정보 리스트
│   ├── TravelInfo.js     # 지도와 리스트를 포함하는 메인 컨테이너
│   └── LikeShortcut.js   # 좋아요 기능 컴포넌트
├── store/                # Redux 상태 관리
│   ├── store.js          # Redux 스토어 설정
│   └── locationSlice.js  # 지역 선택 상태 slice
├── data/                 # 정적 데이터
│   ├── data.json         # 지역별 여행 정보 데이터
│   └── HKmap.js          # 홍콩 지도 SVG path 데이터
├── style/                # 스타일 컴포넌트
│   └── style.js          # Styled Components 정의
├── assets/               # 정적 리소스
│   └── img/              # 이미지 파일 (아이콘, 지도 등)
├── App.js                # 루트 컴포넌트
└── index.js              # 애플리케이션 진입점
```

## 🎨 주요 특징

1. **마우스 중심 확대/축소**: 사용자가 마우스를 위치시킨 곳을 중심으로 자연스러운 지도 확대/축소
2. **드래그 기반 탐색**: 클릭과 드래그를 정확히 구분하여 직관적인 지도 탐색 경험 제공
3. **실시간 상태 동기화**: Redux를 통한 지역 선택 상태의 전역 관리로 컴포넌트 간 자동 데이터 동기화
4. **반응형 인터랙션**: 호버, 클릭, 드래그 등 다양한 마우스 이벤트에 대한 시각적 피드백
5. **효율적인 렌더링**: React의 가상 DOM과 조건부 렌더링으로 최적화된 성능
6. **모듈화된 컴포넌트**: 각 기능별로 독립적인 컴포넌트로 분리하여 유지보수성 향상
7. **타입 안정성**: TypeScript를 활용한 개발 단계에서의 에러 방지

## 🚀 배포

- **배포 플랫폼**: Vercel
- **특징**:
  - GitHub 저장소와 연동한 자동 배포
  - 푸시 시 자동 빌드 및 배포 파이프라인
  - CDN을 통한 빠른 글로벌 서비스 제공
