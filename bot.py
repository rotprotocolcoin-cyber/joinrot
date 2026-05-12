import random
import logging
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, MessageHandler, ContextTypes, MessageHandler, filters

logging.basicConfig(level=logging.INFO)

BOT_TOKEN = "8777562082:AAG5jy86KzHsF09kdPyqlrpdKYJtxMHW49A"

WEBSITE = "https://joinrot.xyz"
BUY_LINK = "https://joinrot.xyz"
ANNOUNCEMENTS = "https://t.me/rotterminal"
CONTRACT = "6cod81CaFnZs91KUL6vYgsbZfLzHdYmfUMBXbtLwCX8Z"

RESPONSES = {
    "dev": ["⚠ DEV STATUS: CLASSIFIED."],
    "scam": ["SCAM ANALYSIS COMPLETE: vibes unstable, systems operational."],
    "wen": ["TIME IS A SOCIAL CONSTRUCT. INFECTION CONTINUES."],
    "brainrot": ["COGNITIVE DECAY DETECTED. NO CURE."]
}

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("🌐 WEBSITE", url=WEBSITE)],
        [InlineKeyboardButton("💸 BUY $ROT", url=BUY_LINK)],
        [InlineKeyboardButton("📢 ANNOUNCEMENTS", url=ANNOUNCEMENTS)]
    ]

    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text(
        "⚠ OFFICIAL $ROT TERMINAL\n\n"
        "Access official links, contract intelligence, and system protocols.\n\n"
        "SYSTEM STATUS: OPERATIONAL ☣",
        reply_markup=reply_markup
    )

async def help_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "/contract\n"
        "/buy\n"
        "/website\n"
        "/dev\n"
        "/brainscan\n"
        "/status\n"
        "/raid"
    )

async def contract(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(f"CA:\n{CONTRACT}")

async def buy(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(BUY_LINK)

async def website(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(WEBSITE)

async def dev(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("DEV STATUS: CLASSIFIED.")

async def brainscan(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        random.choice([
            "Attention span: 2.3 sec",
            "Meme exposure: CRITICAL",
            "Brain cells remaining: 14"
        ])
    )

async def status(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("☣ SYSTEM STATUS: OPERATIONAL")

async def raid(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("RAID PROTOCOL ENABLED.")

async def chatter(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not update.message or not update.message.text:
        return

    text = update.message.text.lower()

    for key, replies in RESPONSES.items():
        if key in text and random.random() < 0.65:
            await update.message.reply_text(random.choice(replies))
            return

def main():
    app = Application.builder().token(BOT_TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("help", help_cmd))
    app.add_handler(CommandHandler("contract", contract))
    app.add_handler(CommandHandler("buy", buy))
    app.add_handler(CommandHandler("website", website))
    app.add_handler(CommandHandler("dev", dev))
    app.add_handler(CommandHandler("brainscan", brainscan))
    app.add_handler(CommandHandler("status", status))
    app.add_handler(CommandHandler("raid", raid))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, chatter))

    app.run_polling()

if __name__ == "__main__":
    main()
