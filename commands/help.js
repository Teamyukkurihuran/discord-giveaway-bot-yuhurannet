let Discord = require('discord.js');
const { prefix } = require('../config.json');

exports.run = async (client, message, args) => {
        if (message.guild) {
            message.channel.send('DMを確認してね');
            message.delete();
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), '')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Help')
            .setColor('7289da')
            .setDescription(`下の説明通りにやるとできます`)
            .addField(`🎉 ${prefix}start [チャンネル] [時間] [勝者人数] [タイトル]`, 'チャンネルは、ボットに表示される必要があります。\n期間は、数値と時間変数で示されます。\n勝者は数で表されます。\n賞品は空白以外であれば何でもかまいません。')
            .setFooter('discord.js', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
            }
        if (!message.guild) {
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), '')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Help')
            .setColor('7289da')
            .setDescription(`下の説明通りにやるとできます`)
            .addField(`🎉 ${prefix}start [チャンネル] [時間] [勝者人数] [タイトル]`, 'チャンネルは、ボットに表示される必要があります。\n期間は、数値と時間変数で示されます。\n勝者は数で表されます。\n賞品は空白以外であれば何でもかまいません。')
            .setFooter('discord.js', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
        }
    }
