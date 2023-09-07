var fs = require("fs") 


const routeHandler = (req , res ) => {
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
        res.end()
    })
    }
    else if (req.url == "/create" && req.method === "POST"){
           
            const data=[] //gelene dataları bu dizide topladık

            req.on("data", (chunk)=> { //req.on ile partçalara erişiyoruz ve dizimiz pushluyoruz
                data.push(chunk)

            }) //gelen req de buffer(durak) da bir olay fırlatılıyordu bu olay data olayıdır. O bilgi kümesinin alındığı nokta bufer noktasıydı. 

            req.on("end" , () => { //bütün bilgiler biter bütün bilgiler server a aktalırır o zaman end olayı gerçekleştirilir. 

                const cevap = Buffer.concat(data).toString() //Buufer.concat ile data dizisini aldık ve string bir ifadeye çevirdik.
                const parsedData = cevap.split("=")[1]; //gelen bilgi title=kolakana şeklinde geldiği için ben onlardan ayıklayıp istenilen bilgiyi aldım.

                fs.appendFile("blogs.txt" , parsedData, (err) => {  //burda stringi çevirdiğimiz ve temizlediğimiz bilgiyi fs.appendFile ile bir dosyada depoluyoruz.
                    if(err){
                        console.log(err);
                    }else {
                        res.statusCode = 302; 
                        res.setHeader("Location","/") 
                        res.end();
                    }
                })
            }  ) 
    }
    else if (req.url == "/create"){
        fs.readFile("create.html", (error , html) => {
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
    });
}}

module.exports = routeHandler; //burda oluşturduğumuz modülü dışarıya aktarıyoruz.