import {
	Client,
	Events,
	GatewayIntentBits,
	type Interaction,
} from 'discord.js';
import { deployCommands } from './deploy-commands';
import { commands } from './commands';
import { config } from './config';
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.DirectMessages,
	],
});

client.once(Events.ClientReady, (readyClient) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.GuildCreate, async (guild) => {
	await deployCommands({ guildId: guild.id });
});

client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	const { commandName } = interaction;
	// if (interaction.commandName === 'ping') {
	// 	await interaction.reply('Pong!');
	// }
	if (commands[commandName as keyof typeof commands]) {
		commands[commandName as keyof typeof commands].execute(interaction);
	}
});

client.login(config.DISCORD_TOKEN);
