# CineBite — React + Vite frontend

A frontend-only migration of the CineBite cinema food ordering project. The original customer UI, admin UI, styles, product data and local images are retained while Next.js server routes are replaced with browser-side JavaScript and localStorage.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Routes
- `/` — customer ordering experience
- `/admin` — demo admin dashboard

## Demo admin login
- Password: `admin123`

This is a client-side demonstration only. The password gate is not security; browser storage can be inspected or modified by visitors. Do not use this for real customer data or production payment processing.

## Data and payment behavior
- Products and orders are persisted in the current browser's localStorage.
- Admin product edits appear in the customer menu in the same browser.
- New orders begin with `PENDING` payment status.
- UPI/Card options are UI demonstrations only and do not charge a payment method.
- Only the Pay at Seat option can be marked as received using the admin's manual demo confirmation flow. This is a simulated record, not proof of an actual payment.
- Order fulfilment status transitions are restricted to the existing sequence and require the demo payment status to be marked PAID.
- Different browsers/devices do not share localStorage. There is no server or cross-device synchronization.

## Vercel
Import the repository as a Vite project. Build command: `npm run build`; output directory: `dist`. `vercel.json` rewrites client routes to `index.html`.
