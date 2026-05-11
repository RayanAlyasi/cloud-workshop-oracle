import os
import random
from flask import Flask, jsonify

app = Flask(__name__)

JOKES = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do Python programmers wear glasses? Because they can't C.",
    "How many programmers does it take to change a light bulb? None. That's a hardware problem.",
    "Why did the developer go broke? Because they used up all their cache.",
    "A SQL query walks into a bar, walks up to two tables, and asks: 'Can I join you?'",
    "There are 10 kinds of people in the world: those who understand binary and those who don't.",
    "Why do Java developers wear glasses? Because they don't C#.",
    "Why was the function sad after a breakup? Because it didn't get called back.",
    "What's a programmer's favorite hangout? The Foo Bar.",
    "Why did the programmer quit their job? Because they didn't get arrays.",
]

@app.route("/")
def home():
    return jsonify({
        "message": "Joke API is running.",
        "endpoints": {
            "/joke": "Get a random joke",
            "/health": "Health check",
        },
    })

@app.route("/joke")
def joke():
    return jsonify({"joke": random.choice(JOKES)})

@app.route("/health")
def health():
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)
