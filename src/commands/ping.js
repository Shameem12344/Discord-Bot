const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription("Replies with Pong");

async function execute(interaction) {
    await interaction.reply('Pong'); //Since it is an asynchronous function we use await
}

module.exports = {
    data,
    execute,
};