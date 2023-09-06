var http = require("http")
var fs = require("fs") 

// Post methotu kullanıcı tarafından servera bir bilgi gönderilmek istenildiğinde kullanılır.

const requestListener = (req , res ) => {

    console.log(req.url); //bulunduğumuz sayfanın urlesini verir

//fs.readFile de ilk parametre okunacak dosya ismi , 2. parametrede ise bir fonksiyon veriyoruz bu fonksiyon okuma işlemi bittikten sonra html içeriği gelicek ben bunu res.write(html) aracılığıyla html içeriğini cevap olarak okutuyoruz. 

    if (req.url == "/") {

        fs.readFile("index.html", (error , html) => {
        res.writeHead(200 , {"Content-Type" : "text/html"})
        res.write(html)
        res.end();
        })
    }else if (req.url == "/blogs"){
        fs.readFile("blogs.html", (error , html) => {
        res.writeHead(200 , {"Content-Type" : "text/html"})
        res.write(html)
        res.end();
        })
    }else if (req.url == "/create" && req.method === "POST"){
        fs.appendFile("blogs.txt" , "denemeEğ", (err) => {
            if(err){
                console.log(err);
            }else {
                res.statusCode = 302; //aslında bir hata kodu değil bilgilendirme geri döngüsüdür. Yönlendirme yaptığımızı söylüyoz
                res.setHeader("Location","/")  //location bilgisini / yaparak ana sayfaya gitmesini sağlıyoruz
                res.end();
//burda aslında bir bilgiyi kaydettikten sonra geri çevap gönderik ve ardından setHeader ile de kullanıcıyı home sayfasına göndermiş olduk. 
            }
        })
        //apendFile ilgili konumda xxxx.yyy yoksa o dosyayı oluşturur eğer varsa da sonuna 2. parametredeki değeri yazar. 3. parametre de eğer bir hata oluşşmuşsa bize hata parametresi değerini döndür demiş oluruz. 
    }
    
    else if (req.url == "/create"){
        fs.readFile("create.html", (error , html) => {
        res.writeHead(200 , {"Content-Type" : "text/html"})
        res.write(html)
        res.end();
        })
    }else{
        fs.readFile("notFound.html", (error , html) => {
        res.writeHead(404 , {"Content-Type" : "text/html"})
        res.write(html)
        res.end();
    });
}}
    

var server =http.createServer(requestListener);
server.listen(3000);





















