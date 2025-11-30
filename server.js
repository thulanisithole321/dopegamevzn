
// Node.js Express server for Stripe Checkout
const express = require('express');
const app = express();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_replace_with_your_key');

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: 'price_replace', quantity: 1 }],
    success_url: 'https://yourdomain.com/success',
    cancel_url: 'https://yourdomain.com/cancel'
  });
  res.json({ id: session.id });
});

app.listen(4242);
