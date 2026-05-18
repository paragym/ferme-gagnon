import express from 'express';
import cors from 'cors';

const app = express();
const port = Number(process.env.PORT || 8080);
const allowedOrigin = process.env.FRONTEND_ORIGIN || '*';

app.use(
  cors({
    origin: allowedOrigin === '*' ? '*' : allowedOrigin,
  }),
);

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'backend',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api', (_req, res) => {
  res.json({
    message: 'Quebec Canine Cuisine API is running.',
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend listening on port ${port}`);
});
