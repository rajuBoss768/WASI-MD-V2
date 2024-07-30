//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "923259624206";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09wU0Jydis5YlhzYkprbitDREFVVU1hd2ZvbnZpYUIrODRWU1FudXNVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjJKSGVxaWdVU2pFTERVdHNBaVc2dkNZcWo3aVdRUjdPSTNsYVg4VVZFcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSnVVYzVSOE04amxYNmZ6eFRZYUJGVTZGUmZ3OHNWMzVwYlFvOEpNeDBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3ZUxGek92aUFTcE13YTBwbHMrQXZFelIyRmYxQkRzWjF5STdzTTdmYVNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9DVm9WcGlSSEQwU1VNQ1NORGgyaUh5aWdZdDA2cWF0d1JoTlUrazZjVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJFZ2dZMEk0MlIyeWVLSWRjREhTY1ZNQlc4V280NFJoc0FCejcwNUZZM1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1uMng1a3lZeEx3SVdFYXp4V21sUmxVZFVrcHlhei9wSklLZHlvbVVYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEJZa0JhTmx1ZzNEZzJObVROTDdPTkI3VE5LdEl1M25ZYW1GSHNwNUtVUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndhdXBHVXVqL0MvU2tVdDVISEFNbzgzQlVvNU5HTHN2M1EyNVZMOXlqMm5rUXF6bHpRbGlBMWt6elArbm1yKzhtY0k4QlNMRlVUUG1xWEpZVmVhWkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6IlgrZEJsR1FQRDNLYnQ3NUszNlMwNTBqM20zcGNNTmhKSi9PLzB4VXpOa3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjU5NjI0MjA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkEyODVDMjM5OEVEOUFBM0FEMDA1MkY3RjI2RUYzRDAzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIzNjAzMjl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI1OTYyNDIwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGOTg3QkFCNkU0QjA2MkQ0MjFFNEM1QkZFOTQxMDY4NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMzYwMzI5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyNTk2MjQyMDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0I2RENCM0Q1MjZBM0ZGNTc5MDlDQjlEMzY0NkQ5NjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjM2MDMzMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjU5NjI0MjA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk4MDE5RjE2MzNDMDIxRTdDMjMwMUUxQUQ4RTZGRkZDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIzNjAzMzF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNwTTRGeGdBUjU2Q0ptRm5OVGszTHciLCJwaG9uZUlkIjoiN2RlNzVhZjMtZWE5NC00Y2FmLTk2ZTgtMmYzNTQyNjk5YWQ0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF3YWQxeVNiMkRGNXJkTDNUcnZhQkZGMVhwUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3YzFMOXJCeDlGVElGc01iYkYzbHVxL1lYQkU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOFRaM0hYM0ciLCJtZSI6eyJpZCI6IjkyMzI1OTYyNDIwNjoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkpvaG4gV2ljayJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzJBcXpVUStzT2t0UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWkxBellPYTdmc1pvTVQwN3RWUUxzdmR4bEYrbGtvWnIrT2RRQytvVUtCRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiellyWW9PaXEyMFFiZS8yTHRvbWVQc3JjMFlVQ3VuMGRyWnZMS0RJTWcyb25VRnM2RzU5T2lnQXg5blp4TXc5UExzY21rYjFNZ1A3cG9BdW5XRUR0Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6IlBNMHMycnM5ZVBLYkxFaml4ZkxqSG0ySEg5aEhPN0E1bCtXZEM4TzFXQWhKMDZKTXF6RUEranJwQldUT2xyMk42SUljQkxXK2k5Mit1NGM0aWJOQUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjU5NjI0MjA2OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1N3TTJEbXUzN0dhREU5TzdWVUM3TDNjWlJmcFpLR2Evam5VQXZxRkNnUiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjM2MDMyNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNZUYifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-Raju Boss😍",
  author: process.env.PACK_AUTHER || "Raju",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Raju",
  ownername: process.env.OWNER_NAME || "RAJU",
  errorChat: process.env.ERROR_CHAT || "923259624206",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
