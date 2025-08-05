import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "olubijohn4live@gmail.com",
    subject: "New Newsletter Subscription",
    text: `${email} just subscribed to your newsletter`,
    html: `<p><strong>${email}</strong> just subscribed to your newsletter</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Subscription successful!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error processing subscription" });
  }
}
