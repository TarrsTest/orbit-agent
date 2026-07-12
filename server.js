const express = require('express');
const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT) || 4000;

app.get('/health', (_req, res) => res.json({ ok: true, service: 'orbit-agent' }));

// The "agent" work — internal-only; the backend + scheduler call this.
app.post('/run', (req, res) => {
  const input = req.body && req.body.input != null ? req.body.input : 'nothing';
  res.json({
    service: 'orbit-agent',
    result: `processed: ${input}`,
    at: new Date().toISOString(),
  });
});

app.listen(PORT, () => console.log(`orbit-agent listening on :${PORT}`));
