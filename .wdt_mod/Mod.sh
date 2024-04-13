Project=~/Desktop/oc-p3-create-dynamic-webpage-js/
Backend=~/Desktop/oc-p3-create-dynamic-webpage-js/Backend

addFunction () {
    # Lire la nouvelle option et la commande de l'utilisateur
    echo
    echo
    echo "Intitulé de la nouvelle option qui s'affichera dans le menu :"
    echo
    echo
    read optionChoice
    echo
    echo
    echo
    echo
    echo "Commande qui devra s'exécuter à la sélection dans le menu : " 
    echo
    echo
    read commandChoice
    
    # Convertir les entrées de l'utilisateur en une nouvelle entrée JSON
    newEntry=$(printf '{"option": "%s", "command": "%s"}' "$optionChoice" "$commandChoice")
    
    # Ajouter la nouvelle entrée au fichier JSON existant
    jq '.menu += ['"$newEntry"']' Menu.json > temp.json && mv temp.json Menu.json
}

export -f addFunction





initBackend() {
    cd '/home/blue23/Desktop/oc-p3-create-dynamic-webpage-js/Backend/'
    npm init -y
    npm install
    npm audit fix
    cd "/home/blue23/Desktop/oc-p3-create-dynamic-webpage-js/.wdt_mod/"
    echo
    echo
    echo
    echo
    echo
    echo "              ... Press return for go back to menu > "
    }
    
export -f initBackend




serverStart() {
     cd ~/Desktop/oc-p3-create-dynamic-webpage-js/Backend/ 
     npm start
     live-server ~/Desktop/oc-p3-create-dynamic-webpage-js/
    }
    
export -f serverStart




workspaceStart() {
    serverStart & sh /home/blue23/Applications/Idea-IC/bin/idea.sh & garcon-url-handler "https://p3js.glitch.me/FrontEnd/index.html" "http://127.0.0.1:8080/FrontEnd/index.html"
    }

export -f workspaceStart




gitCommitAndPush() {
                # Utilisez les variables d\'environnement pour l\'username et le token
            username="bluesoley23"
            token=$GITHUB_TOKEN

            # Positionnement dans le répertoire de travail
            cd "/home/blue23/Desktop/oc-p3-create-dynamic-webpage-js/"

            # Ajoute tous les fichiers du répertoire courant à git
            git add .
            
            # Stocke dans une variable l\'entrée d\'une chaîne de caractères tapée au clavier et validée par entrée
            echo "Entrez votre message de commit : "
            read commitMessage
            
            # Commit les fichiers avec un message au format suivant : moisJour-heureMinutes - chaineDeCharactères
            date=$(date '+%m%d-%H%M')
            git commit -m "$date - $commitMessage"
            
            # Fait un push avec l\'username et le token
            git push https://$username:$token@github.com/BlueSoley23/oc-p3-create-dynamic-webpage-js.git
            
            # Renvoie un message de status
            if [ $? -eq 0 ]
            then
              echo "Push effectué avec succès."
            else
              echo "Une erreur s\'est produite lors du push."
            fi
            cd "/home/blue23/Desktop/oc-p3-create-dynamic-webpage-js/.wdt_mod/"

}

export -f gitCommitAndPush




reClone() {
    rm -rf $Project
    cd ~/Desktop
    git clone https://github.com/BlueSoley23/oc-p3-create-dynamic-webpage-js.git
}

export -f reClone




dbReset() {
    # Supprimez le dossier images
    rm -rf ~/Desktop/oc-p3-create-dynamic-webpage-js/Backend/images
        
    # Copiez le dossier images de sauvegarde
    cp -r ~/Desktop/p3BackUp/images $Backend
            
    # Supprimez le fichier database.sqlite
    rm -rf ~/Desktop/oc-p3-create-dynamic-webpage-js/Backend/database.sqlite
            
    # Copiez le fichier database.sqlite de sauvegarde
    cp ~/Desktop/p3BackUp/database.sqlite $Backend
}

export -f dbReset




aptInstall() {
    read -p "Quel(s) paquet(s) à installer ? " toInstall
    sudo apt install -y $toInstall
}

export -f aptInstall




aptUpdateAndUpgrade() {
    sudo apt update -y && sudo apt upgrade -y
}

export -f aptUpdateAndUpgrade