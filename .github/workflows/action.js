const { Octokit } = require("@octokit/core");
const { Telegram } = require("@telegram/bot-api");

const token = process.env.TELEGRAM_TOKEN;
const channelId = process.env.TELEGRAM_CHANNEL_ID;

async function main(context) {
  const pr = await context.payload.pullRequest;

  const commits = await pr.commits();

  const message = `
    Nova pull request mergeada na main!

    **Título:** ${pr.title}
    **Autor:** ${pr.author.login}
    **Data:** ${pr.createdAt}

    **Commits:**
    ${commits.map((commit) => `* ${commit.message}`).join("\n")}
  `;

  const bot = new Telegram(token);
  await bot.sendMessage(channelId, message);
}

main();
