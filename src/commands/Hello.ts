import { Command, CommandMessage } from "@typeit/discord";

export abstract class Hello {
  @Command("hola")
  async hello(command: CommandMessage) {
    console.log("Running hello command");
    command.reply("hola!");
  }
}
