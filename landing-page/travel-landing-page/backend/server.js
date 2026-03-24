import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// The recipient is always you
const MY_EMAIL = process.env.EMAIL_USER;

app.post("/send-email", async (req, res) => {
  const { user_name, user_email, message } = req.body;

  if (!user_name || !user_email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // <--- allow self-signed certificates
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${MY_EMAIL}>`, // sender is you
      replyTo: user_email, // replies go to user
      to: MY_EMAIL, // you always receive it
      subject: `New message from ${user_name}`,
      html: `
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = 5001;
app.listen(PORT, () =>
  console.log(`Backend running at http://localhost:${PORT}`),
);
