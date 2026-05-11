# Workshop Dockerfile — fill in the blanks!
# Replace each ___ with the correct value as we walk through it together.
#
# 💡 Tip: You can copy this file to "Dockerfile" (no extension) when ready.

# Step 1: What base image should we start from?
# Hint: Our app uses Node.js. We want a small image, so use the alpine version.
FROM ___

# Step 2: Where inside the container should our code live?
# Hint: A common convention is /app
WORKDIR ___

# Step 3: Copy package files first
# Hint: This is a Docker caching trick — package files first, then code
COPY package*.json ./

# Step 4: Install dependencies
# Hint: Which npm command installs everything in package.json?
RUN ___

# Step 5: Copy the rest of the application
# Hint: . means "everything in this directory" — twice
COPY ___ ___

# Step 6: Which port does our app listen on?
# Hint: Look at server.js — it's the PORT variable
EXPOSE ___

# Step 7: How do we start the app?
# Hint: We start it with `node server.js` — but in Docker we use array syntax
CMD [___, ___]
