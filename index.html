var express = require('express');
var app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.static(__dirname));

const { Client, GatewayIntentBits } = require('discord.js');
const bot = new Client({ _tokenType:'', intents: [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent] });

app.use(cors());

bot.on('ready', () => {
	console.log(`\nLogged in as ${bot.user.tag}`); 
	console.log('Bot is ready')
});

var channel;
var lastmsg;
var token;

app.post('/login', (req, res)=>{
	console.log(req.body)
	try{
		bot.login(req.body.token)
		res.send("1");
	}
	catch{
		req.sendStatus(500);
	}
});

app.post('/getchnl', (req, res)=>{
	try{
		var response = {guilds:[]};
		var  i = 0;
		bot.guilds.cache.forEach(guild => {
			
			response.guilds[i] = [guild.name];
			
			response.guilds[i][1] = [];
			//console.log(guild.channels.values());
			
			//console.log(bot.channels.array())
			guild.channels.cache.forEach(chnl =>{
				if (chnl.isTextBased()){
					response.guilds[i][1].push(chnl.name);
					response.guilds[i][1].push(chnl.id);
				}
			});
			i++
		});
		res.send(JSON.stringify(response));
	}
	catch(err){
		console.error(err);
		res.sendStatus(500);
	}

})
app.post('/getmsg', (req, res)=>{
	channel = bot.channels.cache.get(req.body.channelId);
	var response = {msgs:[]};
	channel.messages.fetch({limit:100})
	.then(msglist=>{
		msglist.forEach(msg=>{
			response.msgs.push(msg.content);
			response.msgs.push(msg.author.username)
		})
		res.send(JSON.stringify(response.msgs));
	});
})

app.post('/send', (req, res)=>{
	console.log("kdjlsdfjds");
	channel.send(req.body.msg)
	.then;
	console.log("kdjlsdfjds");
	res.send("1")
})

app.listen(80, ()=>{console.log("Server started!")})
