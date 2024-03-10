import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '$env/static/private';
import { Markup, Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

let bot = new Telegraf(TELEGRAM_BOT_TOKEN);

function getBot() {
	if (bot === null) {
		return new Telegraf(TELEGRAM_BOT_TOKEN);
	}
	return bot;
}


export const sendTelegramMessage = async (msg) => {
	try {
		await bot.telegram.sendMessage(
			TELEGRAM_CHAT_ID,
			msg,
			Markup.inlineKeyboard([
				Markup.button.callback('✅ Approve', 'approve'),
				Markup.button.callback('❌ Dismiss', 'dismiss'),
			]),
		);
	} catch (error) {
		console.error('Error sending message to Telegram:', error);
	}
};

bot.on('callback_query', async (ctx) => {
	try {
		const action = ctx.callbackQuery.data; // 'approve' or 'dismiss'
		console.log('we are here');//todo remove
		if (action === 'approve') {
			await bot.telegram.sendMessage(TELEGRAM_CHAT_ID, 'Approved');
			// Handle approve action
			// Send appropriate database request
		} else if (action === 'dismiss') {
			await bot.telegram.sendMessage(TELEGRAM_CHAT_ID, 'Dismissed');
			// Handle dismiss action
			// Send appropriate database request
		}

		// Always respond to callback queries to remove the loading spinner in Telegram
		await ctx.answerCbQuery();
	} catch (error) {
		console.error('Telegram bot: error handling callback_query: ', error);
	}

});

bot.on(message('text'), async (ctx) => {
	// Explicit usage
	await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);

	// Using context shortcut
	await ctx.reply(`Hello ${ctx.state.role}`);
});

// Start the bot
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));