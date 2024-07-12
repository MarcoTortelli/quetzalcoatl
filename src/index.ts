import * as path from 'node:path';
import * as fs from 'node:fs';
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
	if (!interaction.isCommand()) return;
	const { commandName } = interaction;
	if (commands[commandName as keyof typeof commands]) {
		commands[commandName as keyof typeof commands].data;
	}
});

client.login(config.DISCORD_TOKEN);
