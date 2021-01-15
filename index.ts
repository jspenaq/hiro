const config = require("./settings.json");
// Use the Client that are provided by @typeit/discord NOT discord.js
import { Client } from "@typeit/discord";

async function start() {
  const client = new Client({
    classes: [
      `${__dirname}/src/*Discord.ts`, // glob string to load the classes
      `${__dirname}/src/*Discord.js`, // If you compile using "tsc" the file extension change to .js
    ],
    silent: false,
    variablesChar: ":",
  });

  await client.login(config.discord_token);

  console.log("Running Bot...");
  console.log(Client.getCommands());
}

start();
