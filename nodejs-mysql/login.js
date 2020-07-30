var http = require('http');
var url = require('url');
var querystring = require('querystring');
var template = require('./lib/template');
var mysql = require('mysql');
var nowDate = new Date();

var db = mysql.createConnection({

});
db.connect();

var server = http.createServer(function(request,response){
  var urlObj = url.parse(request.url, true);
  if(urlObj.pathname==='/'){
    if(urlObj.query.id === undefined){
        var html = template.login();
        response.writeHead(200);
        response.end(html);
    }
  }else if(urlObj.pathname ==='/login'){
    var body = '';
    request.on('data', function(data){
      body = body + data;
    })
    request.on('end', function(){
      db.query(`select * from users`, function(err, users){
        db.query(`select * from income_expand where month(input_date) = ${nowDate.getMonth() + 1}`, function(err2, month){
          db.query(`select * from income_expand where day(input_date) = ${nowDate.getDate()}`, function(err2, day){
            var login_id;
            var i =0;
            var whole_data = {
              month_income:0,
              month_expand:0,
              day_income:0,
              day_expand:0,
              month_allprice:0,
              day_allprice:0
            };
            var post = querystring.parse(body);
            if(month.length != 0){
              for(var j =0; j<month.length; j++){
                if(month[j].expand === 0){
                  whole_data.month_income = whole_data.month_income + month[j].price;
                }
                else{
                  whole_data.month_expand = whole_data.month_expand + month[j].price;
  
                }
              }
              whole_data.month_allprice = whole_data.month_income - whole_data.month_expand ;
            }
            if(day.length != 0){
              for(var j =0; j<day.length; j++){
                if(day[j].expand === 0){
                  whole_data.day_income = whole_data.day_income + day[j].price;
                }
                else{
                  whole_data.day_expand = whole_data.day_expand + day[j].price;
                }
              }
              whole_data.day_allprice = whole_data.day_income - whole_data.day_expand ;
            }
            while(i<users.length){
              if(users[i].id === post.id && users[i].pwd === post.password){
                login_id = users[i].id;
                login_pwd = users[i].pwd;
              }
              i=i+1;
            }
            if(login_id === post.id && login_pwd === post.password){
              console.log(login_id);
              var html = template.main(login_id, whole_data, nowDate);
              console.log(123123);
              response.writeHead(200);
              response.end(html);
            }
            else{
              response.writeHead(302,{Location: '/'});
              response.end();
            }

          });
        });
      });
    });
  }else if(urlObj.pathname === '/signup'){
    var body ='';
    request.on('data',function(data){
      body = body+ data;
    });
    request.on('end',function() {
      var post = querystring.parse(body);
      db.query(`insert into users(id,pwd) values(?,?)`,[post.id,post.password],function(err, result){
        response.writeHead(302,{Location: '/'});
        response.end();
      });
    });
  }else if(urlObj.pathname === '/income_expand') {
    var body = '';
    request.on('data', function(data){
      body = body + data;
    });
    request.on('end', function(){
      var post = querystring.parse(body);
      console.log(post);
      db.query(`insert into income_expand(id, expand,price,contents,input_date) values(?,?,?,?,'${post.year}-${post.month}-${post.day}')`,[post.id, post.income_expand, post.price, post.contents],function(err,result){
        response.writeHead(302, {Location: `/login`});
        response.end();
      });
    });
  }
});
server.listen();