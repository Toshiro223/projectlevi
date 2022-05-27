import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "support",
      aliases: ["support"],
      description: "Gets the support group links",
      category: "general",
      usage: `${client.config.prefix}Support`,
      baseXp: 10,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    await this.client.sendMessage(
      M.sender.jid,
      ` 🍁 _*Well.........*\n\n
        _*𝕜𝕒𝕜𝕒𝕤𝕙𝕚 𝕓𝕠𝕥𝕫. 𝕚𝕟𝕔*_:  https://chat.whatsapp.com/FXHwkMIynWD9KB8alQfsUI\n\n 
        _*ℂ𝕒𝕤𝕚𝕟𝕠 𝕘𝕣𝕠𝕦𝕡*_ https://chat.whatsapp.com/GCaeoSYTnxw3nd1GVz6Chu\n\n
        
`,

      MessageType.text
    );

    return void M.reply("🍁𝕊𝕖𝕟𝕥 𝕐𝕠𝕦 𝕋𝕙𝕖 𝔾𝕣𝕠𝕦𝕡 𝕃𝕚𝕟𝕜 𝕀𝕟 𝕐𝕠𝕦𝕣 𝔻𝕞 𝔻𝕒𝕣𝕝𝕚𝕟𝕘 ℂ𝕙𝕖𝕔𝕜 𝕀𝕥🍁");
  };
}
