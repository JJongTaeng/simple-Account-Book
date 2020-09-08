var CSS = {
  CSS: function() {
    return `
    html {
      font-family: 'Apple SD Gothic Neo', Roboto, 'Noto Sans KR', NanumGothic, 'Malgun Gothic', sans-serif;
      color: #555;
      line-height: 1.2;
      word-wrap: break-word;
    }
    body {
      background: #eee;
      -webkit-font-smoothing: antialiased;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
    }
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block;
    }
    div, span, article, section, header, footer, aside, p, ul, li, fieldset, legend, label, a, nav, form {
      box-sizing: border-box;
      /* content-box */
    }
    ol, ul, li {
      list-style: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    img {
      max-width: 100%;
      height: auto;
      border: 0;
    }
    a {
      display: inline-block;
    }
    button {
      border: 0;
      background: transparent;
      cursor: pointer;
    }
    
  .flex-container {
  /* padding: 10px; */
  background: lightgray;
}
  .flex-item {
    padding: 10px;
    border: 3px solid rgb(50,50,40);
    color: white;
    background: mediumseagreen;
  }
/* 로그인 페이지 */
.web-container {
  position: fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  display: flex;
  justify-content: center;
  align-items: center;

}
.login-container {
  width: 50vw;
  min-width: 400px;
  max-width: 600px;
  height: 50vh;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid gold;
  border-radius: 2rem;
  background-color: white;
}

#id {
  border: 0.5px solid dodgerblue;
  border-radius: 1rem;
  height: 2rem;
  width:70%;
  margin-bottom:1rem;
  text-align: center;
  font-size: 1.5rem;
  transition: 0.5s;
}
#id:hover {
  background-color: rgb(206, 224, 241);
}
#password {
  border: 0.5px solid dodgerblue;
  border-radius: 1rem;
  height: 2rem;
  width:70%;
  margin-bottom:1rem;
  text-align: center;
  font-size: 1.5rem;
  transition: 0.5s;
}
#password:hover {
  background-color: rgb(206, 224, 241);
}
label[for="id"] {
  font-size: 1rem;
  margin-bottom: 0.8rem;
  font-weight: bold;
}
label[for="password"] {
  font-size: 1rem;
  margin-bottom: 0.8rem;
  font-weight: bold;
}
.submit {
  color: black;
  width: 6rem;
  height: 2rem;
  border:0;
  border-radius: 1rem;
  background-color: rgb(224, 224, 224);
  margin-bottom: 0.7rem;
  text-align: center;
  text-decoration: none;
  font-size: 0.9rem;
  padding-top: 6px;
}
.signup {
  color: black;
  width: 6rem;
  height: 2rem;
  border:0;
  border-radius: 1rem;
  background-color: rgb(224, 224, 224);
  cursor: pointer;
}

/* 회원가입 모달창 */
.modal-container {
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup-container {
  background-color: white;
  max-width: 500px;
  min-height: 300px;
  width: 70vw;
  height: 50vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  border: 2px solid gold;
}
#signup-id {
  height: 2rem;
  width: 60%;
  border-radius: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.5rem;
  border: 0.5px solid dodgerblue;
  transition: 0.5s;
}
#signup-id:hover {
  background-color: rgb(206, 224, 241);
}
#signup-password {
  height: 2rem;
  width: 60%;
  border-radius: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.5rem;
  border: 0.5px solid dodgerblue;
  transition: 0.5s;
}
#signup-password:hover {
  background-color: rgb(206, 224, 241);
}
label[for="signup-id"] {
  font-size: 1rem;
  margin-bottom: 0.8rem;
  font-weight: bold;
}
label[for="signup-password"] {
  font-size: 1rem;
  margin-bottom: 0.8rem;
  font-weight: bold;
}
.signup-submit {
  color: black;
  width: 6rem;
  height: 2rem;
  border:0;
  border-radius: 1rem;
  background-color: rgb(224, 224, 224);
  cursor: pointer;
}
.signup-container span {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #555;
}
.X-button {
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 2rem;
  margin-right: 3rem;
  font-size: 3rem;
  cursor: pointer;
}
.X-button:hover {
  color: crimson;
}

/* 메뉴바 */
.menu {
  display:flex;
}
.menu-item {
  background:rgb(255, 255, 235);
  width:25%;
  transition: 0.3s;
}
.menu-item:nth-child(1){
  width:20%;
}
.menu-item:nth-child(2){
  width:50%;
}
.menu-item:nth-child(3){
  width:30%;
}
.menu-item:nth-child(2) {
  display:flex;
  align-items: center;
}
.menu-link {
  display: block;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
}
.search-form{
  display: flex;
  width:100%;
  height:100%;
}
.search-form>input[type="search"]{
  flex-grow:1;
}

.menu-link {
  text-decoration: none;
  color:#333;
}
.menu-item:nth-child(1):hover,
.menu-item:nth-child(3):hover,
.menu-item:nth-child(4):hover
{
  background-color: dodgerblue;
}
.menu-link:hover{
  color:white;
}
.search-form{
  display: flex;
  height: 40px;
}
.search-form input[type='search'] {
  /* min-width: 0; */
  flex-grow: 1;
  margin-right: 10px;
  border:0.5px solid dodgerblue;
  border-radius: 0.3em;
  font-size: 1rem;
}
.search-form input[type='submit'] {
  width: 4em;
  border: 0;
  border-radius: 0.3em;
  font-size: 1rem;
  background: gold;
}
/* 가운데 콘텐츠 */
.contents-list {
  display:flex;
  flex-direction: column;
  align-items: center;
}

.contents-item {
  width: 90%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 1rem;
  text-align: center;
  color:#333;
  padding: 1rem;
  margin: 1rem;
}
.contents-item span {
  font-weight: bold;
  font-size:1.1rem;
}
@media (min-width: 800px) {
  .contents-list {
    flex-direction: row;
    align-items: stretch;
  }
}
/* 좌측사이드 */
.left-span {
  font-size: 1.5rem;
  margin-right: 1rem;
}
.left-div{
  display: flex; 
  align-items: center;
}
.left-item{
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
.left-title {
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  margin-top: 1rem;
}
/* 수입지출 입력 */
#expand,
#income{
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
}
#income:checked ~ label[for="income"]{
  color: crimson;
  font-size: 1.3rem;
}
#expand:checked ~ label[for="expand"]{
  color: crimson;
  font-size: 1.3rem;
}
.income-expand-container{
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.income-expand-radio{
  margin-bottom: 1.2rem;
}
.income-expand-form{
  width: 50vw;
  height: 50vh;
  min-width: 500px;
  max-width: 700px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 0.7rem;
  border: 1px solid gold;
}
.price-won {
  display: flex;
  align-items: center;
  justify-content: center;
  width:50%;
}
.price{
  border:0;
  border-bottom: 0.5px solid #333;
  flex-grow:1;
  height: 2rem;
  margin-bottom: 1rem;
  text-align: right;
  font-size: 1.2rem;
}
.won {
  font-size: 1.3rem;
  font-weight: bold;
}
.income-expand-btn {
  border: 0;
  background-color: rgb(140, 193, 247);
  color:white;
  width:4rem;
  height: 2rem;
  border-radius: 0.5rem;
}
.date-input{
  display: flex;
  justify-content: center;
}
.date{
  width:4rem;
  height:2rem;
  font-size:1.1rem;
  margin-right:1rem;
  border:0;
  text-align: right;
}
.date-input>span{
  align-self: center;
  margin-right: 1rem;
  font-weight: bold;
}
.inc-exp-content{
  border:0;
  border-bottom: 0.5px solid #333;
  flex-grow: 1;
  height: 2rem;
  margin-bottom: 1rem;
  text-align: right;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.plus-button{
  position: fixed;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  margin-bottom: 2rem;
  margin-right: 3rem;
  cursor: pointer;
  width:50px;
  height:50px;
  background-color: gold;
  display:flex;
  align-items: center;
  justify-content: center;
}
.plus-button>span{
  font-size: 3rem;
  text-align: center;
}
.plus-button:hover {
  color: crimson;
}
.income-expand-container{
  display:none;
}
  .header {
    background: white;
    text-align: center;
    padding: 1rem;
  }
  a[href="/logout"] {
    position:absolute;
    top: 1rem;
    right: 1rem;
    text-decoration: none;
    color: #666;
  }
  @media (min-width:0) and (max-width:800px){
    .search-form {
      display:none;
    }
    .menu-item {
      width:33%;
    }
    .menu-link {
      font-size: calc(0.5rem + 2.5vw);
    }
  }
  .content-container {
    margin: 0 1rem;
  }
  .left-side-container {
    background: #666;
    color:white;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  .footer{
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem;
    background-color: rgb(255, 255, 235);
  }
  
  @media (min-width: 1024px){
    .page{
      display: flex;
      flex-wrap:wrap;
    }
    .header {
      width:100%;
    }
    .menu {
      width:100%;
    }
    .left-side-container{
      width:17%;
      order:1;
    }
    .content-container{
      width:80%;
      order:2;
      flex-grow: 1;
    }
    .footer{
      width:100%;
      order:3
    }
  }
  
  .modal-container {
    display: none;
  }
  .X-button {
    display: none;
  }
  .menu-btn{
    color: black;
    text-decoration: none;
  }
  .menu-container {
    position: absolute;
    top: 141px;
    left: -100vw;
    width: 99vw;
    min-height: calc(100vh - 141px);
    background-color: #fffaf0;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    border:2.5px solid #333;
    border-radius: 1rem;
  }
  .menu-container > p{
    margin-top:1rem;
    font-size:2rem; 
    font-weight: bold;
  }
  .menu-table{
    margin-top: 5rem;
    border-collapse: separate;
  }
  .menu-tr{
  
    border:0.5px solid #00498c;
    border-radius: 1rem;
  }
  .menu-th{
    height: 2rem;
    width: 10rem;
    border-radius: 0.3rem;
    border: 2px solid #333;
    color: #333;
  }
  .menu-th:nth-child(4){
    width: 20rem;
  }
  .menu-td{
    height: 2rem;
    width: 10rem;
    border-radius: 0.3rem;
    border:0.5px solid #00498c;
    color: #333;
    text-align: center;
  }
    `
  }
}

module.exports = CSS;