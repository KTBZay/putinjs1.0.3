const PutinWizard = {};
const { cfx } = require('../../cfx');

module.exports = {
    CREATE_BOT: async (name) =>{
    const MakeBot = async function (name){
        if(cfx.BotSettings.IsSlash === 'true'){
            MakeSlashBot()
        }else{
            MakeBot(name)
        }
        const SQL = PutinSQLWizard.SetUp(cfx.BotSettings.token,cfx.BotSettings.prefix)
        const Discord = require('discord.js');
          const Build_Info = {
              DiscordJS: package.dependencies['discord.js'],
              PutinJs: package.version,
              Author: package.author,
              Prefix: cfx.BotSettings.prefix
          }
        const ErrorEmbedSql = function (msg,sql){
            if(sql.error){
                const EEmbed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle('Error')
                .setDescription('there must be an error with sql')
            msg.reply({embeds: [EEmbed]})
            }
        }
        const WarningEmbed = function (msg){
            const WEmbed = new Discord.MessageEmbed()
             .setColor('YELLOW')
             .setTitle('Development feed')
             .setDescription('This command is in development')
            msg.reply({embeds: [WEmbed]})
        }
        const ErrorEmbed = function (msg){
             const EEmbed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle('Error')
                .setDescription('The command you have entered does not exist')
                msg.reply({embeds: [EEmbed]})
        }
        const SqlWarningError = function (msg){
            const SEEmbed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle('Error')
                .setDescription('You must enable Sql to use this command')
            msg.reply({embeds: [SEEmbed]})
    }
        const bot = new Discord.Client({intents: ["GUILDS","GUILD_MESSAGES", "GUILD_MEMBERS"]});
        bot.on('ready', ()=>{
            console.log(cfx.BotSettings.ReadyMSG);
            bot.user.setActivity(cfx.BotSettings.Activity);
        })
        bot.on('message', (msg)=>{
            if(msg.content === `${cfx.BotSettings.prefix}help`){
               const HelpEmbed = new Discord.MessageEmbed()
               .setColor('DARK_GREEN')
               .setTitle(`${name} Help Cmd`)
               .setDescription(`Command used by ${msg.author.username}`)
               .addFields(
                   {name: 'ping', value: 'Returns the ping of the bot'},
                   {name: 'build', value: 'Shows the development details for the bot'},
                   {name: 'SQL', value:'Showes if sql is enabled for this bot.'},
                   {name: 'Say', value: 'Say a message'},
                   {name: 'Sqlupload', value:'Upload data to a sql'},
                   {name: 'Play', value:'Playes a song'},
                   {name: 'SKip', value:'Skips a song'},
                   {name: 'Stop', value: 'Stops a song'}
               )
               msg.reply({embeds: [HelpEmbed]})
            }else if(msg.content === `${cfx.BotSettings.prefix}h`){
                const HelpEmbed = new Discord.MessageEmbed()
               .setColor('DARK_GREEN')
               .setTitle(`${name} Help Cmd`)
               .setDescription(`Command used by ${msg.author.username}`)
               .addFields(
                   {name: 'ping', value: 'Returns the ping of the bot'},
                   {name: 'build', value: 'Shows the development details for the bot'},
                   {name: 'SQL', value:'Showes if sql is enabled for this bot.'},
                   {name: 'Say', value: 'Say a message'},
                   {name: 'Sqlupload', value:'Upload data to a sql'},
                   {name: 'Play', value:'Playes a song'},
                   {name: 'SKip', value:'Skips a song'},
                   {name: 'Stop', value: 'Stops a song'}
               )
               msg.reply({embeds: [HelpEmbed]})
            }
        })
        bot.on('message', (msg)=>{
            if(msg.content === `${cfx.BotSettings.prefix}ping`){
               const PingEmbed = new Discord.MessageEmbed()
               .setColor('GREEN')
               .setTitle(`${name} Ping Cmd`)
               .setDescription(`Command used by ${msg.author.username} \n Clients ping is: ${bot.ws.ping}`)
               msg.reply({embeds: [PingEmbed]})
            }else if(msg.content === `${cfx.BotSettings.prefix}p`){
                ErrorEmbed(msg)
            }
        })
        bot.on('message', (msg)=>{
            if(msg.content === `${cfx.BotSettings.prefix}build`){
               const PingEmbed = new Discord.MessageEmbed()
               .setColor('GREEN')
               .setTitle(`${name} Build Cmd`)
               .setDescription(`Command used by ${msg.author.username} \n Discord-Version: ${Build_Info.DiscordJS} \n PutinJs-Version: ${Build_Info.PutinJs} \n Author: ${Build_Info.Author}`)
               msg.reply({embeds: [PingEmbed]})
            }else if(msg.content === `${cfx.BotSettings.prefix}b`){
                ErrorEmbed(msg)
            }
        })
        bot.on('message', (msg)=>{
            if(msg.content === `${cfx.BotSettings.prefix}SQL`){
               const PingEmbed = new Discord.MessageEmbed()
               .setColor('GREEN')
               .setTitle(`${name} SQL Cmd`)
               .setDescription(`Command used by ${msg.author.username} \n MYSQL-VERSION: ${package.dependencies.mysql} \n isEnabled?: ${cfx.BotSettings.IsSqlEnabled}`)
               msg.reply({embeds: [PingEmbed]})
            }else if(msg.content === `${cfx.BotSettings.prefix}S`){
                ErrorEmbed(msg)
            }
        })
        bot.on('message', (msg)=>{
            if(msg.content === `${cfx.BotSettings.prefix}SQLping`){
               const PingEmbed = new Discord.MessageEmbed()
               .setColor('GREEN')
               .setTitle(`${name} SQL-Ping Cmd`)
               .setDescription(`Command used by ${msg.author.username} \n SQL ping is: ${bot.ws.status}`)
               msg.reply({embeds: [PingEmbed]})
            }else if(msg.content === `${cfx.BotSettings.prefix}Sp`){
                ErrorEmbed(msg)
            }
        })
        bot.on('message', (msg)=>{
            if(msg.content.startsWith(`${cfx.BotSettings.prefix}say`)){
               const Msg = msg.content.slice(4).trim()
               const PingEmbed = new Discord.MessageEmbed()
               .setColor('GREEN')
               .setImage(msg.author.avatarURL)
               .setTitle(` ${name} ZaySideKick Say Cmd`)
               .setDescription(`Command used by ${msg.author.username} \n Said: ${Msg}`)
               msg.reply({embeds: [PingEmbed]})
        PutinSQLWizard.SqlUploadCmd(bot,Discord)
    }});
        MusicCommands(bot,cfx.BotSettings.prefix)
        await bot.login(cfx.BotSettings.token)
    }
    PutinWizard.CREATE_BOT = MakeBot;
    
    const MakeSlashBot = async  () =>{
        const { SlashCreator, GatewayServer } = require('slash-create');
        const {Client, intents} = require('discord.js');
        let bot = new Client({
            intents: [
                'GUILDS', 
                'GUILD_MESSAGES'
            ]
        })
        const creator = new SlashCreator({
            applicationID: cfx.BotSettings.ApplicationID,
            token: cfx.BotSettings.token,
        });
        bot.on('ready', ()=>{
            console.log('Bot is ready')
        })
        creator
        .withServer(
            new GatewayServer(
                (handler) => bot.ws.on('INTERACTION_CREATE', handler)
            )
        )
        .registerCommandsIn(path.join(__dirname,'commands'))
        bot.login(cfx.BotSettings.token)
     }
     PutinWizard.CREATE_SLASH_BOT = MakeSlashBot;
     MakeBot(name)
 }
    
} 