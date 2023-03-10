# `API`를 활용한 환전 웹

`exchangerate.host API`를 활용하여 만들어진 간단한 환전소 사이트입니다.

<br>

### <b>사이트 링크 : [Currency Exchange](https://currency-exchange-chi.vercel.app/)</b>

- ⚠️ `API`를 통한 검색인만큼 배포된 사이트에서의 환전 속도가 살짝 느릴 수도 있습니다. 😓

<br>

# 1. Tech

- Front-End
  <br>

  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=424242">&nbsp;
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">&nbsp;
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">


- Deploy
  <br>

  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">


- Edit Tool
  <br>

  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">


- Open API
  <br>

  [`exchangerate.host`](https://exchangerate.host/#/)

<br><br>

# 3. 프로젝트 상세 내용

<div align='center'>

| 메인 화면                                   |
| ------------------------------------------- |
| 기본값으로 미국 달러(1$)를 한국 원화로 설정 |
| <img src="./src/static/images/main.PNG">    |

| 입력 에러 설정                                                          |
| ----------------------------------------------------------------------- |
| 0 미만의 음수의 값을 입력할 시, 에러 메세지 출력 및 입력값을 1로 초기화 |
| `react-hot-toast` 라이브러리 사용                                       |
| <img src="./src/static/images/error.PNG">                               |

| 국가 선택                                                   |
| ----------------------------------------------------------- |
| 입력값과 결과값의 국가 선택 후, 입력값에 원하는 금액을 입력 |
| <img src="./src/static/images/select.PNG">                  |

| `BitCoin` 환전 결과                              |
| ------------------------------------------------ |
| 별도의 버튼 없이 실시간으로 환전률과 결과값 출력 |
| <img src="./src/static/images/btc.PNG">          |

</div>
