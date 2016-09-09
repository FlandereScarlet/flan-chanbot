exports.commands = [
  "osu",
  "mania",
  "taiko",
  "ctb"
];
var nodesu = require("nodesu");
var config = require("./botConfig.json")
var api = new Nodesu.client(config.osuApiKey);

exports.osu = {
  name : "osu",
  desc: "your osu!standard stats",
  main : function (bot,msg, suffix){
    var user = suffix.split("");
    api.user.get(user , Nodesu.Mode.osu).then(data => bot.sendMessage(msg, data));
  }
}
exports.ctb = {
  name: "ctb",
  desc: "your osu!ctach stats",
  main: function (bot,msg,suffix){
       var user = suffix.split("");
    api.user.get(user , Nodesu.Mode.ctb).then(data => bot.sendMessage(msg, data));
  }
}

  
