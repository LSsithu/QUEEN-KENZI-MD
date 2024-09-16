const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", //Add Your Session id
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/cbf3858a08efefa2d1d47.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃ꜱᴇɴᴜ Qᴜᴇᴇɴ 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️ ``| 2024🤍*",
AUTO_VOICE : process.env.AUTO_VOICE || "false",
READ_CMD: process.env.READ_CMD || "false",
MODE : process.env.MODE || "public",
AUTO_BIO : process.env.AUTO_BIO || "true",    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
