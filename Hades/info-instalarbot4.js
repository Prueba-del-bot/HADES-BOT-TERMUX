let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
βγπΈπ½πππ°π»π°π²πΈπΎπ½ π³π΄π» π±πΎπγ
βοΈHola π ya hay una soluciΓ³n para los botones  para termuxπ*
βββββΧβΧβΧβΧβββ
βγπ±Si usas mi bot o mi bot editado pues usar mi archivo de mi bot de la carpeta de node_modulesβοΈ*
βββββΧβΧβΧβΧβββ
βγβοΈSi quieres que te funcione en otro bot usa mi carpeta de mi bot de node_modulesπ*
βββββΧβΧβΧβΧβββ
βγTutorialπ΄γ
ββhttps://youtu.be/zJSmBlNWah0
βββββΧβΧβΧβΧβββ
βγπArchivo del botπγ
ββhttps://www.mediafire.com/file/h9x1bgb79vmllkn/OFC-HADES-BOT.zip/file
βββββΧβΧβΧβΧβββ
βγNΓMERO DEL CREADOR γ
ββhttp://wa.me/5212411347465
βββββΧβΧβΧβΧβββ
βγARCHIVO DEL BOTγ
ββhttps://www.mediafire.com/file/35ocnr07e0615n0/OFC-HADES-BOT.zip/file
βββββΧβΧβΧβΧβββ
βγππ΄ππΌππγ
ββhttps://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file?dkey=wfddtbi5jtj98
βββββΧβΧβΧβΧβββ
βγπ²πΎπΌπ°π½π³πΎπ ππ΄ππΌππγ
ββpkg update && pkg upgrade
ββpkg install git -y
ββpkg install nodejs -y
ββpkg install ffmpeg -y
ββpkg install imagemagick -y
ββtermux-setup-storage
ββcd storage/downloads/OFC-HADES-BOT
ββnpm install
ββls
ββnpm update
ββnpm start
βββββΧβΧβΧβΧβββ
βγβοΈFunciona bien esto es temporal hasta que salga una nueva versiΓ³n de baileys ya que la versiΓ³n "^4.4.0", aΓΊn no funciona para los botonesπ
βββββΧβΧβΧβΧβββ 
`
let buttonMessage= {
'document': { url: `https://youtu.be/4eA5nDxPjOA` },
'mimetype': `application/${document}`,
'fileName': `ππππ-πππππ-πππ-ππβ¨`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/Yovanihades1212/HADES-BOT-MDV2.git',
'mediaType': 2,
'previewType': 'pdf',
'title': 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄β©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/4eA5nDxPjOA' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΌπ΄π½π'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'π³πΎπ½π°π'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['termux','script']
export default handler
