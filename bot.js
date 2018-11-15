const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "499213116941533184"; // ايدي السررفر
var channel = "502827265281884161";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },305);
})

client.on('ready', async() => {
var server = "499213116941533184"; // ايدي السررفر
var channel = "502827265281884161";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Spammer Life ♥ , Welcome to spam ♥ , Welcome to spam ♥ , Welcome to spam ♥ Welcome to spam ♥ , Welcome to spam ♥ , Welcome to spam ♥ , Welcome to spam ♥ , Welcome to spam ♥ ,Welcome to spam ♥ , **')
    },610);
})


client.on('message', msg => {

    if (msg.content == '...join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.channels.get("480938410157277185").join(); ////»Top
    });





client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 client.on('ready', () => {
  client.user.setGame(`Hello ♥♥♥  `,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log('Desert Bot Is Online')
  console.log('---------------')
});
client.login(process.env.BOT_TOKEN);
