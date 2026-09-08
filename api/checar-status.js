import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN
});

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'ID do pagamento não fornecido' });
  }

  try {
    const payment = new Payment(client);
    const resultado = await payment.get({ id });

    return res.status(200).json({
      id: resultado.id,
      status: resultado.status,
      pago: resultado.status === 'approved'
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
