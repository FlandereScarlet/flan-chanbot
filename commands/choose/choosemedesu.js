exports.commands = [
  "choose",
  ];
  exports.choose = {
    usage : "<option(minimum of 2)>",
    description : "just like decide, only it selects through a set of given parameters.",
    process : function (bot,msg,suffix) {
Array.prototype.random = function() {return this[Math.floor(Math.random()*this.length)];};
       bot.sendMessage(msg, `i choose ${message.content.split(";").random()}`);
    }
  };