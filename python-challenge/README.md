# Challenge: Containerize the Joke API

You learned how to containerize the workshop site (Node.js) and deploy it to Cloud Run.

**Now do it again from scratch — with a Python app.**

---

## The app

A Flask API that returns random programming jokes.

```
app.py            ← the Python application
requirements.txt  ← the Python dependencies
```

The app:
- Listens on the port from environment variable `PORT` (default 8080)
- Has 3 endpoints: `/`, `/joke`, `/health`

---

## Your mission

1. Write a `Dockerfile` for this Python app
2. Build the image
3. Push it to Artifact Registry
4. Deploy it to Cloud Run
5. Visit the URL — see your joke API live on the internet

When `/joke` returns a joke in your browser, you're done.

---

## Hints (if stuck)

### Hint 1: Pick a base image
Python apps need a Python base image. Look at Docker Hub for `python:3.11-slim` or similar.

### Hint 2: Install dependencies
You need to:
- Copy `requirements.txt` into the image
- Run `pip install -r requirements.txt`

### Hint 3: The app's entry point
The Python file is `app.py`. To run it: `python app.py`

### Hint 4: The port
Flask runs on port 8080 by default (or whatever `PORT` env var says). Your Dockerfile should `EXPOSE 8080`. Cloud Run deploy should use `--port 8080`.

### Hint 5: Same commands as the workshop site
- `docker build -t joke-api .`
- `docker tag joke-api $REGISTRY/student-${STUDENT_ID}-joke-api:v1`
- `docker push $REGISTRY/student-${STUDENT_ID}-joke-api:v1`
- `gcloud run deploy student-${STUDENT_ID}-joke-api --project=$PROJECT_ID --image $REGISTRY/student-${STUDENT_ID}-joke-api:v1 --region $REGION --allow-unauthenticated --port 8080`

---

## When you're done

Hold up your phone with the live URL. The instructor will check it.

Test these in your browser:
- `https://your-url.run.app/` → API info
- `https://your-url.run.app/joke` → a random joke
- `https://your-url.run.app/health` → `{"status": "ok"}`

Good luck. 🚀
