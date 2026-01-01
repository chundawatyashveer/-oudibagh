import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* ------------------ CHECK REQUIRED ENV KEYS ------------------ */
const requiredEnv = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'RECIPIENT_EMAIL'
];

const missingEnv = requiredEnv.filter((key) => !process.env[key]);
if (missingEnv.length) {
  console.error(`❌ Missing .env variables: ${missingEnv.join(', ')}`);
}

/* ------------------ MIDDLEWARE ------------------ */
app.use(helmet());
app.use(
  cors({
    origin: '*', // Allow all origins (fix CORS)
  })
);
app.use(express.json());

/* ------------------ VALIDATION ------------------ */
const allowedExperiences = ['safari', 'candle-light-dinner', 'both'];

const formatDate = (dateString) => {
  const [day, month, year] = dateString.split('-');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${day} ${months[parseInt(month, 10) - 1]}, ${year}`;
};

const validateReservation = (payload) => {
  const errors = {};
  const data = {
    name: payload?.name?.trim(),
    phoneNumber: payload?.phoneNumber?.trim(),
    email: payload?.email?.trim()?.toLowerCase(),
    numberOfPersons: payload?.numberOfPersons,
    reservationDate: payload?.reservationDate?.trim(),
    reservationTime: payload?.reservationTime?.trim(),
    experience: payload?.experience?.trim(),
    message: payload?.message?.trim(),
  };

  if (!data.name || data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!data.phoneNumber || !phoneRegex.test(data.phoneNumber)) {
    errors.phoneNumber = 'Phone number must be 10 digits';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'A valid email is required';
  }

  const persons = Number(data.numberOfPersons);
  if (!Number.isInteger(persons) || persons < 1 || persons > 20) {
    errors.numberOfPersons = 'Persons must be between 1 and 20';
  } else data.numberOfPersons = persons;

  const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
  if (!data.reservationDate || !dateRegex.test(data.reservationDate)) {
    errors.reservationDate = 'Date must be in DD-MM-YYYY';
  }

  if (!data.reservationTime) {
    errors.reservationTime = 'Reservation time is required';
  }

  if (!data.experience || !allowedExperiences.includes(data.experience)) {
    errors.experience = 'Experience must be a valid option';
  }

  if (!data.message || data.message.length < 5) {
    errors.message = 'Message must be at least 5 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    data,
  };
};

const validateContact = (payload) => {
  const errors = {};
  const data = {
    name: payload?.name?.trim(),
    email: payload?.email?.trim()?.toLowerCase(),
    phone: payload?.phone?.trim(),
    message: payload?.message?.trim(),
  };

  if (!data.name || data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'A valid email is required';
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!data.phone || !phoneRegex.test(data.phone)) {
    errors.phone = 'Phone number must be 10 digits';
  }

  if (!data.message || data.message.length < 5) {
    errors.message = 'Message must be at least 5 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    data,
  };
};

/* ------------------ NODEMAILER SETUP ------------------ */
// Validate SMTP configuration
if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
  console.error('❌ SMTP configuration incomplete. Please check your .env file.');
  console.error('   Required: SMTP_HOST, SMTP_USER, SMTP_PASS, RECIPIENT_EMAIL');
}

const smtpPort = Number(process.env.SMTP_PORT) || 587;
const isSecurePort = smtpPort === 465;

// Log configuration (without exposing password)
console.log('📧 SMTP Configuration:');
console.log(`   Host: ${process.env.SMTP_HOST}`);
console.log(`   Port: ${smtpPort} (secure: ${isSecurePort})`);
console.log(`   User: ${process.env.SMTP_USER}`);
console.log(`   Password: ${process.env.SMTP_PASS ? '***' + process.env.SMTP_PASS.slice(-2) : 'NOT SET'}`);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: isSecurePort, // true for 465, false for other ports
  requireTLS: !isSecurePort, // Use STARTTLS for port 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // Gmail App Password required
  },
  connectionTimeout: 15000, // 15 seconds
  socketTimeout: 15000, // 15 seconds
  greetingTimeout: 10000, // 10 seconds
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates if needed
  },
  debug: false, // Set to true for detailed debugging
  logger: false,
});

/* Verify transporter works (non-blocking) */
transporter.verify((error, success) => {
  if (error) {
    console.error('\n❌ SMTP Verification Error:', error.message);
    console.error('   Code:', error.code);
    if (error.code === 'EAUTH') {
      console.error('\n⚠️  AUTHENTICATION FAILED!');
      console.error('   Gmail requires an App Password, not your regular password.');
      console.error('\n   📝 Steps to fix:');
      console.error('   1. Enable 2-Step Verification on your Google Account');
      console.error('      → https://myaccount.google.com/security');
      console.error('   2. Generate an App Password');
      console.error('      → https://myaccount.google.com/apppasswords');
      console.error('      → Select "Mail" and your device');
      console.error('   3. Copy the 16-character password (no spaces)');
      console.error('   4. Update SMTP_PASS in your .env file');
      console.error('   5. Restart the server\n');
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      console.error('\n⚠️  CONNECTION FAILED!');
      console.error('   Unable to connect to SMTP server.');
      console.error('   Check your network connection and firewall settings.\n');
    } else {
      console.error('\n   Full error details:', error);
    }
  } else {
    console.log('✔ SMTP Connected and Verified Successfully\n');
  }
});

/* ------------------ ROUTES ------------------ */
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Book A Table API is running',
  });
});

// Test SMTP connection endpoint
app.get('/test-smtp', async (req, res) => {
  try {
    await transporter.verify();
    return res.json({
      success: true,
      message: 'SMTP connection is working!',
      config: {
        host: process.env.SMTP_HOST,
        port: smtpPort,
        user: process.env.SMTP_USER,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'SMTP connection failed',
      error: error.message,
      code: error.code,
      help: error.code === 'EAUTH' 
        ? 'Use Gmail App Password. Get one at: https://myaccount.google.com/apppasswords'
        : 'Check your SMTP configuration in .env file',
    });
  }
});

app.post('/booktable', async (req, res) => {
  console.log("📩 Incoming Reservation:", req.body);

  const { isValid, errors, data } = validateReservation(req.body);

  if (!isValid) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }

  const formattedDate = formatDate(data.reservationDate);

  const htmlBody = `
    <h2>New Table Reservation</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Phone:</strong> ${data.phoneNumber}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Persons:</strong> ${data.numberOfPersons}</p>
    <p><strong>Date:</strong> ${formattedDate}</p>
    <p><strong>Time:</strong> ${data.reservationTime}</p>
    <p><strong>Experience:</strong> ${data.experience}</p>
    <p><strong>Message:</strong><br>${data.message}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Book A Table" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: data.email,
      subject: `New Reservation from ${data.name}`,
      html: htmlBody,
    });

    return res.json({
      success: true,
      message: 'Reservation sent successfully!',
    });
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    
    // Provide helpful error messages for common issues
    let errorMessage = 'Server error while sending email';
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check SMTP credentials.';
      console.error('   → Gmail requires an App Password (not your regular password)');
      console.error('   → Get one at: https://myaccount.google.com/apppasswords');
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Could not connect to email server. Please check network connection.';
    }
    
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
});

app.post('/contact', async (req, res) => {
  const { isValid, errors, data } = validateContact(req.body);

  if (!isValid) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }

  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Message:</strong><br>${data.message}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Oudhi Badh Contact" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: data.email,
      subject: `New Contact Inquiry from ${data.name}`,
      html: htmlBody,
    });

    return res.json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('❌ Failed to send contact email:', error);
    
    // Provide helpful error messages for common issues
    let errorMessage = 'Server error while sending message';
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check SMTP credentials.';
      console.error('   → Gmail requires an App Password (not your regular password)');
      console.error('   → Get one at: https://myaccount.google.com/apppasswords');
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Could not connect to email server. Please check network connection.';
    }
    
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
});

/* ------------------ START SERVER ------------------ */
app.listen(PORT, () => {
  console.log(`🚀 Book A Table API running on port ${PORT}`);
});
