import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ error: 'Faltan campos' }), {
      status: 400,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

   await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `Nueva consulta: ${subject}`,
      html: `
        <div style="background-color: #5680bc; color: white; padding: 30px; font-family: Arial, sans-serif; border-radius: 8px;">
          <h2 style="margin-top: 0;">📩 Nuevo mensaje desde el formulario de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <p><strong>Mensaje:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
          <hr style="border: 1px solid #ffffff33; margin: 30px 0;" />
          <p style="font-size: 0.9em;">Este mensaje fue enviado desde el formulario de contacto de <strong>who! consultora integral</strong>.</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ message: 'Correo enviado correctamente' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar el correo' }), {
      status: 500,
    });
  }
}