# 📧 TUTORIEL COMPLET EmailJS - DE A À Z

## 🎯 Objectif
Envoyer automatiquement des emails de bienvenue via **Mathissou.store@gmail.com** quand quelqu'un s'inscrit sur votre site Zynk.

---

## ✅ ÉTAPE 1 : Créer un compte EmailJS

### 1.1 Aller sur le site
- Ouvrez https://www.emailjs.com/ dans votre navigateur
- Cliquez sur **"Sign Up"** (en haut à droite)

### 1.2 Créer votre compte
```
Email: votre@email.com (celui que vous utiliserez)
Mot de passe: un mot de passe sécurisé
```

- Remplissez les champs
- Cliquez sur **"Create Account"**
- Vérifiez votre email et cliquez sur le lien de confirmation

### 1.3 Connexion
- Allez à https://www.emailjs.com/ → **Sign In**
- Entrez vos identifiants
- Cliquez sur **"Sign In"**

---

## ✅ ÉTAPE 2 : Connecter votre adresse Gmail (Mathissou.store@gmail.com)

### 2.1 Aller à la section Services

Dans le dashboard EmailJS:
- Menu de gauche → **Email Services** (ou dans le dashboard principal)
- Cliquez sur **"Add Service"**

### 2.2 Sélectionner Gmail

- Vous verrez une liste de services
- Cliquez sur **"Gmail"**
- Cliquez sur **"Connect Account"**

### 2.3 Autoriser Gmail

Une fenêtre Google s'ouvrira:
- Sélectionnez votre compte **Mathissou.store@gmail.com**
- Cliquez sur **"Suivant"**
- Acceptez les permissions
- Cliquez sur **"Autoriser"**

### 2.4 Nommer votre service

Vous verrez un formulaire:
```
Service Name: Gmail Service (ou n'importe quel nom)
```

- Laissez les autres options par défaut
- Cliquez sur **"Add Service"**

**✅ IMPORTANT:** Notez le **Service ID** qui s'affiche
```
Exemple: service_abc123xyz456
```

Gardez ce Service ID, vous en aurez besoin plus tard! 📌

---

## ✅ ÉTAPE 3 : Créer un Template Email

Les templates sont les modèles de vos emails.

### 3.1 Aller à Email Templates

- Menu de gauche → **Email Templates**
- Cliquez sur **"Create New Template"**

### 3.2 Configurer le template

Vous verrez un formulaire avec:

**Template Name:**
```
Welcome Email
```

**Service:** (sélectionnez le service créé à l'étape 2)
```
Gmail Service
```

**From Email:** (l'email qui envoie)
```
Mathissou.store@gmail.com
```

**From Name:** (le nom qui s'affiche)
```
Zynk Team
```

**Subject:** (le sujet du mail)
```
Bienvenue sur ZYNK ! 🎉
```

### 3.3 Ajouter le contenu HTML du mail

Cherchez la section **"Email Content"** → sélectionnez **"HTML"**

Collez ce code HTML complet (c'est un email stylisé ZYNK):

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Arial', sans-serif; background: #000; color: #fff; }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #0f0f0f;
      border: 1px solid #1c1c1c;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
      padding: 40px;
      text-align: center;
      border-bottom: 2px solid #D4FF00;
    }
    .logo {
      font-size: 48px;
      font-weight: bold;
      letter-spacing: 6px;
      color: #D4FF00;
      margin-bottom: 20px;
      font-family: 'Oswald', sans-serif;
    }
    .content {
      padding: 40px;
    }
    .greeting {
      font-size: 22px;
      color: #D4FF00;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .message {
      font-size: 14px;
      color: #ccc;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    .highlight {
      color: #D4FF00;
      font-weight: bold;
    }
    .button {
      display: inline-block;
      background: #D4FF00;
      color: #000;
      padding: 12px 30px;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
      margin: 20px 0;
    }
    .footer {
      background: rgba(212, 255, 0, 0.05);
      padding: 20px;
      text-align: center;
      border-top: 1px solid #1c1c1c;
      font-size: 11px;
      color: #555;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">ZYNK</div>
      <p style="color: #999; font-size: 12px; letter-spacing: 2px;">STREETWEAR PREMIUM</p>
    </div>
    
    <div class="content">
      <div class="greeting">Merci d'avoir créé votre compte ZYNK ! 🎉</div>
      
      <p class="message">
        Bonjour <span class="highlight">{{user_name}}</span>,
      </p>
      
      <p class="message">
        Nous sommes ravis de vous accueillir dans la famille <span class="highlight">ZYNK</span> !
      </p>
      
      <p class="message">
        Votre compte a été créé avec succès. Vous pouvez maintenant :
      </p>
      
      <ul style="margin-left: 20px; margin-bottom: 20px; color: #ccc;">
        <li style="margin-bottom: 10px;">✓ Parcourir notre collection de streetwear premium</li>
        <li style="margin-bottom: 10px;">✓ Ajouter des articles à votre panier</li>
        <li style="margin-bottom: 10px;">✓ Gérer votre profil</li>
      </ul>
      
      <p class="message">
        Cliquez sur le bouton ci-dessous pour explorer notre collection :
      </p>
      
      <center>
        <a href="https://votresite.com/index.html" class="button">Voir la Collection</a>
      </center>
      
      <p class="message" style="margin-top: 30px;">
        Si vous avez des questions, n'hésitez pas à nous contacter.
      </p>
      
      <p class="message">
        À bientôt ! 🚀
      </p>
    </div>
    
    <div class="footer">
      <p>© 2025 Zynk - Streetwear Premium · Marseille</p>
      <p style="margin-top: 10px;">Cet email a été envoyé par EmailJS</p>
    </div>
  </div>
</body>
</html>
```

**⚠️ IMPORTANT:** Remarquez la variable **`{{user_name}}`** - elle sera remplacée par le prénom de l'utilisateur automatiquement!

### 3.4 Sauvegarder le template

- Cliquez sur **"Save"** (en bas)
- Vous verrez apparaître le **Template ID**

**✅ Notez le Template ID:**
```
Exemple: template_xyz789abc
```

Gardez ce Template ID, vous en aurez besoin! 📌

---

## ✅ ÉTAPE 4 : Obtenir votre Public Key

### 4.1 Aller à l'intégration

- Cliquez sur votre photo/avatar (en haut à droite)
- Cliquez sur **"Account"** ou **"Integration"**
- Vous allez à la page d'intégration

Ou directement: Allez à https://dashboard.emailjs.com/admin/integration/browser

### 4.2 Copier la Public Key

Vous verrez une section **"Publish Key"** ou **"Public Key"**

```
Exemple: pk_abc123def456ghi789jkl012
```

**✅ Notez votre Public Key** 📌

---

## ✅ ÉTAPE 5 : Récapitulatif des 3 clés à avoir

Vous devez avoir noté:

```
1. SERVICE_ID: service_abc123xyz456
2. TEMPLATE_ID: template_xyz789abc  
3. PUBLIC_KEY: pk_abc123def456ghi789jkl012
```

Si vous ne les avez plus:

**Pour le SERVICE_ID:**
- Email Services → Sélectionnez Gmail Service → le Service ID est affiché

**Pour le TEMPLATE_ID:**
- Email Templates → Sélectionnez "Welcome Email" → le Template ID est affiché en haut à droite

**Pour la PUBLIC_KEY:**
- Account/Integration → Vous voyez "Publish Key"

---

## ✅ ÉTAPE 6 : Intégrer dans votre code

### 6.1 Ouvrir le fichier inscription.html

Ouvrez: `C:\Users\PC-DEMO\Desktop\Zynk\inscription.html`

### 6.2 Chercher la fonction sendWelcomeEmail

Cherchez ces lignes (environ ligne 230-240):

```javascript
function sendWelcomeEmail(email, firstName) {
  const emailContent = {
    to_email: email,
    user_name: firstName,
    subject: 'Bienvenue sur ZYNK !',
    from_email: 'Mathissou.store@gmail.com'
  };

  try {
    emailjs.init('YOUR_PUBLIC_KEY');  // ← À REMPLACER
    emailjs.send('SERVICE_ID', 'TEMPLATE_ID', emailContent)  // ← À REMPLACER
      .then(response => {
        console.log('Email envoyé avec succès');
      })
      .catch(error => {
        console.warn('Email non envoyé');
      });
  } catch (e) {
    console.warn('EmailJS non configuré');
  }
}
```

### 6.3 Remplacer les valeurs

Remplacez:

**`YOUR_PUBLIC_KEY`** par votre Public Key
```javascript
emailjs.init('pk_abc123def456ghi789jkl012');
```

**`SERVICE_ID`** par votre Service ID
**`TEMPLATE_ID`** par votre Template ID

```javascript
emailjs.send('service_abc123xyz456', 'template_xyz789abc', emailContent)
```

### 6.4 Code final

Ça doit ressembler à:

```javascript
function sendWelcomeEmail(email, firstName) {
  const emailContent = {
    to_email: email,
    user_name: firstName,
    subject: 'Bienvenue sur ZYNK !',
    from_email: 'Mathissou.store@gmail.com'
  };

  try {
    emailjs.init('pk_abc123def456ghi789jkl012');  // ← VOTRE PUBLIC KEY
    emailjs.send('service_abc123xyz456', 'template_xyz789abc', emailContent)  // ← VOS IDS
      .then(response => {
        console.log('Email envoyé avec succès');
      })
      .catch(error => {
        console.warn('Email non envoyé (erreur EmailJS)');
        console.error(error);
      });
  } catch (e) {
    console.warn('EmailJS non configuré correctement');
  }
}
```

### 6.5 Sauvegarder le fichier

Appuyez sur **Ctrl+S** (ou File → Save)

---

## ✅ ÉTAPE 7 : TESTER

### 7.1 Ouvrir votre site

Ouvrez `index.html` dans votre navigateur

### 7.2 Aller à l'inscription

- Cliquez sur l'icône 👤 → "S'inscrire"
- Ou ouvrez directement: `inscription.html`

### 7.3 Créer un compte de test

Remplissez:
```
Prénom: Jean
Nom: Dupont
Email: votre-vraie-adresse@gmail.com (pour recevoir le test)
Mot de passe: Test123456
Confirmer: Test123456
```

Cliquez sur **"Créer mon compte"**

### 7.4 Vérifier

- Vous devriez voir le message: "Bienvenue sur notre site, compte créé avec succès !"
- Vérifiez votre boîte email (votre-vraie-adresse@gmail.com)
- Vous devriez recevoir l'email de bienvenue ZYNK! 📧

---

## 🐛 DÉPANNAGE

### Problème: L'email n'est pas envoyé

**1. Vérifier les erreurs**
- Ouvrez votre navigateur → F12 → Console
- Vous verrez les erreurs en rouge
- Regardez si les PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID sont corrects

**2. Vérifier EmailJS**
- Allez sur https://dashboard.emailjs.com/
- Cliquez sur **"Email Services"**
- Vérifiez que Gmail Service est **"Connected"** (vert)
- Si rouge → cliquez pour reconnecter

**3. Vérifier le template**
- Allez à **"Email Templates"**
- Cliquez sur "Welcome Email"
- Cliquez sur "Test It" → sélectionnez le service → "Send Test Email"
- Vous devriez recevoir un test

### Problème: "Invalid Service ID"

- Votre SERVICE_ID est incorrect
- Allez à Email Services → copiez le Service ID exact
- Remplacez dans le code

### Problème: "Invalid Template ID"

- Votre TEMPLATE_ID est incorrect
- Allez à Email Templates → coparez le Template ID exact
- Remplacez dans le code

### Problème: "Authentication Failed"

- Votre PUBLIC_KEY est incorrect
- Allez à Account/Integration → copiez la Public Key exacte
- Remplacez dans le code

### Problème: L'email arrive pas à la bonne adresse

- Vérifiez le `to_email` dans votre code
- Il doit être l'email de l'utilisateur qui s'inscrit
- Vérifiez aussi les filtres SPAM/Indésirables

---

## 📊 VÉRIFIER QUE TOUT FONCTIONNE

### Vérifier les envois

Allez à https://dashboard.emailjs.com/ → **"Logs"** ou **"Activity"**

Vous verrez l'historique de tous les emails envoyés/échoués

---

## 🎯 RÉSUMÉ FINAL

✅ **Vous avez:**
1. Créé un compte EmailJS
2. Connecté Gmail (Mathissou.store@gmail.com)
3. Créé un template d'email stylisé
4. Obtenu vos 3 clés (PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID)
5. Intégré dans votre code inscription.html
6. Testé l'envoi d'email

**Les emails de bienvenue sont maintenant activés! 🚀**

---

## 📌 Notes importantes

- **Limite gratuite:** 200 emails par mois (suffisant pour tester)
- **Pour la production:** Augmentez le plan EmailJS
- **Sécurité:** Ne partagez pas votre Public Key sur GitHub publiquement (bien que ce ne soit que la clé publique)
- **Personnalisation:** Vous pouvez modifier le template HTML comme vous voulez

---

## 🆘 Besoin d'aide?

Si quelque chose ne fonctionne pas:
1. Vérifiez les erreurs console (F12)
2. Vérifiez que Gmail Service est connecté (vert)
3. Testez le template directement dans EmailJS
4. Vérifiez les 3 clés sont correctes
5. Consultez https://www.emailjs.com/docs/

Bonne chance! 🎉
