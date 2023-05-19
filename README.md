# 2023 1학기 인터넷프로그래밍 프로젝트

### 학번 및 이름 (팀 구성 시, 전체 팀원을 포함)

- 학번 2017129007 김홍래

# 프로젝트 주제

### 지금재난

- 실시간 재난 지도 커뮤니티

## 어떠한 문제를 해결하는가?

- 지도 api, 실시간 재난 발생 현황 api, 사진 및 게시글 올릴 수 있는 기능 &rarr; 실시간으로 무슨 재난이 어디서 발생했는지 빠르게 파악 가능.
  현재는 지진희갤러리 정도임

## 유사 서비스와의 차별성

- 유사 서비스 없음. 일반 커뮤니티 사이트는 위치 정보 없고 전문적이지 않음.

## 매시업 아키텍처 (Mashup Architecture)

- ??

## 적용 기술 소개 (HTML & Web APIs 등)

- 프런트엔드 : NextJS. 백엔드 : expressJS.
- API 리스트
  - 행정안전부 상황전파메시지정보 https://www.data.go.kr/data/3058491/openapi.do#tab_layer_detail_function
  - 네이버 지도 api https://www.ncloud.com/product/applicationService/maps
  - Geolocation api

## 데이터 소개

- ?

## 데이터 수집 (출처 포함) 및 가공 (또는 사용자 제공 정보 공유)

## 문제해결 방법 (알고리즘)

## 서비스 시나리오 (scenario)

- 재난 발생 &rarr; 사진 찍음 &rarr; 위치, 사진 (optional), 상황 게시물 (제목, 내용, 댓글) 등록.
