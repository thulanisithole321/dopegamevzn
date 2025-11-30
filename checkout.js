
const stripe = Stripe('pk_test_replace_with_your_key');
document.getElementById('checkout').addEventListener('click', () => {
  fetch('/create-checkout-session', {method:'POST'})
    .then(r => r.json())
    .then(session => stripe.redirectToCheckout({ sessionId: session.id }));
});
