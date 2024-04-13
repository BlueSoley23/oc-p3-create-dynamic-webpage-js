#!/bin/bash

    
main() { 
    # Importer le module
    source ./Mod.sh
    
    # Fonction pour centrer le texte
    center() {
      text="$1"
      columns=$(tput cols)
      text_width=${#text}
    
      # Calculer le nombre d'espaces à ajouter à gauche du texte pour le centrer
      padding=$(( ($columns - $text_width) / 2 ))
    
      # Utiliser printf pour afficher le texte centré
      printf "%${padding}s" ''
      echo "$text"
    }
    
    # Ecran d'accueil
    clear
    echo
    echo
    echo
    echo
    center "#################################################"
    echo
    center "Bienvenue dans WebDevUtils 0.1"
    echo
    echo
    center "OpenClassrooms - Projet 3 :" 
    center "Page web dynamique en JavaScript"
    echo
    center "Portfolio de Sophie Bluel"
    center "(Architecte d'intérieur)"
    echo
    center "#################################################"
    echo
    echo
    echo
    echo
    echo
    
    alphabet=("A" "B" "C" "D" "E" "F" "G" "H" "I" "J" "K" "L" "M" "N" "O" "P" "Q" "R" "S" "T" "U" "V" "W" "X" "Y" "Z")
    
    # Lire le fichier JSON et construire le menu
    mapfile -t options < <(jq -r '.menu[].option' Menu.json)
    mapfile -t commands < <(jq -r '.menu[].command' Menu.json)
    
    # Afficher le menu
    echo "Choisissez une option :"
    echo
    
    # Cette boucle 'for' parcourt tous les indices du tableau 'options'.
    for i in "${!options[@]}"; do 
      # Pour chaque indice, elle affiche la lettre correspondante et l'option elle-même.
      # 'a' est ajouté à 'i' pour obtenir la lettre correspondante de l'alphabet.
      echo ${alphabet[$i]} + ${options[$i]}
    done
    
    # Lire le choix de l'utilisateur
    echo
    echo
    echo "Choix de l'utilaire à éxecuter : " 
    echo
    echo
    read -n1  choice
    echo
    echo
    
    # Convertir le choix de l'utilisateur en nombre (a=0, b=1, c=2, etc.)
    choice_num=$(( $(printf '%d' "'$choice") - 97 ))
    
    # Vérifier si le choix est valide
    if [ $choice_num -ge 0 ] && [ $choice_num -lt ${#options[@]} ]; then
      # Si le choix est valide, exécuter la commande correspondante.
      eval "${commands[$choice_num]}"
      read
      main
    else
      # Sinon, afficher un message d'erreur.
      echo "Option invalide. Veuillez choisir une option entre a et $(printf \\$(printf '%03o' $((97 + ${#options[@]} - 1)))) ."
    fi
}

main