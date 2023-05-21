# 2023 1학기 인터넷프로그래밍 프로젝트

### 학번 및 이름 (개인 프로젝트)

2017129007 김홍래

# 프로젝트 주제

**[지금재난] - 실시간 재난 상황 공유 커뮤니티**

## 어떠한 문제를 해결하는가?

- 실시간 재난 발생 현황 api, 지도 api, 사진 및 게시글 올릴 수 있는 기능
  &rarr; 실시간으로 무슨 재난이 어디서 발생했는지 파악.
- 기부 / 모금, 구조 상황 공유 등에도 기여할 예정.

## 유사 서비스와의 차별성

- 일반 커뮤니티 사이트는 위치 정보가 없으며, "재난"에 전문적이지 않음.
- 인스타그램 등 기타 SNS는 위치 정보가 있지만, "재난"에만 특정되지 않았음.
- "가장 빨리 재난 정보를 찾을 수 있는 서비스"를 목표로 함.
- 현재는 지진이 발생하면 "지진희갤러리" 에서 지진 관련 실시간 사진 / 정보를 얻는 상황임.

## 매시업 아키텍처 (Mashup Architecture)

- 모바일 브라우저가 제공하는 GeoLocation 정보
- 모바일 디바이스에서 찍을 수 있는 사진 정보
- 지도 API 및 행정안전부 재난정보 API

이 세가지를 매쉬업하여 실시간으로 재난 상황을 공유할 수 있는 웹서비스를 만들고자 함.

## 적용 기술 소개 (HTML & Web APIs 등)

- 프런트엔드 : NextJS, HTML, CSS, JS

  <img src="./static/nextjs.png" width="130px">

- 백엔드 : NodeJS (Express)

  <img src="./static/nodejs.png" width="130px">

- DB : SQLite

  <img src="./static/SQLite.jpg" width="130px">

- API 리스트
  - 행정안전부 상황전파메시지정보 https://www.data.go.kr/data/3058491/openapi.do#tab_layer_detail_function
  - 네이버 지도 api https://www.ncloud.com/product/applicationService/maps
  - Geolocation api

## 데이터 소개

- 행정안전부 API 데이터 예시 :

  <img src="./static/데이터캡처.png" width="350px">

- 회원 게시물 데이터 : 개인정보는 저장하지 않을 예정.

## 데이터 수집 (출처 포함) 및 가공 (또는 사용자 제공 정보 공유)

- 회원들에게 수집된 정보는 별도의 가공 없이 저장할 예정
- 회원들에게 수집된 정보는 외부에 공유하지 않을 예정
- 공개된 지도 API 정보와 행정안전부가 제공하는 공개 API를 사용할 예정

## 문제해결 방법 (알고리즘)

사용자들이 사진 촬영 기능을 통해 재난 상황을 사진으로 찍고 게시판에 업로드, 실시간으로 재난 상황을 공유할 수 있게 됨.
사용자들은 업로드된 사진을 확인하고, 상황 파악을 돕기 위해 댓글과 좋아요 등의 상호작용을 할 수 있음.

## 서비스 시나리오 (scenario)

1. 행정안전부 API에 의해 재난 발생이 인지 &rarr; [지금재난] 웹사이트에 배너 dialog 띄움
2. "지역 + 재난명" 태그 생성 ex.[포항 지진]
   &rarr; 게시판에 태그 단 게시물만 모아 볼 수 있게 됨.
3. 이용자들이 사진과 재난 상황 게시물을 등록.
   &rarr; 위치, 사진 (optional), 상황 게시물 (제목, 내용, 댓글) 등록.
