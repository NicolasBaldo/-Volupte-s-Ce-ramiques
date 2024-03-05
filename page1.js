let count = 0; // Initialise le compteur à 0
const itemPrice = 70; // Prix unitaire de chaque article
let isCartEmpty = true; // Variable pour suivre si le panier est vide ou non

function updateTotal() {
    const total = count * itemPrice; // Calcul du total du panier
    document.getElementById('total').innerText = total; // Met à jour l'affichage du total
}

function showValidationSection() {
    const validationSection = document.querySelector('.validation-section');
    validationSection.style.display = 'block'; // Affiche la section de validation
}

function showValidateButton() {
    const validateButton = document.getElementById('validateBtn');
    validateButton.style.display = 'block'; // Affiche le bouton de validation
}

function incrementCount() {
    count++; // Incrémente le compteur
    document.getElementById('counter').innerText = count; // Met à jour la valeur affichée
    updateTotal(); // Met à jour le total du panier

    if (isCartEmpty) {
        isCartEmpty = false; // Change le statut du panier à non vide
        showValidationSection(); // Affiche la section de validation si un article est ajouté
    }
    if (count >= 1) {
        showValidateButton(); // Affiche le bouton de validation si un article est ajouté
    }
}

function decrementCount() {
    if (count > 0) {
        count--; // Décrémente le compteur si supérieur à 0
        document.getElementById('counter').innerText = count; // Met à jour la valeur affichée
        updateTotal(); // Met à jour le total du panier

        if (count === 0) {
            isCartEmpty = true; // Change le statut du panier à vide
            const validationSection = document.querySelector('.validation-section');
            validationSection.style.display = 'none'; // Cache la section de validation si le panier est vide

            const validateButton = document.getElementById('validateBtn');
            validateButton.style.display = 'none'; // Cache le bouton de validation si le panier est vide
        }
    }
}

function validateCart() {
    // Fonction de validation du panier
    const total = count * itemPrice;
    if (total > 0) {
        alert(`Votre panier a été validé avec un total de ${total} euros.`);
        // Ici, vous pouvez ajouter d'autres actions, comme envoyer les détails du panier à un serveur, etc.
    } else {
        alert("Votre panier est vide. Veuillez ajouter des articles avant de valider.");
    }
}
