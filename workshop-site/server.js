const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static('public'));

// API endpoint that returns server info
// Students can see this is dynamic — proving the container is actually running
app.get('/api/info', (req, res) => {
  res.json({
    hostname: os.hostname(),
    platform: os.platform(),
    uptime_seconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    student_name: process.env.STUDENT_NAME || 'Workshop Student',
    deployed_at: process.env.DEPLOYED_AT || 'just now'
  });
});

// Health check endpoint (good practice for production containers)
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Workshop site running on port ${PORT}`);
  console.log(`🐳 Hostname: ${os.hostname()}`);
});
