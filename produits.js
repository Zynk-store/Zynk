// Base de données des produits
const PRODUITS = {
  pull1: {
    id: 'pull1',
    name: 'Pull Zynk – Noir',
    nameEn: 'Zynk Sweater – Black',
    price: 80.00,
    category: 'pulls',
    description: 'Pull premium Zynk en couleur noire. Confortable et élégant.',
    descriptionEn: 'Premium Zynk sweater in black color. Comfortable and elegant.',
    images: [
      'image/pull-zynk-noir-face.png',
      'image/pull-zynk-noir-profil.png',
      'image/pull-zynk-noir-dos.png',
      'image/pull-zynk-noir-solo.png',
      'image/pull-zynk-noir-badge.png'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  pull2: {
    id: 'pull2',
    name: 'Pull Zynk – Blanc',
    nameEn: 'Zynk Sweater – White',
    price: 80.00,
    category: 'pulls',
    description: 'Pull premium Zynk en couleur blanche. Confortable et élégant.',
    descriptionEn: 'Premium Zynk sweater in white color. Comfortable and elegant.',
    images: [
      'image/pull-zynk-blanc-face.png',
      'image/pull-zynk-blanc-profil.png',
      'image/pull-zynk-blanc-dos.png',
      'image/pull-zynk-blanc-solo.png',
      'image/pull-zynk-noir-badge.png'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  veste1: {
    id: 'veste1',
    name: 'Veste Zynk – Noir',
    nameEn: 'Zynk Jacket – Black',
    price: 100.00,
    category: 'vestes',
    description: 'Veste premium Zynk en couleur noire. Style streetwear moderne.',
    descriptionEn: 'Premium Zynk jacket in black color. Modern streetwear style.',
    images: ['', '', '', ''],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  veste2: {
    id: 'veste2',
    name: 'Veste Zynk – Blanc',
    nameEn: 'Zynk Jacket – White',
    price: 100.00,
    category: 'vestes',
    description: 'Veste premium Zynk en couleur blanche. Style streetwear moderne.',
    descriptionEn: 'Premium Zynk jacket in white color. Modern streetwear style.',
    images: ['', '', '', ''],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  tshirt1: {
    id: 'tshirt1',
    name: 'T-shirt Zynk – Blanc',
    nameEn: 'Zynk T-shirt – White',
    price: 45.00,
    category: 'tshirts',
    description: 'T-shirt premium Zynk en couleur blanche. 100% coton de qualité.',
    descriptionEn: 'Premium Zynk t-shirt in white color. 100% quality cotton.',
    images: [
      'image/t-shirt-blanc-zynk.png',
      'image/t-shirt-zynk-blanc-profil.png',
      'image/t-shirt-zynk-blanc-face.png',
      'image/t-shirt-zynk-blanc-solo.png'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  tshirt2: {
    id: 'tshirt2',
    name: 'T-shirt Zynk – Noir',
    nameEn: 'Zynk T-shirt – Black',
    price: 45.00,
    category: 'tshirts',
    description: 'T-shirt premium Zynk en couleur noire. 100% coton de qualité.',
    descriptionEn: 'Premium Zynk t-shirt in black color. 100% quality cotton.',
    images: [
      'image/t-shirt-noir-zynk.png',
      'image/t-shirt-zynk-noir-profil.png',
      'image/t-shirt-zynk-noir-face.png',
      'image/t-shirt-zynk-noir-solo.png'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  casquette1: {
    id: 'casquette1',
    name: 'Casquette Zynk – Noir',
    nameEn: 'Zynk Cap – Black',
    price: 40.00,
    category: 'casquettes',
    description: 'Casquette premium Zynk en couleur noire. Taille unique réglable.',
    descriptionEn: 'Premium Zynk cap in black color. One size adjustable.',
    images: [
      'image/casquette-zynk.png',
      'image/casquette-zynk-noir-profil.png',
      'image/casquette-zynk-noir-dos.png',
      'image/casquette-zynk-noir-solo.png'
    ],
    sizes: ['Taille unique / Réglable'],
    sizesEn: ['One size / Adjustable']
  },
  casquette2: {
    id: 'casquette2',
    name: 'Casquette Zynk – Blanc',
    nameEn: 'Zynk Cap – White',
    price: 40.00,
    category: 'casquettes',
    description: 'Casquette premium Zynk en couleur blanche. Taille unique réglable.',
    descriptionEn: 'Premium Zynk cap in white color. One size adjustable.',
    images: [
      'image/casquette-zynk-blache.png',
      'image/casquette-zynk-blanche-profil.png',
      'image/casquette-zynk-blanche-dos.png',
      'image/casquette-zynk-blanche-solo.png'
    ],
    sizes: ['Taille unique / Réglable'],
    sizesEn: ['One size / Adjustable']
  }
};

function getProductById(id) {
  return PRODUITS[id] || null;
}

function getProductsByCategory(category) {
  return Object.values(PRODUITS).filter(p => p.category === category);
}

function getAllProducts() {
  return Object.values(PRODUITS);
}
