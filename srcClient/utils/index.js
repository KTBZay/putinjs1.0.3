const { cfx } = require("../../../cfx")
const { PutinWizard } = require("../main")
const { BDS } = require("./BotDataStarter/BDS")
const { BDU } = require("./BotDataUploader/BDU")
const { MusicCommands } = require("./MusicCMD/m")
function SetupBot(token,prefix,id){
    this.token = token,
    this.prefix = prefix,
    this.id = id
     
    if(cfx.BotSettings.IsSqlEnabled === true){
        BDS.StartSqlConnection();
    }
}

module.exports = {
    PutinSQLWizard: {
        StartConn: BDS,
        UploadContent: BDU,
        SetUp: SetupBot,
        Status: BDS.ping,
        SqlUploadCmd: BDU.UploadSquense,
        MusicBotConfig: MusicCommands
    }
}


