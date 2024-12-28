function handleOrder(event) {
    // Prevent form from submitting the default way
    event.preventDefault();
 
   const name = document.getElementById('name').value.trim();
   const address = document.getElementById('address').value.trim();
   const email = document.getElementById('email').value.trim();
   const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value;
 
   if (name && address && email && paymentMethod) {
       const orderDetails = `
           Thank you, ${name}!
           Your order has been placed successfully.
           Shipping to: ${address}
           Payment Method: ${paymentMethod}
           Confirmation will be sent to: ${email}
       `;
       alert(`order confirmed!\n\n ${orderDetails}`);
 
       // Display order confirmation and hide form
       document.getElementById('orderDetails').innerHTML = orderDetails;
       document.getElementById('confirmationMessage').classList.remove('hidden');
       document.getElementById('billingForm').classList.add('hidden');
   } else {
       alert('Please fill in all fields to confirm the order.');
   }
 }
 
 function resetForm() {
   document.getElementById('billingForm').reset();
   document.getElementById('billingForm').classList.remove('hidden');
   document.getElementById('confirmationMessage').classList.add('hidden');
 }
 