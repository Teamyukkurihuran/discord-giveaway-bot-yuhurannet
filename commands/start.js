const ms = require('ms');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':boom: 景品を開始するには \`MANAGE_MESSAGES\` 権限が必要です。');
    }

    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return message.channel.send(':boom: ええと、私はできませんでした\'t のチャンネルを見つけてください！ 再試行！');
    }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':うーん。\'t 期間を提供しました。 もう一度やり直せますか？');
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(':boom: ええと...あなたは勝者の数を提供していません。');
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return message.channel.send(':boom: ああ、あなたは私に有効な賞品をくれなかったようです！');
    }

    client.giveawaysManager.start(giveawayChannel, {
        time: ms(giveawayDuration),
        prize: giveawayPrize,
        winnerCount: giveawayNumberWinners,
        hostedBy: client.config.hostedBy ? message.author : null,
        messages: {
            giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "")+":tada: **GIVEAWAY** :tada:",
            giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "")+":tada: **GIVEAWAY** :tada:",
            timeRemaining: "残り時間: **{duration}**!",
            inviteToParticipate: "Giveaways 🎉 参加する！",
            winMessage: "おめでとう, {winners}さん あなたは勝ちました **{prize}**で",
            embedFooter: "Giveaways",
            noWinner: "勝者を決めるのに十分な参加者がいません！",
            hostedBy: "{user} :が主催する",
            winners: "winner(s)",
            endedAt: "GiveawayBot",
            units: {
                seconds: "秒",
                minutes: "分",
                hours: "時間",
                days: "日々",
                pluralS: false
            }
        }
    });

    message.channel.send(`:tada: 完了しました。 \`${giveawayPrize}\` で始まります ${giveawayChannel}!`);

};
