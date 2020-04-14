var fs = require("fs");
 
function listCategory() { 
    return "a lot of categorys";
} 
   
function listProduct() { 
    return "a lot of products";
} 
 
function readFile(){
    var html = fs.readFileSync('how2j.html');
    return html;
}
 
function writeFile(){
       fs.writeFile('how2java.html', 'hello from how2java', (err) =>{
        if (err) throw err;
    });
    return "write successful";
}
 
exports.listCategory = listCategory; 
exports.listProduct = listProduct; 
exports.readFile = readFile; 
exports.writeFile = writeFile; 