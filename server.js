const http = require('http');
const fs = require('fs');
const url = require('url')


http.createServer((req, res) => {
     //console.log(req);

    var q = url.parse(req.url,true)
      // console.log(q.pathname);

    if (q.pathname === '/') {
        fs.readFile('table.html', (err, data) => {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(data);
            res.end();
        });
    }
    else if (q.pathname === '/signup') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200,{'content-type' : 'text/html'})
            res.write(data);
            res.end();
        })
    }
        
    else if (q.pathname === '/signupaction') {
        console.log(q.query);

        res.writeHead(200,{'content-type' : 'text/html'})
        res.write('<h1>'+'hai '+q.query.name+'your email and password is:'+'\nEmail:'+q.query.email+'\nPassword:'+q.query.password);
        res.end();     
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('page not found 404');
        res.end();
    }


}).listen(7002,()=> console.log('server satrted')); 


