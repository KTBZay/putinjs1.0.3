const mysql = require('mysql')
const { cfx } = require('../../../../cfx')
const BDU = {}
BDU.UpLoadData = (data) => {
    let SQL = mysql.createConnection({
        host: cfx.MySQLSettings.Host,
        user: cfx.MySQLSettings.User,
        password: cfx.MySQLSettings.pwd,
        database: cfx.MySQLSettings.database
    })
    SQL.connect(function (err) {
        console.log(err)
    })
    try {
    SQL.query(data, (err)=>{
        console.log(err)
        })
    } catch (error) {
        console.log('[PutinJS-SQL]: Sql is throwing errors, we have patched them up and will let the bot run')
    }
}
BDU.UploadSquense = async (bot,Discord)=>{
    bot.on('message', (msg)=>{
        if(msg.content.startsWith(`${cfx.BotSettings.prefix}Sqlupload`)){
           const Msg = msg.content.slice(10).trim()
           const PingEmbed = new Discord.MessageEmbed()
           .setColor('GREEN')
           .setTitle('ZaySideKick SQL-Upload Cmd')
           .setDescription(`Command used by ${msg.author.username} \n Message Uploaded: ${Msg}`)
           msg.reply({embeds: [PingEmbed]})
            try {
                var GUILD_SAVED_MSG = `CREATE TABLE  GuildMessage(msg VARCHAR (225))`;
                BDU.UpLoadData(GUILD_SAVED_MSG)
            } catch (error) {
                console.log('Noticed Putin.GuildMessagesSQL')
            }
           setTimeout(() => {
            var GUILDMSG = `INSERT INTO  GuildMessage(msg) VALUES ('${Msg}')`;
            BDU.UpLoadData(GUILDMSG)
           }, 1000);
        }else if(msg.content === `${cfx.BotSettings.prefix}Sp`){
            ErrorEmbed(msg)
        }
    })
}

module.exports = {
    BDU
}