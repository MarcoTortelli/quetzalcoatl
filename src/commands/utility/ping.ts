import { type CommandInteraction, SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
	.setName('oscircuitosdeconsagracao')
	.setDescription('Replies with Pong!');

export async function execute(interaction: CommandInteraction) {
	return interaction.reply('Pong!');
}
