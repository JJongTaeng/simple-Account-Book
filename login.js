const http = require('http');
const url = require('url');
const querystring = require('querystring');
const template = require('./lib/template');
const print_list = require('./lib/print_list');
const mysql = require('mysql');
const cookie = require('cookie');
var nowDate = new Date();
let login_id;
let login_pwd;
var db = mysql.createConnection({
});
db.connect();

var server = http.createServer(function (request, response) {
  var urlObj = url.parse(request.url, true);
  if (urlObj.pathname === '/') {
    if (urlObj.query.id === undefined) {
      var html = template.login();
      response.writeHead(200);
      response.end(html);
    }
  } else if (urlObj.pathname === '/login') {
    var body = '';
    request.on('data', function (data) {
      body = body + data;
    });
    request.on('end', function () {
      var post = querystring.parse(body);
      db.query(`select * from users`, function (err, users) {
        var i = 0;
        while (i < users.length) {
          if (users[i].id === post.id && users[i].pwd === post.password) {
            login_id = users[i].id;
            login_pwd = users[i].pwd;
          }
          i = i + 1;
        }
        if (login_id === post.id && login_pwd === post.password) {
          response.writeHead(302, {
            "Set-Cookie": [`user=${post.id}`, `pwd=${post.password}`],
            Location: '/login_location'
          });
          response.end();
        }
        else {
          response.writeHead(302, { Location: '/' });
          response.end();
        }
      });
    });
  } else if (urlObj.pathname === '/login_location') {
    let cookies = {};
    if (request.headers.cookie) {
      cookies = cookie.parse(request.headers.cookie);
      console.log(cookies)
    } else {
      response.end('Please try again after logging in...');
    }
    db.query(`select id, expand, price, contents, DATE_FORMAT(input_date,'%y년%m월%d일') as input_date from income_expand where id ='${cookies.user}' order by input_date desc`, function (err1, all_data) {
      db.query(`select * from income_expand where month(input_date) = ${nowDate.getMonth() + 1} and id ='${cookies.user}'`, function (err2, month) {
        db.query(`select * from income_expand where month(input_date) = ${nowDate.getMonth() + 1} and day(input_date) = ${nowDate.getDate()} and id ='${cookies.user}'`, function (err3, day) {


          var whole_data = {
            month_income: 0,
            month_expand: 0,
            day_income: 0,
            day_expand: 0,
            month_allprice: 0,
            day_allprice: 0
          };

          if (month.length != 0) {
            for (var j = 0; j < month.length; j++) {
              if (month[j].expand === 0) {
                whole_data.month_income = whole_data.month_income + month[j].price;
              }
              else {
                whole_data.month_expand = whole_data.month_expand + month[j].price;

              }
            }
            whole_data.month_allprice = whole_data.month_income - whole_data.month_expand;
          }
          if (day.length != 0) {
            for (var j = 0; j < day.length; j++) {
              if (day[j].expand === 0) {
                whole_data.day_income = whole_data.day_income + day[j].price;
              }
              else {
                whole_data.day_expand = whole_data.day_expand + day[j].price;
              }
            }
            whole_data.day_allprice = whole_data.day_income - whole_data.day_expand;
          }
          var slide = print_list.all_list(all_data);
          var L_list = print_list.left_list(all_data);
          var html = template.main(login_id, whole_data, nowDate, slide, L_list);
          response.writeHead(200);
          response.end(html);
        });
      });
    });
  }
  else if (urlObj.pathname === '/signup') {
    var body = '';
    request.on('data', function (data) {
      body = body + data;
    });
    request.on('end', function () {
      var post = querystring.parse(body);
      db.query(`insert into users(id,pwd) values(?,?)`, [post.id, post.password], function (err, result) {
        response.writeHead(302, { Location: '/' });
        response.end();
      });
    });
  } else if (urlObj.pathname === '/income_expand') {
    let cookies = {};
    if (request.headers.cookie) {
      cookies = cookie.parse(request.headers.cookie);
      console.log(cookies)
    } else {
      response.end('Please try again after logging in...');
    }
    var body = '';
    request.on('data', function (data) {
      body = body + data;
    });
    request.on('end', function () {
      var post = querystring.parse(body);
      db.query(`insert into income_expand(id, expand,price,contents,input_date) values(?,?,?,?,'${post.year}-${post.month}-${post.day}')`, [cookies.user, post.income_expand, post.price, post.contents], function (err, result) {
        response.writeHead(302, { Location: `/login_location` });
        response.end();
      });
    });
  } else if (urlObj.pathname === '/logout') {
    response.writeHead(302, {
      'Set-Cookie': [
        `user=; Max-Age=0`,
        `pwd=; Max-Age=0`,
      ],
      Location: `/`,
    });
    response.end();
  }
})
server.listen(3000);