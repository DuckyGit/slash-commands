const { SlashCommand, CommandOptionType } = require('slash-create'); // Requiring slash-create and stuff to make this work.

module.exports = class HelloCommand extends SlashCommand { // Creates the slash command. Duh...
  constructor(creator) {
    super(creator, {
      name: 'howdy', // The name of the command (ex /howdy)
      description: 'Says Howdy Back! 🤠🤠🤠🤠', // The Description of the Slash Command.
    });

    // Not required but very useful in some ways.
    this.filePath = __filename;
  }

  async run(ctx) {
    return `Howdy, ${ctx.member.displayName}!`; // Returns Howdy, Username!
  }
}
