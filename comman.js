const nom = "Awa";
const produit = "ordinateur";
const prix_unitaire = 250000 ;
const quantité = 2;
const Frais_de_livraison = 5000 ;
const montant_des_produits = 2*prix_unitaire
const taux_de_TVA = prix_unitaire*2*0.18;
const montant_total_TTC= 2*prix_unitaire + taux_de_TVA 
const prix_moyen_par_produit= (montant_total_TTC + Frais_de_livraison)/2 
const total_à_payer = montant_total_TTC + Frais_de_livraison
console.log("===== RECU DE COMMANDE =====");
console.log("client:",nom);
console.log("nom_du_produit:",produit);
console.log("prix_unitaire:",prix_unitaire);
console.log("quantité:",quantité);
console.log(" ")
console.log("Montant_des_produits:",montant_des_produits);
console.log("taux_de_TVA:",taux_de_TVA);
console.log("montant_TTC:",montant_total_TTC);
console.log("Livraison:",Frais_de_livraison);
console.log("TOTAL_à_PAYER:",total_à_payer);
console.log(" ")
console.log("prix_moyen_par_produit:", prix_moyen_par_produit);
console.log("Type du nom:", typeof nom);
console.log("Type du prix:", typeof prix)
console.log("Type de la quantité:", typeof quantité)