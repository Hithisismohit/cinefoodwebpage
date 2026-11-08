# Order & Sales Dashboard Update

- Added persistent server-side order request intake at `POST /api/orders`.
- Orders include Hall Number and Seat Number and are stored in SQLite.
- New admin overview includes paid-only revenue totals, today's sales, order counts, pending payment counts, fulfilment counts, and a seven-day sales chart.
- Added automatic dashboard polling, new-order indicator, and optional alert sound.
- Added ordered fulfilment transitions and restricted fulfilment to paid orders.
- Added authenticated cash/POS payment confirmation for Pay at Seat orders.
- Customer product fetching now reads the persistent admin-managed catalog.
- Customer checkout and order tracker clearly show payment pending when no real gateway verification exists.

## Verification
- TypeScript/TSX syntax transpilation passed for all 37 source files.
- SQLite paid-only revenue accounting test passed.
- Full Next.js production build was not run: dependency installation did not complete in this environment.

## Payment provider still required
Online card/UPI processing cannot be enabled without the merchant account, gateway keys, server-side signature verification and webhook. The application deliberately does not convert client-side payment claims into paid sales.
