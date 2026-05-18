# Ferme Gagnon

Monorepo prepared for GitHub and Railway deployment.

## Apps

- `apps/backend`: Express API service
- `apps/frontend`: Vite React frontend, served as a production static build

## Railway setup

Create two Railway services from this repo.

### Backend service

- Build command: `pnpm --filter @qcc/backend build`
- Start command: `pnpm --filter @qcc/backend start`
- Environment variables:
  - `PORT` is provided by Railway
  - `FRONTEND_ORIGIN` should be the frontend service URL

### Frontend service

- Build command: `pnpm --filter @qcc/frontend build`
- Start command: `pnpm --filter @qcc/frontend start`
- Environment variables:
  - `PORT` is provided by Railway
  - `VITE_API_URL` should be the backend service URL

## Local development

- Backend: `pnpm --filter @qcc/backend dev`
- Frontend: `pnpm --filter @qcc/frontend dev`

## Notes

- The frontend build output is served from `apps/frontend/dist`.
- The backend exposes a health endpoint at `/health`.
