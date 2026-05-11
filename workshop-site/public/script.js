// Fetch server info from our API and display it
// This proves the container is actually serving data, not just static HTML

async function loadServerInfo() {
  try {
    const response = await fetch('/api/info');
    const data = await response.json();

    // Update student name if set via env var
    if (data.student_name && data.student_name !== 'Workshop Student') {
      document.getElementById('student-name').textContent = data.student_name;
    }

    // Update hostname (this is the container ID — proves it's running in Docker)
    const hostnameEl = document.getElementById('hostname');
    hostnameEl.textContent = data.hostname.substring(0, 12);

    // Format and display uptime
    updateUptime(data.uptime_seconds);

  } catch (error) {
    console.error('Failed to load server info:', error);
    document.getElementById('hostname').textContent = 'offline';
  }
}

function updateUptime(seconds) {
  const el = document.getElementById('uptime');

  // Update every second so it feels live
  let currentSeconds = seconds;

  const formatUptime = (s) => {
    if (s < 60) return `${s}s`;
    if (s < 3600) return `${Math.floor(s / 60)}m ${s % 60}s`;
    return `${Math.floor(s / 3600)}h ${Math.floor((s % 3600) / 60)}m`;
  };

  el.textContent = formatUptime(currentSeconds);

  setInterval(() => {
    currentSeconds++;
    el.textContent = formatUptime(currentSeconds);
  }, 1000);
}

// Load when page is ready
loadServerInfo();
