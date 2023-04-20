# 🖥️ 프로젝트 소개
TypeScript-React를 활용한 웹사이트 만들기(아이스크림 판매)
<br>

## 🕰️ 개발 기간
* 23.03.09 - 23.04.07

### ⚙️ 사용한 스킬
Html, Css, Sass, JavaScript, React, Redux, TypeScript, MySQL, GitHub, Git

#### 관리자
-Id: admin

-password: admin1234$!!

## 📌 주요 기능
#### 로그인 <a href="https://github.com/namminimi/ice-cream/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C2(%EB%A1%9C%EA%B7%B8%EC%9D%B8)" >상세보기 - WIKI 이동</a>
- ID찾기, PW찾기
- 로그인 시 react-cookie에 setcookie함수 사용하여 쿠키(Cookie) 생성

#### 회원가입 <a href="https://github.com/namminimi/ice-cream/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C1(%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85)" >상세보기 - WIKI 이동</a>
- 다음 주소(react-daum-postcode) API 사용
- ID 중복 체크
- NickName 중복 체크
- bcrypt 사용하여 비밀번호 암호화
- 정규표현식 사용하여 사용자가 알맞는 값을 입력하게 메세지 출력

#### 로그아웃
- 유지시간 60분 설정, 유지시간 지날 시 자동로그아웃

#### 마이 페이지 <a href="https://github.com/namminimi/ice-cream/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C5(%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80)" >상세보기 - WIKI 이동</a>
- 다음 주소(react-daum-postcode) API 사용
- 회원정보 변경
- 회원 탈퇴

#### 검색 <a href="https://github.com/namminimi/ice-cream/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C4(%EC%83%81%ED%92%88)#%EF%B8%8F-%EC%83%81%ED%92%88-%EA%B2%80%EC%83%89">상세보기 - WIKI 이동</a>
- 찾는 아이스크림명 글자 1자 이상 입력 시 리스트 출력

#### 상품 등록 <a href="https://github.com/namminimi/ice-cream/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C3(%EC%83%81%ED%92%88-%EB%93%B1%EB%A1%9D)" >상세보기 - WIKI 이동</a>
- 관리자id로만 접근 가능
- multer 사용하여 이미지 등록
- 등록한 이미지 미리보기

#### 상품리스트 페이지 <a href="https://github.com/namminimi/ice-cream/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C4(%EC%83%81%ED%92%88)" >상세보기 - WIKI 이동</a>
- 각 제조사태그 클릭 시 해당 제조사 리스트 출력
- 로딩페이지 스켈레톤 기능
- 페이징 기능

#### 상품 상세보기 페이지 <a href="https://github.com/namminimi/ice-cream/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C4(%EC%83%81%ED%92%88)#%EF%B8%8F-%EC%83%81%ED%92%88-%EC%83%81%EC%84%B8%EB%B3%B4%EA%B8%B0" >상세보기 - WIKI 이동</a>
- 장바구니 담기
- react-slick API 사용(커스텀이미지 슬라이드)

#### 장바구니 페이지 <a href="https://github.com/namminimi/ice-cream/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C6(%EC%9E%A5%EB%B0%94%EA%B5%AC%EB%8B%88)" >상세보기 - WIKI 이동</a>
- 전체선택할 수 있는 체크박스, 각 상품 선택할 수 있는 체크박스
- 체크박스 클릭 시 결제금액 표시
- 전체삭제, 선택삭제

#### 공지사항 페이지 <a href="https://github.com/namminimi/ice-cream/wiki/%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C7(%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD)" >상세보기 - WIKI 이동</a>
- 관리자 id만 글 등록, 수정, 삭제 가능
- 관리자 id를 제외한 다른 사용자는 읽기만 가능
- 페이징 기능

#### 메인페이지
- react-slick API 사용(상품광고이미지 슬라이드)
- react-intersection-observer API 사용
(메인페이지에 원하는 스크롤값 범위 안에 들어올 시 입력한 문자값 출력)
- kakao maps API 사용(가상의 매장 위치)
