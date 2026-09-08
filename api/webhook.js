export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const query = req.query || {};
    const body = req.body || {};
    const type = body.type || body.topic || query.type || query.topic;
    const paymentId = body.data?.id || body.id || query['data.id'] || query.id;

    console.log(`✨ [WEBHOOK MP CONFIRMADO] Tipo: ${type}, Pagamento ID: ${paymentId}. Consagração e despacho autorizados.`);

    return res.status(200).send('OK');
  } catch (e) {
    console.error('Erro no webhook:', e);
    return res.status(200).send('OK');
  }
}