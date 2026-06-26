# 📦 Guide Système de Produits – Zynk

## Vue d'ensemble

Le système de produits fonctionne en 3 parties:

1. **produits.js** — Base de données des produits
2. **Pages catégories** — pulls.html, vestes.html, tshirts.html, casquettes.html, tous.html
3. **produit.html** — Page détail d'un produit

---

## 🏗️ Architecture

```
Utilisateur clique sur carte produit
        ↓
Redirige vers produit.html?id=pull1
        ↓
produit.html charge produits.js
        ↓
Affiche images[0-3], tailles, prix, description
        ↓
Utilisateur ajoute au panier avec taille
```

---

## 📋 Structure d'un produit dans produits.js

```javascript
pull1: {
  id: 'pull1',                                    // ID unique
  name: 'Pull Zynk — Noir',                      // Nom du produit
  price: 80.00,                                  // Prix en EUR
  category: 'pulls',                             // Catégorie (pulls, vestes, tshirts, casquettes)
  description: 'Pull premium Zynk...',           // Description
  images: [                                      // 4 images obligatoires
    'pull1.jpg',
    'pull1_alt1.jpg',
    'pull1_alt2.jpg',
    'pull1_alt3.jpg'
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']     // Tailles disponibles
}
```

---

## ➕ Comment ajouter un nouveau produit

### 1️⃣ Ajouter l'image principale

Place ton image dans le dossier `C:\Users\PC-DEMO\Desktop\Zynk\` avec un nom simple, par exemple:
- `monpull.jpg` (image principale)
- `monpull_alt1.jpg` (image 2)
- `monpull_alt2.jpg` (image 3)
- `monpull_alt3.jpg` (image 4)

### 2️⃣ Ajouter le produit dans produits.js

Ouvre `produits.js` et ajoute un nouvel objet:

```javascript
monpull: {
  id: 'monpull',
  name: 'Pull Zynk — Couleur',
  price: 80.00,
  category: 'pulls',  // pulls, vestes, tshirts, ou casquettes
  description: 'Description du produit...',
  images: [
    'monpull.jpg',
    'monpull_alt1.jpg',
    'monpull_alt2.jpg',
    'monpull_alt3.jpg'
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']  // ou ['Taille unique / Réglable'] pour casquettes
}
```

### 3️⃣ C'est tout!

Le produit apparaît automatiquement:
- Sur la page de sa catégorie (pulls.html, etc.)
- Sur la page "Tous" (tous.html)
- Accessible via produit.html?id=monpull

---

## 🎨 Catégories disponibles

| Catégorie | ID | Tailles |
|-----------|-----|---------|
| Pulls | `pulls` | XS, S, M, L, XL, XXL |
| Vestes | `vestes` | XS, S, M, L, XL, XXL |
| T-shirts | `tshirts` | XS, S, M, L, XL, XXL |
| Casquettes | `casquettes` | Taille unique / Réglable |

---

## 📸 Carrousel d'images

La page produit affiche automatiquement:
- Image principale (images[0])
- Navigation gauche/droite (flèches)
- Points de navigation en bas
- Navigation au clavier (← →)

**Important:** 4 images sont obligatoires pour chaque produit.

---

## 💰 Gestion des prix

Les prix sont stockés en EUR dans `produits.js`:
```javascript
price: 80.00  // 80€
```

La conversion USD se fait automatiquement:
- EUR → USD: multiplie par 1.14
- USD → EUR: divise par 1.14

Aucune modification nécessaire, c'est automatique! 🔄

---

## 📌 Tailles

### Pour pulls, vestes, t-shirts:
```javascript
sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
```

### Pour casquettes (taille unique):
```javascript
sizes: ['Taille unique / Réglable']
```

---

## 🛒 Ajouter au panier

Quand l'utilisateur clique "Ajouter au panier":

1. Sélectionne une taille (obligatoire)
2. Clique le bouton
3. L'article est ajouté avec la taille sélectionnée
4. Le panier se met à jour

L'article stocké en localStorage contient:
```javascript
{
  id: 1234567890,
  name: 'Pull Zynk — Noir',
  price: '80.00 €',
  size: 'L',
  productId: 'pull1'
}
```

---

## 🔗 URLs produits

```
https://votresite.com/produit.html?id=pull1
https://votresite.com/produit.html?id=veste2
https://votresite.com/produit.html?id=tshirt1
https://votresite.com/produit.html?id=casquette1
```

Tu peux partager ces liens directement! ✅

---

## 🐛 Dépannage

### Le produit n'apparaît pas
1. Vérifie l'ID du produit (pas d'espaces, pas de caractères spéciaux)
2. Vérifie que la `category` est correcte
3. Recharge la page (Ctrl+F5)

### Les images ne s'affichent pas
1. Vérifie que les 4 images existent dans le dossier Zynk
2. Vérifie les noms de fichiers (respect de la casse sur Linux/Mac)
3. Ouvre la console (F12) pour voir les erreurs

### Le carrousel ne fonctionne pas
1. Vérifie qu'il y a exactement 4 images
2. Vérifie que les noms sont corrects dans le tableau `images`

### La taille n'est pas sélectionnée
1. Clique sur une taille avant d'ajouter au panier
2. Pour casquettes, il y a une seule option "Taille unique / Réglable"

---

## 📝 Exemple complet d'ajout

```javascript
// Ajouter dans produits.js:

nouveaupull: {
  id: 'nouveaupull',
  name: 'Pull Zynk — Burgundy',
  price: 80.00,
  category: 'pulls',
  description: 'Pull premium en couleur burgundy. Parfait pour l\'automne.',
  images: [
    'nouveaupull.jpg',
    'nouveaupull_alt1.jpg',
    'nouveaupull_alt2.jpg',
    'nouveaupull_alt3.jpg'
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
}
```

Puis:
1. Mets 4 images dans `C:\Users\PC-DEMO\Desktop\Zynk\`
2. Recharge pulls.html
3. Le produit apparaît! 🎉

---

## ✨ Fonctionnalités

✅ Carrousel d'images (4 images)
✅ Navigation flèches gauche/droite
✅ Navigation points en bas
✅ Navigation au clavier (← →)
✅ Sélection de taille
✅ Conversion EUR/USD automatique
✅ Ajout au panier avec taille
✅ Responsive design
✅ Tailles uniques pour casquettes

---

## 🎯 Résumé rapide

**Pour ajouter un produit:**
1. Ajoute 4 images dans le dossier Zynk
2. Ajoute l'objet produit dans produits.js
3. C'est fini! ✓

**Accéder à un produit:**
- Clique sur la carte dans les catégories
- Ou visite directement: produit.html?id=monpull

**Panier:**
- Sélectionne une taille
- Clique "Ajouter au panier"
- Taille est sauvegardée avec l'article

---

Besoin d'aide? Vérifie la console (F12) pour les erreurs! 🚀
