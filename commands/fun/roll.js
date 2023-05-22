const { SlashCommandBuilder } = require('discord.js');
const { random } = Math;

function getRandomInt(max) {
  min = 1
  max = Math.floor(max);
  return Math.floor(random() * (max - min + 1)) + min;
}


module.exports = {
  data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('rolls dice for user'),
  async execute(interaction) {
    const regex = /^roll (\d+)d(\d+)$/;
    let reply = "";
    const match = (interaction.content).match(regex);
    if (match) {
      const rolls = parseInt(match[1]);
      const sides = parseInt(match[2]);

      for (let i = 0; i < rolls; i++) {
        let curr_roll = getRandomInt(sides);
        reply = reply + " " + curr_roll;
      }
    }
    else {
      reply = "please format roll command as roll (number of dice)d(sides of dice)"
    }

    return interaction.reply(reply);
  },
};