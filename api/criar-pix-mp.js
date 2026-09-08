import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { valor, email, nome, pedidoId } = req.body;

    const payment = new Payment(client);
    const body = {
      transaction_amount: Number(valor || 103.17),
      description: `Placa Radiestésica Personalizada #${pedidoId || 'GS-89421'}`,
      payment_method_id: 'pix',
      payer: {
        email: email || 'cliente@geometriasagrada.com.br',
        first_name: nome ? nome.split(' ')[0] : 'Consagrador',
        last_name: nome ? nome.split(' ').slice(1).join(' ') : 'Radiestesia'
      },
      notification_url: `${process.env.SITE_URL || 'https://seu-site.vercel.app'}/api/webhook`
    };

    const resposta = await payment.create({ body });

    return res.status(200).json({
      id: resposta.id,
      status: resposta.status,
      qr_code_base64: resposta.point_of_interaction.transaction_data.qr_code_base64,
      qr_code: resposta.point_of_interaction.transaction_data.qr_code,
      ticket_url: resposta.point_of_interaction.transaction_data.ticket_url
    });
  } catch (error) {
    console.error('Erro ao gerar PIX MP:', error);
    return res.status(500).json({ error: error.message });
  }
}
