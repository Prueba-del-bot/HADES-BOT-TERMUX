import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/maldita-puta.mp3'
conn.sendFile(m.chat, vn, 'maldita-puta.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Calla maldita puta|calla maldita puta/
handler.command = new RegExp

export default handler

