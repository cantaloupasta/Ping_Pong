client.on('messageReactionRemove', async (reaction, user) => {
 
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;


    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === Certified_HumanoidEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(883737106130796615n);
        
       
        }
    } else {
        return;
    }
});
