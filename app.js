var http = require("http")
var fs = require("fs")

// herhangi bir doyasnın içeriğini okumak için ya da dosyaya bir içerik yazdırabilmek için fs modülünü kullanıyor olmam gerekir.  


const requestListener = (req , res ) => {

    console.log(req.url); //bulunduğumuz sayfanın urlesini verir

//fs.readFile de ilk parametre okunacak dosya ismi , 2. parametrede ise bir fonksiyon veriyoruz bu fonksiyon okuma işlemi bittikten sonra html içeriği gelicek ben bunu res.write(html) aracılığıyla html içeriğini cevap olarak okutuyoruz. 

    
    if (req.url == "/") {

        fs.readFile("index.html", (error , html) => {
        res.writeHead(200 , {"Content-Type" : "text/html"})
        res.write(html)
        res.end();
        })
    }
    
    else if (req.url == "/blogs"){
        fs.readFile("blogs.html", (error , html) => {
        res.writeHead(200 , {"Content-Type" : "text/html"})
        res.write(html)
        res.end();
        })
    }

    else{
        fs.readFile("notFound.html", (error , html) => {
        res.writeHead(404 , {"Content-Type" : "text/html"})
        res.write(html)
        res.end();
    })
    }
}
var server =http.createServer(requestListener)


server.listen(3000)























