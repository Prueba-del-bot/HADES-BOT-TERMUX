import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
ββγπ€ππππππππππππ₯³γβ
ββπππ ππππππ ππ πππππ 
ββ [${before}] β [${user.level}]
ββπ²πππππ πΓ‘π ππππππππΓΊππ πππ ππ πππ, πππ’ππ πππΓ‘ ππ πππππ
π΄ππππππ .πππππ ππππ πππππππππ
βββββΧβΧβΧβΧβββ`.trim())
    }
}
export const disabled = false 
