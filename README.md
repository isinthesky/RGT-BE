# fac-report-server

## 기술스택

### rest api 구현

typescript - mysql - Nodejs - prisma - express

### Google oAuth 구현

typescript - Nodejs - express - passport

## 구현내용

### rest api

Mysql을 Nodejs의 대표적인 ORM인 Prisma를 이용하여 제어했습니다.
DB table을 prisma를 이용하여 schema-first 한 방식으로 생성했습니다.

./root/prisma/schema.prisma에 prisma-schema를 작성했습니다.<br>
./root/src/controllers/order.controller.ts에 DB를 제어하는 코드를 구현했습니다.

### 중복제거

duplicate 함수를 만들어 중복제거를 위한 코드를 구현했습니다.

1. 모든 레코드의 order_id를 읽고 Map 자료구조를 활용하였습니다.
2. Map에 Key 값으로 order_id를 , Value 값에 중복 개수를 count 하기위해 사용했습니다.
3. 쌓인 Map의 자료들을 순회하며 order_id로 Where로 1개 값을 select 한 후에 해당 레코드를 Delete 했습니다.
4. 기존에 등록된 레코드 1개는 남겨야 하기 때문에 중복 개수에 -1을 하여 해결했습니다.

### 레코드 내용 변경

replace 함수를 만들어 레코드의 내용 변경을 위한 코드를 구현했습니다.

1. 변경 할 field와 find text, update text를 받는 UI를 만들었습니다.
2. prisma의 updateMany 매서드를 활용하였습니다.
3. findQuery 객체에 검색 될 필드와, 내용, updateQuery 객체에 변경할 내용을 을 담아.
4. table data의 내용을 수정 하였습니다.

## Google oAuth Login

Google oAuth Login을 passport library를 활용하여 구현했습니다.

./root/src/config/passport.ts에 passport 라이브러리를 설정했습니다.<br>
./root/src/routers/auth.router.ts에 Google 로그인과 관련된 주소를 담았습니다.

1. Google Cloud에 RGT 프로젝트를 새로 생성했습니다.
2. 인증키를 받아 clientID, secretPW를 받아 dotenv를 활용하여 넣어줬습니다.

## User Scenario

1. 메인 페이지에 접속한다. - 주문 목록이 메인 페이지에 풀력된다.
2. 상단에 로그인 버튼을 이용하여 Google 인증 절차를 거친다.
3. 로그인을 하고 유저의 세션 정보는 서버 메모리에 저장됩니다. - 서버가 재시작 될 경우 사라집니다.
4. 세션 정보의 유무를 체크하여 로그인 상태를 확인하고 개인 화면으로 진입 가능하게 합니다.
5. 개인 화면에서 new order 페이지를 통하여 새로운 주문을 추가할 수 있습니다.
6. 개인 화면에서 edit order 페이지를 통하여 중복제거와 데이터 통합 수정을 할 수 있습니다.
7. 웹 어플리케이션을 사용 중에 session 정보가 사라진다면 fetchTodo 함수를 구현하여. 메인 페이지로 이동합니다.
