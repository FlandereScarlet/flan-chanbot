exports.commands =[
    "commands.choose"
];
exports.choose = {
    name: "choose",
    usage: "<option>;<option>",
    desc: "chooses from given set parameters(obviously, don't be that guy).",
    main: function (bot, msg, suffix) {
        bot.sendMessage(msg.channel, msg.author + ", i choose \n ${msg.content.split("/").random()}");
    }
};