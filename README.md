# Mini projet Cadre photo de grand mère
Le but de ce projet est de créer une application web fullscreen qui permettra de faire défiler des galeries de photos.

#### L'application sera composée:

* D'une interface cliente qui s'occupera d'afficher les photos, ainsi que les notifications.
* D'une interface d'administration qui permettra de gérer les galeries photos, d'envoyer des notifications (message pour la grand mère avec si possible la possibilité de mettre une photo personnalisé avec la notification).

### Gestions des galeries:

Dans un premier temps, une galerie sera juste un repertoire dans le projet. Vous pourrez mettre vos images via SFTP ou autre. Il faudra lister toutes les images de la galerie et l'envoyer au client.

### Interface d'administration

* Gestion des galeries: Spécifier le nom du répertoire à afficher. Lors d'un changement de galerie, le server devra envoyer un événement en socket pour spécifier au client que la galerie à changer et envoyer un tableau avec les nouvelles urls
* Gestion des notifications: Cette page servira à envoyer des messages au client via des sockets. La notification devra contenir un temps de pause pour gérer le temps que le message restera affiché
* Bonus1: Pouvoir sélectionner une image en même temps que la notification pour afficher la notification avec cette image
* Bonus2: Gérer les galeries depuis l'interface d'admin: Création de repertoire + upload de photos
Bonus3: Pouvoir programmer des notifications à l'avance

### Interface cliente

* L'interface cliente doit récupérer la liste des photos depuis le server, et écouter les changement pour regénérer le carousel.
* L'interface cliente doit écouter sur les événements notification pour afficher une infobulle avec le message personnalisé. Si possible un signal sonore devra être envoyer
* Si une photo est associé à la notification, avancer le carousel directement à la photo indiqué et faire une pause pendant le temps spécifié