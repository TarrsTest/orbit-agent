# orbit-agent

Internal service for the **orbit** demo project. NOT public — reached only by
`orbit-backend` and `orbit-scheduler` over the project's internal network
(exercises Tarrs host's internal NLB + SG edges).

- `GET /health` — liveness.
- `POST /run` — `{ "input": "..." }` → `{ "result": "processed: ..." }`.

Listens on `PORT` (default 9090).
