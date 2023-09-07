const http = require("http")
const routes = require("./routes")

// Routes Module -> bir modülü kendimiz nasıl oluşturacağız öğrenelim. Tüm kodları tek dosya içerisinde kullanmaktan kaçarak projemizde sayfalar(modüller) oluşturuyoz
     
var server =http.createServer(routes);
server.listen(3001);





















