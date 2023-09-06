var http = require("http")

const requestListener = (req , res ) => {

    
    res.setHeader("Content-Type", "text/html"); //plain res.write da gönderdiğimiz değerleri sadece text olarakk algılarken bir eğer text/plain alanını text/html olarak değiştirirsek res.write(<h1>asd</h1>) şeklinde bir html kodu yazarsak html olduğunu anlar ve ve ekrana yazdırır.
    res.statusCode= 200;
    res.write("<h1>Bu bir hata mesajidir</h1>");
    res.write("<p>sayfaya  ulaşilamiyor lütfen daha sonra tekrar deneyiniz</p>");
    res.end();
}

var server =http.createServer(requestListener)
// burada bir tane server objesi oluşturmuş oluyoruz.
// oluşturmuş olduğumuz server aslında olay tabanlı çalışır, yani server a bir talep geldiği zaman çağıralacak olan bir function tanımlıyoruz.   

server.listen(3000)

console.log("node.js serever at port 3000")






















