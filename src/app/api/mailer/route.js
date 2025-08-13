import nodemailer from "nodemailer";

export async function POST(request) {
  const { firstName, lastName, email, mobile, service, message } = await request.json();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `"طلب جديد من ${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
      to: process.env.TARGET_EMAIL,
      subject: "طلب جديد إلي Power X",
      text: `
        الأسم الكامل: ${firstName} ${lastName}
        البريد الإلكتروني: ${email}
        رقم الهاتف: ${mobile}
        نوع الخدمة: ${service}
        تفاصيل الطلب:
        ${message}
      `
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500
    });
  }
}