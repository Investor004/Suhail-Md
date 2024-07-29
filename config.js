const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348113638527";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_01_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgODQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDg0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDgwLFxuICAgICAgICA3MyxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgwLFxuICAgICAgICA4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICA2MixcbiAgICAgICAgMjI1LFxuICAgICAgICAzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMWdBUWROUjU1VmpWQldVVUxLWW5ZMmhBbVh3YW9BanFiWlR3a2JBcVFKST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTEzNjM4NTI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMzE3MzJCNEI2MjUwNDJGNjVGM0NCQTY4NTNCNEZCRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNzYwNTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTTltRV9BdDVTQzJacklBZFlHVERvd1wiLFxuICBcInBob25lSWRcIjogXCI5NzkwMDM4Yi1jMDc0LTQ5ZmEtYjE0Yy1lNzk2NjNiN2YxNmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgNzcsXG4gICAgICA3LFxuICAgICAgMTg2LFxuICAgICAgNSxcbiAgICAgIDEwLFxuICAgICAgMTIyLFxuICAgICAgMTQ1LFxuICAgICAgMyxcbiAgICAgIDE3NixcbiAgICAgIDE4NixcbiAgICAgIDc3LFxuICAgICAgNTQsXG4gICAgICAxMTIsXG4gICAgICA5LFxuICAgICAgMjM5LFxuICAgICAgODIsXG4gICAgICAxNDYsXG4gICAgICAxMDYsXG4gICAgICA2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICA1MyxcbiAgICAgIDE2MixcbiAgICAgIDEyNCxcbiAgICAgIDExLFxuICAgICAgMzIsXG4gICAgICAxMDksXG4gICAgICAxNSxcbiAgICAgIDIwNixcbiAgICAgIDE3NSxcbiAgICAgIDE1MixcbiAgICAgIDEyNSxcbiAgICAgIDE2NSxcbiAgICAgIDI5LFxuICAgICAgOTksXG4gICAgICAyMyxcbiAgICAgIDEyNSxcbiAgICAgIDIwMCxcbiAgICAgIDExNyxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLSjdaNFFFN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODExMzYzODUyNzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTAyODk2ODg5NTMwMTQ6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNQ0Z4ZEVFRU5DeG43VUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVTSzdwUnNlcWg2RUkyT2hFSE42bGNGeTJCTVFKTUUrQ3lOSDZ4dXVtaWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiKzY2aFhMZ0xUM2FEMXdnRHlWbUkrRTVwS0w4NkRzS21va2F2YUEvanBZdTExOW83Z29SNk05d3hTUkJjWXh3b2FrakRURTIxa0dPZ0dXK2xneVZ0Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVXkxNFZJUDUrWUx6Y0pOdzcyd09hWUZBdk5BUXI5eVJwcFpNa0l0M09ONklsOFZEUEp3TFVJdnhMWXBzU3RkUGdGZWdDN0pEalIySUlSQkNXRko0aFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODExMzYzODUyNzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI3NjA1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVpU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWlTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRGVDcmpuRlk4alJwY015RUpSdDhaZ1ltb2ZsMDNEblp2RHl1TFB6b0lSST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjQ0NzQyMzM2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1MDc3NjgwNjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
