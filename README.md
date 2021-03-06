# 📒 서비스 소개

<br>
<img width="600" alt="logo" src="https://user-images.githubusercontent.com/24685076/141114964-0f6e0eaf-5396-49a0-8395-b8a264e7b51d.png">
<br>
<br>

## 모든 창작의 시작, Colorboration🎨

<br>

Colorboration(컬러보레이션)은 누구나 자유롭게 컬러를 조합해 나만의 온라인 팔레트를 만들 수 있는 플랫폼입니다.

원하는 테마 태그, 컬러 태그를 선택해서 팔레트를 찾을 수 있습니다.

컬러 선택이 고민된다면 **Colorboration**과 함께 해보세요!

<br>
<br>

## 디자이너들의 컬러 조력자, Colorboration에서는... 👩‍🎨

- 다양한 컬러들로 특별한 나만의 팔레트를 만들 수 있어요.
- 다양한 유저들의 팔레트도 태그별로 필터링하여 조회할 수 있어요.
- 팔레트 상세 페이지에서 각 컬러들의 hex, rgb 코드를 복사 할 수 있어요.
- 마음에 들었던 팔레트를 찜할 수 있어요.
- 마음에 드는 유저가 만든 모든 팔레트를 모아 볼 수 있어요.
- 마이페이지에서 나의 팔레트, 내가 찜한 팔레트, 이전에 조회한 팔레트를 모아볼 수 있어요.

<br>


<br>
<br>

# 🔨 Tech Stack

![system_architecture](https://user-images.githubusercontent.com/24685076/141255522-05870de6-f389-4864-9d36-20103abcf626.png)

<br>
<br>



# 🧑‍💻 Team (Teletubbies)

Teletubbies(텔레토비)는 알록달록한 아이디어가 가득한 사람들이 모여 만들어진 팀입니다.

| 역할 | 이름   | 포지션    | Github                                          |
| ---- | ------ | --------- | ----------------------------------------------- |
| 팀장 | 김보라 | FRONT-END | [LauraBoraKim](https://github.com/LauraBoraKim) |
| 팀원 | 김태우 | FRONT-END | [phosa9203](https://github.com/phosa9203)       |
| 팀원 | 이원구 | BACK-END  | [westtrain](https://github.com/westtrain)       |
| 팀원 | 하승윤 | BACK-END  | [cherishxyun](https://github.com/cherishxyun)   |

<br>
<br>

# 🎈 More Info
📖 [위키](https://github.com/codestates/Colorboration/wiki)

# 실행 방법
<details>
<summary>서버</summary>
<div markdown="1">
  server 폴더 안에 .env 파일 만들고 다음과 같이 적는다.

  ```jsx

  DATABASE_HOST=localhost
  DATABASE_USERNAME=root
  DATABASE_PASSWORD=자신의 디비 암호
  DATABASE_PORT=3306
  DATABASE_NAME=colorboration
  
  ```
  
  ```jsx
  
  npm install // 모듈 설치하고 
  npm start   // 서버 실행하고 데이타베이스 테이블 만들기 
  // 이후 서버를 먼저 멈춘다. ctrl + c
  // 그리고 다음의 명령을 순서대로 실행시킨다.
  // 명령어 실행 순서가 중요합니다!!!!
  npx sequelize-cli db:seed --seed tags.js
  npx sequelize-cli db:seed --seed users.js
  npx sequelize-cli db:seed --seed palettes.js
  
  ```
  
  
  위 코드는 정적 데이터를 디비에 저장하는 작업입니다
  <br>
  자신의 디비로 가서 tags, users, palettes에 데이터가 잘 들어갔는지 확인합니다
  <br>
  이제 다시 서버를 실행합니다.
  <br>
  그리고 client 폴더로 이동해서 모듈설치하고(`npm i`) 실행을(`npm start`) 시킵니다.
</div>
</details>

