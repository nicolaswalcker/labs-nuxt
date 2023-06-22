import { Client, Message, Embed } from 'discord.js';

const client = new Client();
const token = process.env.DISCORD_BOT_TOKEN;
const channelId = '1121074391783063643';

client.on('ready', () => {
    console.log('ready');

    const channel = client.channels.get(channelId);

    const message = new Message({
      embeds: [
        new Embed({
          title: 'A PR has been merged!',
          description: `
          PR title: ${github.event.pull_request.title}
          PR author: ${github.event.pull_request.user.login}
          PR branch: ${github.event.pull_request.branch}
          PR target branch: ${github.event.pull_request.base.ref}
          `
        })
      ]
    })

    channel.send(message);
})

client.login(token)