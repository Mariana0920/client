# Gestionare Cupoane

Acest proiect este o aplicație pentru gestionarea cupoanelor de reduceri. Este alcătuit dintr-un server Node.js folosind Express pentru gestionarea cererilor API și un client React pentru interfața utilizator.

## Configurare

### Server

1. **Instalare dependențe server:**

   ```bash
   cd server
   npm install
Creare fișier de configurare pentru MongoDB:
{
  "database": "mongodb://localhost:27017/nume_baza_date",
  "username": "utilizator",
  "password": "parola",
  "dialect": "mongodb"
}
Rulare server: npm start
Serverul va porni la adresa http://localhost:3000/api/cupoane

Structura Proiectului
client/: Directorul clientului React.
server/: Directorul serverului Node.js.