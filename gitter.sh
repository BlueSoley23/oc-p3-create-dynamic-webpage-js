#!/bin/bash

# Utilisez les variables d'environnement pour l'username et le token
username="bluesoley23"
token=$GITHUB_TOKEN

# Ajoute tous les fichiers du répertoire courant à git
git add .

# Stocke dans une variable l'entrée d'une chaîne de caractères tapée au clavier et validée par entrée
echo "Entrez votre message de commit : "
read commitMessage

# Commit les fichiers avec un message au format suivant : 'moisJour-heureMinutes - chaineDeCharactères'
date=$(date '+%m%d-%H%M')
git commit -m "$date - $commitMessage"

# Fait un push avec l'username et le token
git push https://$username:$token@github.com/BlueSoley23/oc-p3-create-dynamic-webpage-js.git

# Renvoie un message de status
if [ $? -eq 0 ]
then
  echo "Push effectué avec succès."
else
  echo "Une erreur s'est produite lors du push."
fi