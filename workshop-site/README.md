# From Zero to Cloud — Workshop Website

A simple Node.js + Express website built for the **Oracle Student Club** workshop.

This is the website you'll containerize and deploy during the 2-day workshop.

---

## What's in this repo

```
workshop-site/
├── server.js               # Express server (the backend)
├── package.json            # Node.js dependencies
├── public/                 # Static files (HTML, CSS, JS, logo)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── logo.png
├── Dockerfile              # Complete Dockerfile (reference)
├── Dockerfile.starter      # Fill-in-the-blanks version (Day 1)
└── .dockerignore
```

---

## How it works

The site shows a "From Zero to Cloud" page with:

- 🟠 The Oracle Student Club logo
- 📊 Live container info (hostname, uptime)
- 🎉 A "deployed by [your name]" section you can personalize

The frontend fetches `/api/info` to display real-time server data — proof that the container is actually running.

---

## Running locally (without Docker)

```bash
npm install
npm start
```

Open http://localhost:3000

---

## Running in a container (Day 1)

```bash
# Build the image
docker build -t my-website .

# Run it
docker run -d -p 80:3000 my-website

# Open http://localhost (or your VM's IP) in a browser
```

---

## Deploying to Google Cloud (Day 2)

```bash
# Tag for GCP Artifact Registry
docker tag my-website us-central1-docker.pkg.dev/PROJECT_ID/workshop-repo/student-${STUDENT_ID}-app

# Push to Artifact Registry
docker push us-central1-docker.pkg.dev/PROJECT_ID/workshop-repo/student-${STUDENT_ID}-app

# Deploy to Cloud Run
gcloud run deploy student-${STUDENT_ID}-app \
  --image us-central1-docker.pkg.dev/PROJECT_ID/workshop-repo/student-${STUDENT_ID}-app \
  --region us-central1 \
  --allow-unauthenticated
```

---

## Personalizing your site

**Option A — Edit the HTML directly:**

Open `public/index.html` and find this line:

```html
<span id="student-name" class="highlight">a workshop student</span>
```

Change `a workshop student` to your name, then rebuild your container.

**Option B — Pass it as an environment variable:**

```bash
docker run -d -p 80:3000 -e STUDENT_NAME="Your Name" my-website
```

---

## Workshop info

**Workshop:** From Zero to Cloud
**Hosted by:** Oracle Student Club
**Date:** May 11–12, 2026
**Venue:** Cocoon Tree

Built with ❤️ at the Oracle Student Club.
