import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './src/Menu2.jpg'
let img = await(await fetch('https://i.imgur.com/lkch77g.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
āćšÖ¼ į¹ššÆššššš!sā¹ā·ā»ā¹š¹āįµįµįµā»į“¹į“°ć
āā ą¹Ū£ŪĶ”ĶŪššØš„šą¦ą§£Ķ”Ķį·Ö³į· ${taguser}šāØ 
āā š šµš“š²š·š°: ${week}, ${date}
āā šššøš“š¼šæš¾ š°š²ššøšš¾: ${uptime}
āā š šššš°ššøš¾š: ${rtotalreg}
āāāāā×ā×ā×ā×āāā
āāāćš¼šššššćā
āāš®${usedPrefix}xnxxsearch <texto
āāš${usedPrefix}animeinfo <texto
āāšŖ${usedPrefix}google <texto
āāš${usedPrefix}letra *<texto>*_
āāš¬${usedPrefix}wikipedia <texto
āāš­${usedPrefix}ytsearch <texto
āāš®${usedPrefix}apkdone <texto
āāš${usedPrefix}apkgoogle <texto
āāšŖ${usedPrefix}apkmody <texto
āāš¬${usedPrefix}apkshub <texto
āāš­${usedPrefix}happymod <texto
āāš®${usedPrefix}hostapk <texto
āāš${usedPrefix}revdl <texto
āāšŖ${usedPrefix}toraccino <texto
āāš¬${usedPrefix}uapkpro <texto
āāāāā×ā×ā×ā×āāā
`.trim()
let buttons = [
{ buttonId: '/menu', buttonText: { displayText: 'šššššš' }, type: 1 },
{ buttonId: '/estado', buttonText: { displayText: 'šššššššš±' }, type: 1 }]
let buttonMessage = {
image: imagen1 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'šššš-ššššš-ššš-ššāØ',
body: null,
thumbnail: img,
sourceUrl: `https://youtu.be/HoxZuQokeMM`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[āššššā] š“š» š¼š“š½š ššøš“š½š“ šš½ š“ššš¾š š š½š¾ šµšš“ šæš¾ššøš±š»š“ š“š½ššøš°šš»š¾, šš“šæš¾ššš“š»š¾ š°š» šæšš¾šæšøš“šš°ššøš¾ š³š“š» š±š¾š*', m)
}}
handler.command = /^(buscadores|buscadores\?)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
