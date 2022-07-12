var fs = require("fs");
var list = fs.readFileSync("./badwords.txt",{encoding:"UTF-8"}).split("\n");
var encodedList = [];
for (var i in list) {
	encodedList.push(btoa(list[i]));
}
console.log(encodedList);
fs.writeFileSync("./badwordsencoded.txt",encodedList.toString());
while (true) {}