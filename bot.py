import os
import random
import logging
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, ContextTypes, filters

logging.basicConfig(level=logging.INFO)

BOT_TOKEN = os.getenv("BOT_TOKEN")
WEBSITE = os.getenv("WEBSITE", "https://joinrot.xyz")
BUY_LINK = os.getenv("BUY_LINK", WEBSITE)
CONTRACT = os.getenv("CONTRACT", "6cod81CaFnZs91KUL6VgysbZfLzHdYmfUMBXbtLwCX8Z")

RESPONSES = {
    "dev": ["⚠ DEV STATUS: CLASSIFIED."],
    "scam": ["SCAM ANALYSIS COMPLETE: vibes unstable, systems operational."],
    "wen": ["TIME IS A SOCIAL CONSTRUCT. INFECTION CONTINUES."],
    "brainrot": ["COGNITIVE DECAY DETECTED. NO CURE."]
}

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "⚠️ $ROT SYSTEM ONLINE\n\n"
        "Welcome to the official terminal.\n"
        "Type /help to access protocols."
    )

async def help_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "/contract - contract address\n"
        "/buy - buy link\n"
        "/website - website\n"
        "/dev - dev status\n"
        "/brainscan - scan user\n"
        "/status - system health\n"
        "/raid - raid protocol"
    )

async def contract(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(f"CA:\n{CONTRACT}")

async def buy(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(f"BUY $ROT:\n{BUY_LINK}")

async def website(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(f"PORTAL:\n{WEBSITE}")

async def dev(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("DEV STATUS: CLASSIFIED.")

async def brainscan(update: Update, context: ContextTypes.DEFAULT_TYPE):
    results = [
        "Attention span: 2.3 sec\nDiagnosis: terminally online.",
        "Brain cells remaining: 14\nPrognosis: unstable.",
        "Meme exposure: CRITICAL\nCognitive decay accelerating."
    ]
    await update.message.reply_text(random.choice(results))

async def status(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("☣️ SYSTEM STATUS: OPERATIONAL")

async def raid(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "⚠ RAID PROTOCOL ENABLED\nDeploy memes.\nSpread infection.\nEngage X."
    )

async def chatter(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not update.message or not update.message.text:
        return

    text = update.message.text.lower()

    for key, replies in RESPONSES.items():
        if key in text and random.random() < 0.65:
            await update.message.reply_text(random.choice(replies))
            return

def main():
    if not BOT_TOKEN:
        raise ValueError("BOT_TOKEN missing")

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

    print("ROT SYSTEM ONLINE ☣️")
    app.run_polling()

if __name__ == "__main__":
    main()
