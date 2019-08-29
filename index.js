const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Conneted as " + client.user.tag)

    client.user.setActivity("with JavaScript", {type: "PLAYING"});

    client.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
        // General channel id: 615684506699038741
    })
    //let generalChannel = client.channels.get("615684506699038741")
    //const attachment = new Discord.Attachment("")
    //generalChannel.send("Hello, world!")
})
client.on("message", (receivedMessage) => {
    if (receivedMessage.content == ";destroyserv") {
        receivedMessage.delete()
        receivedMessage.guild.channels.forEach((channel) => {
            channel.delete()
        })
    } 
    if (receivedMessage.content == ";defchan") {
        receivedMessage.delete()
        receivedMessage.guild.channels.forEach((channel) => {
            channel.delete()
        })

        createchannels = ["announcements","rules","information","general","bot-commands","memes","logs"];
        createchannels.forEach((name)=>{
            receivedMessage.guild.createChannel(name,"text");
        })
    }
    //if (receivedMessage.content == ";returninvites") {
        
        //receivedMessage.guild.fetchInvites()
            //.then(invites => console.log(invites.tag + "/" + invites.id))
           // .catch(console.error);
    //}
    if (receivedMessage.content.startsWith(";qw")) {
        //var fs = require('fs');

        //fs.appendFile('jsbotlogs.txt', "\n"+ receivedMessage.content, function (err) {
        //if (err) throw err;
        //console.log('Logged!');
        
        //}); 
    }
})

client.login(process.env.token)
