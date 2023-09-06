var http = require("http")

// yapılan requestin url parametresine göre response nasıl verilir 2

const requestListener = (req , res ) => {

    console.log(req.url); //bulunduğumuz sayfanın urlesini verir

    if (req.url == "/") {

        res.writeHead(200 , {"Content-Type" : "text/html"})
        res.write(`<head>
            <title> anasayfa </title>
            <meta charset="utf-8">
            <body>
                <h1>Aradıınız sayfa bulunamadı</h1>
            </body>
        </head>`)
        res.end();

    }else if (req.url == "/blogs"){
        res.writeHead(200 , {"Content-Type" : "text/html"})
        res.write(`<head>
            <title> blogs </title>
            <meta charset="utf-8">
            <body>
                <h1>blogs sayfası bulunamadı</h1>
            </body>
        </head>`)
        res.end();
    }else{
        res.writeHead(404 , {"Content-Type" : "text/html"})
        res.write(`<head>
            <title> 404 </title>
            <meta charset="utf-8">
            <body>
                <h1>Aradıınız sayfa bulunamadı</h1>
            </body>
        </head>`)
        res.end();
    }



}

var server =http.createServer(requestListener)
// burada bir tane server objesi oluşturmuş oluyoruz.
// oluşturmuş olduğumuz server aslında olay tabanlı çalışır, yani server a bir talep geldiği zaman çağıralacak olan bir function tanımlıyoruz.   

server.listen(3000)

console.log("node.js serever at port 3000")






















