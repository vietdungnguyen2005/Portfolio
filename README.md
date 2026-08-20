# Viet Dung Nguyen — Backend Engineer Portfolio

This portfolio presents three backend engineering case studies built with Java 21, Spring Boot, PostgreSQL, and Redis. The interface is a statically exported Next.js site; the engineering focus is transaction correctness, legacy modernization, and failure containment.

## Case studies

- **V-Core:** concurrency control, idempotency, tenant authorization, and transactional audit/outbox records.
- **V-Market:** transactional checkout plus restartable CP932 legacy-data ingestion, quarantine, and reconciliation.
- **V-Pulse:** bounded downstream calls, circuit breaking, parking, atomic replay, and recovery of uncertain payment work.

Each project card links to the live product, source repository, and executable evidence.

## Local verification

```bash
npm ci
npm run verify
```

`verify` runs ESLint, TypeScript, Vitest, and the production static export. GitHub Actions also rejects high-severity dependency advisories.

## Deployment

Cloudflare Pages serves the generated `out` directory. The portfolio itself does not require runtime environment variables or server-side credentials.
