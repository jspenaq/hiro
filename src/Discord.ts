import * as Path from "path";
import {
  ArgsOf,
  Client, 
  Discord,
  On,
  Once,
  CommandMessage,
  Command,
  Description,
  Infos,
  CommandNotFound
} from "@typeit/discord";

import { Hello } from "./commands/Hello";

interface HelloArgs {
  slug: string;
  number: number;
}

@Discord("#", {
  import: [
    // Path.join(__dirname,  "commands", "*.ts"),
    Path.join(__dirname, ".", "commands", "*.ts"),
    // Hello
    // Path.join(__dirname,  "events", "*.ts")
    // You can also specify the class directly here if you don't want to use a glob
  ]
})

export class DiscordApp {
  // @On("message")
  // onMessage(
  //   [message]: ArgsOf<"message">,
  //   client: Client
  // ) {
  //   console.log(message);
  // }

  @CommandNotFound()
  notFoundA(command: CommandMessage) {
    command.reply("Command not found");
  }
}


// @Description("My super app")
// @Infos({ hello: "world" })
// export abstract class AppDiscord {
//   @Command("hello :slug :number")
//   hello(command: CommandMessage<HelloArgs>) {
//     const { slug, number } = command.args;
//     console.log(slug, number);
//   }
// }
