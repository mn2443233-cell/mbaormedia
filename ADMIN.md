# Espace administrateur — guide de configuration

Ce site inclut un espace protégé (`/#/admin`) où vous pouvez publier des
**actualités**, **événements** et **programmes**, avec vidéo ou image.
Toute publication apparaît **instantanément** sur le site, pour tous les
visiteurs, sans que personne n'ait besoin de recharger la page ou de
redéployer le site.

Cet espace utilise **Firebase** (service Google), gratuit pour ce niveau
d'usage. Il faut environ 10 minutes pour le configurer, une seule fois.

## 1. Créer le projet Firebase

1. Allez sur https://console.firebase.google.com
2. Cliquez sur **Ajouter un projet**, donnez-lui un nom (ex : `mbaor-tv`).
3. Vous pouvez désactiver Google Analytics (pas nécessaire).

## 2. Activer la base de données (Firestore)

1. Dans le menu de gauche : **Build > Firestore Database**.
2. Cliquez sur **Créer une base de données**.
3. Choisissez une région proche (ex : `eur3` pour l'Europe).
4. Démarrez en **mode production**.
5. Une fois créée, allez dans l'onglet **Règles** et remplacez le contenu par
   celui du fichier `firestore.rules` fourni dans ce projet, puis cliquez sur
   **Publier**. (Cela autorise tout le monde à *lire* les publications, mais
   seul un administrateur connecté peut *écrire*.)

## 3. Activer la connexion administrateur

1. Menu de gauche : **Build > Authentication**.
2. Cliquez sur **Commencer**, puis activez le fournisseur **E-mail/Mot de
   passe**.
3. Onglet **Users** > **Add user** : créez le compte de l'administrateur
   (l'email et le mot de passe qui serviront à se connecter sur `/#/admin`).

## 4. Récupérer la configuration du site web

1. Cliquez sur l'icône ⚙️ (Paramètres du projet) en haut à gauche.
2. Descendez jusqu'à **Vos applications**, cliquez sur l'icône **`</>`**
   (Web) pour enregistrer une nouvelle application.
3. Donnez-lui un nom (ex : `mbaor-tv-site`), pas besoin de Firebase Hosting.
4. Copiez l'objet `firebaseConfig` qui s'affiche.
5. Collez ces valeurs dans `src/config.js`, dans la clé `firebaseConfig`.

## 5. Utiliser l'espace administrateur

1. Ouvrez votre site, allez sur `votre-site.com/#/admin`.
2. Connectez-vous avec l'email/mot de passe créés à l'étape 3.
3. Remplissez le formulaire (type, titre, description, lien vidéo ou image,
   date/lieu pour un événement) et cliquez sur **Publier**.
4. La publication apparaît immédiatement dans la section correspondante du
   site (Actualités, Événements ou Programmes), pour tous les visiteurs.
5. Pour supprimer une publication, utilisez l'icône 🗑️ dans la liste à
   droite du tableau de bord.

## Notes

- Le lien vidéo accepte un lien **YouTube** (page normale, `youtu.be`, ou
  `/shorts/`) ou un lien direct vers un fichier `.mp4`.
- Tant que `firebaseConfig` n'est pas renseigné, les sections
  Actualités/Événements/Programmes affichent un message d'attente au lieu
  d'une erreur — le reste du site fonctionne normalement.
- Vous pouvez créer plusieurs comptes administrateurs depuis l'onglet
  **Authentication > Users** si plusieurs personnes doivent publier.
