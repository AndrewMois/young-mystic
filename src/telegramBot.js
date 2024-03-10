import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '$env/static/private';
import { Telegraf } from 'telegraf';

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

export const sendTelegramMessage = async (msg) => {
	console.log('Sending Telegram message:', msg);//TODO: remove
	await bot.telegram.sendMessage(TELEGRAM_CHAT_ID, msg);
};
