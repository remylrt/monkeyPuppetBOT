const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message', (message) => {
    if (message.content === '!monkeypuppet'){
        message.reply('https://tenor.com/view/looking-for-resources-to-upload-monkey-puppet-puppet-akward-gif-18662308')
    }
})

bot.login(process.env.BOT_TOKEN)

