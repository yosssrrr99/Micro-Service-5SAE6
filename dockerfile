# Utilisez une image Node.js comme image de base
FROM node:18.16

# Définissez le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copiez les fichiers de votre projet dans le conteneur
COPY . .

# Installez les dépendances de votre projet
RUN npm install

# Exposez le port sur lequel votre application écoute
EXPOSE 9001

# Définissez la commande de démarrage de votre application
CMD ["node", "app.js"]
