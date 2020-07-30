var CSS = require('./CSS');
var template = {
  login: function() {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
  ${CSS.CSS()}
  </style>
</head>
<body>
  <div class="web-container">
    <form class="login-container" action="/login" method="post">
      <label for="id">아이디</label>
      <input type="text" name="id" id="id">
      <label for="password">비밀번호</label>
      <input type="password" name="password" id="password">
     <input type="submit" class="submit" value ="로그인">
      <!-- <a href="/login" class="submit">로그인</a> -->
      <input type="button" class="signup" value ="회원가입">
    </form>
  </div>
  <div class="modal-container">
    <form class="signup-container" action='/signup' method='post'>
      <span>회원가입</span>
      <label for="signup-id">아이디</label>
      <input type="text" name="id" id="signup-id">
      <label for="signup-password">비밀번호</label>
      <input type="password" name="password" id="signup-password">
      <input type="submit" class="signup-submit" value ="가입">
    </form>
  </div>
  <div class="X-button">✖</div>
  <script>
    var signup_btn = document.querySelector(".signup");
    var modal_container = document.querySelector(".modal-container");
    var modal_X = document.querySelector(".X-button");
    signup_btn.addEventListener('click', openModal);
    modal_X.addEventListener('click', closeModal);
    function openModal() {
      modal_container.style.display = "flex";
      modal_X.style.display = "block";
    }
    function closeModal() {
      modal_container.style.display = "none";
      modal_X.style.display = "none";
    }
  </script>
</body>
</html> 
    `
  },
  main: function(id, whole_data,Date) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>간단가계부</title>
    <style>
    ${CSS.CSS()}
    </style>
    </head>
    <body>
      <div class="page">
        <!-- header -->
        <header class="header">
          <h1 class="title">간단 가계부</h1>
        </header>
        <!-- navi -->
        <ul class="menu">
          <li class="menu-item">
            <a href="# "class="menu-link">☰</a>
          </li>
          <li class="menu-item">
            <form class="search-form">
              <input type="search">
              <input type="submit" value="검색">
            </form>
          </li>
          <li class="menu-item">
            <a href="#" class="menu-link">CALENDER</a>
          </li>
          <!-- <li class="menu-item">
            <a href="" class="menu-link">DAY</a>
          </li> -->
        </ul>
        <!-- content -->
        <section class="content-container">
          <ul class="contents-list">
            <li class="contents-item">
              <span>이번 달 수입 : ${whole_data.month_income}원</span>
              <span>이번 달 지출 : ${whole_data.month_expand}원</span>
              <span>이번 달 잔액 : ${whole_data.month_allprice}원</span>
              <span>전체 합계 : ${whole_data.month_allprice}원</span>
            </li>
            <li class="contents-item">
              <span>오늘 수입 : ${whole_data.day_income}원</span>
              <span>오늘 지출 : ${whole_data.day_expand}원</span>
              <span>전체 합계 : ${whole_data.day_allprice}원</span>
            </li>
          </ul>
        </section>
        <!-- leftside -->
        <aside class="left-side-container">
          <ul class="left-side">
            <li class="left-title">최근 변경내역</li>
            <li class="left-item">07월 20일 17000원</li>
            <li class="left-item">06월 13일 32000원</li>
            <li class="left-item">04월 23일 7000원</li>
          </ul>
        </aside>
        <!-- footer -->
        <footer class="footer">MADE BY JJongTaeng</footer>
      </div>
      <!-- 데이터입력 모달 -->
      <div class="income-expand-container">
        <form action="/income_expand" class="income-expand-form" method="post">
          <div class="date-input" >
            <span>날짜</span>
            <input type="hidden" name = "id" value="${id}">
            <input type="number" name = "year" class="date" min="2018" max="2020"required placeholder="년" value="${Date.getFullYear()}">
            <input type="number" name = "month" class="date" min="0" max="12" required placeholder="월" value="${Date.getMonth()+1}">
            <input type="number" name = "day" class="date" min="0" max="31" required placeholder="일" value="${Date.getDate()}">
          </div>
          <div class="income-expand-radio">
            <input type="radio" id="income" name="income_expand" value=0 checked="checked">
            <label for="income">수입</label>
            <input type="radio" id="expand" name="income_expand" value=1>
            <label for="expand">지출</label>
          </div>
          <div class="price-won">
            <input type="number" name='price' class="price" min="0" required>
            <span class="won">원</span>
          </div>
          <div style="display: flex; width: 50%;">
            <input type="text" name="contents" class="inc-exp-content">
          </div>
          <div style="padding-top:2rem;">
            <input type="submit" class="income-expand-btn income-expand-submit" value="추가">
            <input type="button" class="income-expand-btn income-expand-cancle" value="취소">
          </div>
        </form>
      </div>
      <div class="plus-button"><span>+</span></div>
      <script>
        var plus_btn = document.querySelector(".plus-button");
        var modal_container = document.querySelector(".income-expand-container");
        var modal_X = document.querySelector(".income-expand-cancle");
        plus_btn.addEventListener('click', openModal);
        modal_X.addEventListener('click', closeModal);
        function openModal() {
          modal_container.style.display = "flex";
        }
        function closeModal() {
          modal_container.style.display = "none";
        }
      </script>
    </body>
    </html>
    `
  }
}

module.exports = template;





