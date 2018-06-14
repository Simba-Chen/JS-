var fs = require('fs')
var dirName = process.argv[2] 
if(dirName){
    fs.mkdirSync("./" + dirName) 
    process.chdir("./" + dirName) 
    fs.mkdirSync('css') 
    fs.mkdirSync('js') 
    
    fs.writeFileSync("./index.html", "")
    fs.writeFileSync("css/style.css", "")
    fs.writeFileSync("./js/main.js", "")
}else{
    process.exit(0)
}
process.exit(0)
