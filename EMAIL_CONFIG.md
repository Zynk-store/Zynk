# Configuration EmailJS pour Zynk

Pour envoyer les emails de bienvenue, vous devez configurer EmailJS.

## Étapes de configuration :

1. **Créer un compte EmailJS** :
   - Allez sur https://www.emailjs.com/
   - Créez un compte gratuit
   - Connectez-vous

2. **Créer un Service Email** :
   - Dans le dashboard, allez à "Add Service"
   - Sélectionnez "Gmail" comme service
   - Connectez votre adresse email (Mathissou.store@gmail.com)
   - Notez le Service ID (ex: service_abc123)

3. **Créer un Template Email** :
   - Allez à "Email Templates"
   - Cliquez sur "Create New Template"
   - Configurez le template avec :
     - **Template Name** : Welcome Email
     - **From Email** : Mathissou.store@gmail.com
     - **Subject** : Bienvenue sur ZYNK !
     - **HTML Content** :
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #000; }
    .container { max-width: 600px; margin: 0 auto; background: #0f0f0f; padding: 40px; color: #fff; border: 1px solid #1c1c1c; }
    .logo { font-size: 32px; letter-spacing: 4px; color: #D4FF00; text-align: center; font-weight: bold; margin-bottom: 30px; }
    .content { text-align: center; }
    .greeting { font-size: 18px; margin: 20px 0; }
    .message { font-size: 14px; color: #555; margin: 20px 0; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #1c1c1c; font-size: 11px; color: #555; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">ZYNK</div>
    <div class="content">
      <h1 style="color: #D4FF00; margin-bottom: 20px;">Merci d'avoir créé votre compte ZYNK !</h1>
      <p class="greeting">Bienvenue {{user_name}},</p>
      <p class="message">Nous sommes ravis de vous accueillir dans la famille ZYNK ! Votre compte a été créé avec succès.</p>
      <p class="message">Vous pouvez maintenant explorer notre collection de streetwear premium.</p>
      <div class="footer">
        <p>© 2025 Zynk. Tous droits réservés.</p>
      </div>
    </div>
  </div>
</body>
</html>
```
   - Notez le Template ID (ex: template_abc123)

4. **Obtenir vos clés API** :
   - Allez à "Integration" (dans l'accueil)
   - Copiez votre Public Key
   - Copiez votre Access Token (optionnel pour le frontend)

5. **Mettre à jour inscription.html** :
   - Ouvrez C:\Users\PC-DEMO\Desktop\Zynk\inscription.html
   - Ligne ~173, remplacez :
     - `YOUR_PUBLIC_KEY` par votre Public Key
     - `SERVICE_ID` par votre Service ID
     - `TEMPLATE_ID` par votre Template ID

Exemple :
```javascript
emailjs.init('pk_abc123def456...'); // Votre Public Key
...
emailjs.send('service_xyz789', 'template_abc123', templateParams)
```

## Notes :
- EmailJS offre 200 emails gratuits par mois
- Les données d'inscription sont sauvegardées localement (localStorage)
- Pour une production, utilisez une vraie base de données

