# Book A Table Backend

Production-ready Express server for the “Book A Table” reservation form.

## Features

- Node.js + Express API with `/booktable` POST route
- Input validation (name, phone, email, headcount, date, time, experience, message)
- Secure email delivery via Nodemailer + SMTP
- Environment-based configuration
- Helmet + CORS for basic hardening

## Setup

```bash
cd backend
npm install
cp env.example .env    # or copy env.example .env on Windows
```

Update `.env` with your SMTP credentials (Gmail app password recommended) and optional allowed origins.

### Example `.env`

```env
PORT=5000
ALLOWED_ORIGINS=http://localhost:5173

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

RECIPIENT_EMAIL=chundawatyashveer@gmail.com
```

## Running

- Development: `npm run dev`
- Production: `npm start`

The API will be available at `http://localhost:5000` by default.

## Health Check

```
GET /health
```

## Reservation Endpoint

```
POST /booktable
Content-Type: application/json

{
  "name": "Jane Doe",
  "phoneNumber": "+1 555 123 4567",
  "email": "jane@example.com",
  "numberOfPersons": 4,
  "reservationDate": "24-12-2025",
  "reservationTime": "07 : 30 pm",
  "experience": "both",
  "message": "Window seat, please."
}
```

### Responses

- Success: `{ "success": true, "message": "Reservation sent!" }`
- Validation error: `{ "success": false, "message": "Validation failed", "errors": { ... } }`
- Server error: `{ "success": false, "message": "Something went wrong" }`

## Frontend Integration

```js
const payload = {
  name,
  phoneNumber,
  email,
  numberOfPersons,
  reservationDate, // DD-MM-YYYY
  reservationTime,
  experience, // safari | candle-light-dinner | both
  message
};

await fetch('http://localhost:5000/booktable', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
});
```

## Notes

- Use Gmail App Passwords (or similar) for production
- Restrict `ALLOWED_ORIGINS` to your actual domains
- Consider adding rate limiting or CAPTCHA if exposing publicly

