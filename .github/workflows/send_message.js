import { Client } from 'discord.js';

const client = new Client();

client.on('message', (message) => {
  if (message.content === '!merge') {
    const channel = client.channels.get('1121437498833387580');
    message.channel.send('Merging branch into main...');
    // Your code to merge the branch into main goes here.
    message.channel.send('Branch merged successfully!');
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);