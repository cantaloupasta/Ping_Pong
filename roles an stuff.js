module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '883736428998176818';
        const Certified_HumanoidRole = message.guild.roles.cache.find(role => role.name === "Certified_Humanoid");
 
        const Certified_HumanoidEmoji = '😳';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#caca99')
            .setTitle('Are_you_Human?')
            .setDescription('React_to_prove_that_you_are_human!\n\n'
                + `${Certified_HumanoidEmoji} for Certified_Humanoid\n`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(Certified_HumanoidEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === Certified_HumanoidEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(883737106130796615);
                }
                
            } else {
                return;
            }
 
        });


    }}