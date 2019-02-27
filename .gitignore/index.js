const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const token ="NTUwMzg4MDUyNzI0Mjg1NDQw.D1hsXQ.x9-MsI_1YJ-BcvVoVSuWa2sUodg"
const prefix = "!";
const express= require("express");
const app = express();

client.on("ready", () =>{
    console.log("Le bot vient de se connecter au serveur");
    let status = 'Son créateur Neoblacks#3084';
    client.user.setActivity(status, {type: "WATCHING"})
});


client.on("message", async (message) => {
    if (message.author.id === "550388052724285440") {
    return
    }
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")){
      return
    }
      if (message.author.bot) return;
      if (!message.content.startsWith(prefix)) return;
  
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
  
      let args = message.content.split(" ").slice(1);
  
      if (command === "ping") {
          message.channel.send(`Pong! J'ai ${Date.now() - message.createdTimestamp} ms`);
      } else
  
      if (command === "say") {
          message.delete()
      message.channel.send("@everyone")
          const embed = new Discord.RichEmbed()
          .setColor(0xFF1313)
          .setDescription(args.join(" "));
          message.channel.send({embed})
      }
    });


client.login(token);
