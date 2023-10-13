# Weather Checker

weather open API를 활용해 만든 검색한 도시의 현재 날씨 알리미
(https://openweathermap.org)

### develop date

3 days (2023.10.10 ~ 2023.10.11)
| 날짜(월/일) | 개발 내용 |
| ----------- | --------------------------------------------------------------------------------------------- |
| 10/11 | openAPI 결정 및 제공되는 API 확인하며 기능 구상, 기본 구조 만들기 |
| 10/12 | API 가져오기(fetch), 디자인에 맞춰 파일 생성 후 기능 추가(검색) + DI 한다면 어떤 기능을 분리할 것인지 빈 파일 미리 만들어보기 |
| 10/13 | API 가져오는 방식을 fetch에서 axios로 변경 후 파일 별도로 분리하기(api/weather.api) |

### GitHub Convention

| 표기        | 표기 사용 상황                                                                                |
| ----------- | --------------------------------------------------------------------------------------------- |
| 🟢 feat     | 새로운 기능                                                                                   |
| 🔴 Remove   | 파일을 삭제하는 작업만 수행한 경우                                                            |
| 🔥 HOTFIX   | 급하게 치명적인 버그를 고쳐야하는 경우                                                        |
| 🐞 fix      | 버그 수정                                                                                     |
| 📂 docs     | 문서 수정                                                                                     |
| 🔖 Rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                                            |
| 💬 Comment  | 필요한 주석 추가 및 변경                                                                      |
| 🎁 style    | 레이아웃, 코드 스타일 수정                                                                    |
| 💡 refactor | 기능, 코드 개선                                                                               |
| 🟡 test     | 테스트 코드, 리펙토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음       |
| 🪣 chore    | 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음 |

### Stacks

Environment
<img src="https://img.shields.io/badge/GitHub-000000?style=flat-square&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?&style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white">

Config
<img src="https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white">

Development
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3cript&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white">

### preview MV

<p align="center">도시 이름을 검색하면 현재 그 도시의 날씨 정보를 불러옵니다.</p>
<p align="center">
    <img src="https://github.com/55555-Jyeon/WeatherChecker/assets/134191817/f9841704-91ca-4f04-b364-ee25df14cd9e" width="100%">
    <img src="https://github.com/55555-Jyeon/WeatherChecker/assets/134191817/bd8966ff-014e-4138-a5dd-9eb2a07cd0ec" width="100%">
</p>
<p align="center">아래 기본적인 날씨 정보 외 습도와 풍속, 체감 온도 란에는 hover 효과도 주었습니다.</p>
<p align="center">
    <img src="https://github.com/55555-Jyeon/WeatherChecker/assets/134191817/ef09992c-0761-409e-9c10-ebe1ea80b408" width="100%">
</p>
