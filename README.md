# ITBUS Sample form repository

Deze repository bevat een voorbeeld formulier om de integratie met Odoo te demonstreren.

## Environment variabelen

Maak een bestand `.env` aan in de `node` folder. Configureer volgende variabelen:

* ODOO_HOST=&lt;instancename&gt;.odoo.com
* ODOO_DB=&lt;database-name&gt;
* ODOO_USERNAME=&lt;gebruikersnaam-hier&gt;
* ODOO_PASSWORD=&lt;wachtwoord-hier&gt;
* ODOO_PROTOCOL=https

## Opstarten

Zorg dat je een recente versie van NodeJs hebt geïnstalleerd (18+). Je kan ook de repository openen in een DevContainer. Navigeer naar de folder node en voer volgende commando's uit:

> npm install

> npm start

De applicatie opent op poort 3000. 

## Deploy

Je kan de applicatie via een Docker image deployen. Voer in de root van het project volgende commando's uit:

> docker build -t sample .

> docker run -p 3000:3000 sample

De applicatie is nu beschikbaar op poort 3000.