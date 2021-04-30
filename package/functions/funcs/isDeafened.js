module.exports = async d => {
    const code = d.command.code
    
    const inside = d.unpack()
	const err = d.inside(inside)

	if (err) return d.error(err)
    
    const user = await d.message.guild.members.fetch(inside.inside).catch(err => {})
    
    if (!user) return d.error(`❌ Invalid user ID in \`$isDeafened${inside}\``)
        
    return {
        code: code.replaceLast(`$isDeafened${inside}`, user.voice.selfDeaf || user.voice.serverDeaf)
    }
}  