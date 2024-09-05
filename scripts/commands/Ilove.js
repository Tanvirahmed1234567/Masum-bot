const fs = require("fs");
module.exports.config = {
  name: "iloveu",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("I love you")==0 || (event.body.indexOf("i love you")==0 || (event.body.indexOf("I love u")==0 || (event.body.indexOf("I love you")==0)))) {
		var msg = {
				body: "-❒ 🤖 | 𝐌𝐄𝐒𝐒𝐄𝐆𝐄:\n╰┈➤ ভালোবাসা নামক আব্লামি করতে মন চাইলে বস MASUM BOSS এর ইনবক্স চলে জাও-!!🌚\n\n━━━━━━━━━━━━━━━━━━━\n✿◕𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑:𝐌𝐀𝐒𝐔𝐌 𝐀𝐇𝐀𝐌𝐄𝐃◕✿🌚\n━━━━━━━━━━━━━━━━━━━\n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 :https://www.facebook.com/profile.php?id=100078624862893&mibextid=ZbWKwL
			
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
