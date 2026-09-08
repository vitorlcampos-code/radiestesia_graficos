import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { titulo, valor, email, nome, pedidoId, parcelas = 6 } = req.body;

    const preference = new Preference(client);
    const siteUrl = process.env.SITE_URL || 'https://radiestesia-graficos.vercel.app';

    const body = {
      items: [
        {
          id: String(pedidoId || 'GS-89421'),
          title: titulo || 'Placa Radiestésica Sagrada',
          quantity: 1,
          unit_price: Number(valor || 68.00),
          currency_id: 'BRL'
        }
      ],
      payer: {
        email: email || 'cliente@geometriasagrada.com.br',
        name: nome || 'Cliente Geometria Sagrada'
      },
      payment_methods: {
        installments: Number(parcelas)
      },
      back_urls: {
        success: `${siteUrl}/pagamento.html?status=approved&pedidoId=${pedidoId || 'GS-89421'}`,
        failure: `${siteUrl}/pagamento.html?status=failure&pedidoId=${pedidoId || 'GS-89421'}`,
        pending: `${siteUrl}/pagamento.html?status=pending&pedidoId=${pedidoId || 'GS-89421'}`
      },
      auto_return: 'approved',
      notification_url: `${siteUrl}/api/webhook`
    };

    const resposta = await preference.create({ body });

    return res.status(200).json({
      id: resposta.id,
      init_point: resposta.init_point,
      sandbox_init_point: resposta.sandbox_init_point
    });
  } catch (error) {
    console.error('Erro ao gerar preferência MP:', error);
    return res.status(500).json({ error: error.message });
  }
}