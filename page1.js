function selectPaymentOption(option) {
    // Réinitialisez toutes les options de paiement
    document.getElementById('credit-card-option').style.backgroundColor = '';
    document.getElementById('paypal-option').style.backgroundColor = '';

    // Sélectionnez l'option de paiement actuelle
    document.getElementById(option + '-option').style.backgroundColor = '#aaf';

    // Vous pouvez ajouter ici le code supplémentaire en fonction de l'option sélectionnée
    // Par exemple, afficher un formulaire de carte de crédit ou rediriger vers la page PayPal.
}
