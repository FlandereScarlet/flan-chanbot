exports.commands = [
    "desu",
];
var response = require("./responses.json");
exports.desu = {
    name: "8ball/desu",
    desc: "decides for you",
    longDesc: "ask a stupid question, it will answer something",
    main : function(bot,msg,suffix) {
 if (suffix === 0){
     bot.sendMessage("need to supply at least a question!");
 } else {
     bot.sendMessage(msg.channel, msg.author, response.Response);
 }
    }
};