export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { type, data } = req.body;

  if (type === 'payment') {
    const paymentId = data?.id;
    console.log(`✨ [PIX APROVADO] Pagamento ID: ${paymentId}. Placa liberada para consagração.`);
  }

  return res.status(200).send('OK');
}
