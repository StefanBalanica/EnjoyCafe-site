# Enjoy Cafe - Backend API

API REST pentru Enjoy Cafe, construit cu Node.js, Express și MongoDB.

## 🚀 Caracteristici

- **RESTful API**: Endpoints pentru gestionarea produselor și autentificare
- **Autentificare JWT**: Sistem securizat de autentificare cu token-uri
- **Validare date**: Validare strictă a input-urilor cu express-validator
- **Securitate**: CORS, rate limiting, helmet pentru protecție
- **MongoDB**: Bază de date NoSQL pentru produse și utilizatori
- **Seed data**: Script pentru popularea inițială a bazei de date

## 🛠️ Tehnologii

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MongoDB** - Bază de date NoSQL
- **Mongoose** - ODM pentru MongoDB
- **JWT** - Autentificare cu token-uri
- **bcryptjs** - Hash-uirea parolelor
- **Helmet** - Securitate HTTP headers
- **CORS** - Cross-Origin Resource Sharing
- **express-rate-limit** - Rate limiting
- **express-validator** - Validare input

## 📦 Instalare

### Cerințe
- Node.js ≥ 20
- npm ≥ 10
- MongoDB Atlas (cloud) sau MongoDB local

### Pași de instalare

1. **Clonează repository-ul**
```bash
git clone <repository-url>
cd enjoy-cafe-api
```

2. **Instalează dependențele**
```bash
npm install
```

3. **Configurează variabilele de mediu**
```bash
# Creează fișierul .env
cp .env.example .env
```

Editează `.env` cu valorile corecte:
```env
PORT=5000
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/enjoycafe
JWT_SECRET=your_super_secret_jwt_key
FRONTEND_URL=http://localhost:4200
ADMIN_EMAIL=admin@enjoycafe.ro
ADMIN_PASS=admin123!
NODE_ENV=development
```

4. **Populează baza de date**
```bash
npm run seed
```

5. **Rulează serverul**
```bash
# Development
npm run dev

# Production
npm start
```

Serverul va fi disponibil la `http://localhost:5000`

## 📚 API Endpoints

### Public Routes

#### GET /api/products
Returnează lista tuturor produselor.

**Response:**
```json
[
  {
    "_id": "64a1b2c3d4e5f6789abcdef0",
    "name": "Espresso",
    "price": 9,
    "description": "Shot intens de cafea",
    "image": "https://example.com/espresso.jpg",
    "category": "cafea",
    "featured": true,
    "createdAt": "2023-07-01T10:00:00.000Z",
    "updatedAt": "2023-07-01T10:00:00.000Z"
  }
]
```

### Protected Routes (require JWT token)

#### POST /api/login
Autentificare utilizator.

**Request:**
```json
{
  "email": "admin@enjoycafe.ro",
  "password": "admin123!"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### POST /api/products
Creează un produs nou.

**Headers:** `Authorization: Bearer <token>`

**Request:**
```json
{
  "name": "Cappuccino",
  "price": 12,
  "description": "Cafea cu spumă de lapte",
  "image": "https://example.com/cappuccino.jpg",
  "category": "cafea",
  "featured": true
}
```

#### PUT /api/products/:id
Actualizează un produs existent.

**Headers:** `Authorization: Bearer <token>`

#### DELETE /api/products/:id
Șterge un produs.

**Headers:** `Authorization: Bearer <token>`

## 🔐 Autentificare

Sistemul folosește JWT pentru autentificare:

1. **Login**: Trimite email și parolă la `/api/login`
2. **Token**: Serverul returnează un JWT token
3. **Autorizare**: Include token-ul în header-ul `Authorization: Bearer <token>`
4. **Expirare**: Token-ul expiră în 8 ore

## 🛡️ Securitate

### Rate Limiting
- **Login**: Max 5 încercări per 15 minute per IP
- **General**: Rate limiting pentru toate endpoint-urile

### CORS
- Configurat pentru a permite doar frontend-ul specificat
- Credentials enabled pentru cookie-uri

### Helmet
- Headers de securitate HTTP
- Protecție împotriva XSS, clickjacking, etc.

### Validare
- Validare strictă a tuturor input-urilor
- Sanitizare și normalizare date
- Mesaje de eroare clare

## 📊 Modele de date

### Product
```javascript
{
  name: String,        // Numele produsului (required, min 2 chars)
  price: Number,      // Prețul în lei (required, min 1)
  description: String, // Descrierea produsului
  image: String,      // URL imagine (required, valid URL)
  category: String,   // Categoria (enum: cafea, ceai, desert, snack, altceva)
  featured: Boolean,  // Produs recomandat (default: false)
  createdAt: Date,   // Data creării
  updatedAt: Date    // Data ultimei actualizări
}
```

### User
```javascript
{
  email: String,      // Email unic (required, valid email)
  password: String,   // Parolă hash-uită (required, min 6 chars)
  createdAt: Date,   // Data creării
  updatedAt: Date    // Data ultimei actualizări
}
```

## 🗄️ Baza de date

### MongoDB Atlas Setup

1. **Creează cluster** pe MongoDB Atlas
2. **Configurează accesul**:
   - Whitelist IP-ul serverului
   - Creează utilizator cu permisiuni de read/write
3. **Obține connection string**:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/enjoycafe
   ```

### Seed Data

Scriptul `seed.js` creează:
- Utilizator admin cu credențiale din `.env`
- 6 produse demo cu imagini de la Unsplash
- Categorii: cafea, ceai, desert, snack

## 🚀 Deploy

### Render.com

1. **Conectează repository-ul**
2. **Configurează build settings**:
   - Build Command: `npm install`
   - Start Command: `npm start`
3. **Setează variabilele de mediu**:
   - `MONGO_URL`
   - `JWT_SECRET`
   - `FRONTEND_URL`
   - `ADMIN_EMAIL`
   - `ADMIN_PASS`

### Railway

1. **Deploy din GitHub**
2. **Configurează variabilele de mediu**
3. **Railway va detecta automat** `package.json` și va rula `npm start`

## 🧪 Testing

```bash
# Teste unitare (când vor fi implementate)
npm test

# Teste de integrare
npm run test:integration

# Coverage
npm run test:coverage
```

## 📝 Logging

Serverul folosește console.log pentru logging:
- Conexiuni MongoDB
- Erori de autentificare
- Erori de validare
- Erori generale

Pentru producție, recomandăm integrarea cu servicii de logging precum Winston sau Morgan.

## 🔧 Scripts disponibile

```bash
npm start          # Rulează serverul în producție
npm run dev        # Rulează cu nodemon (development)
npm run seed       # Populează baza de date
npm test           # Rulare teste
```

## 📊 Monitoring

Pentru monitorizarea în producție:
- **Uptime**: UptimeRobot sau Pingdom
- **Performance**: New Relic sau DataDog
- **Errors**: Sentry pentru tracking erori
- **Logs**: Papertrail sau Loggly

## 🆘 Troubleshooting

### Probleme comune

1. **MongoDB Connection Error**
   - Verifică connection string-ul
   - Asigură-te că IP-ul este whitelisted
   - Verifică credențialele utilizatorului

2. **CORS Errors**
   - Verifică `FRONTEND_URL` în `.env`
   - Asigură-te că frontend-ul rulează pe URL-ul corect

3. **JWT Errors**
   - Verifică `JWT_SECRET` în `.env`
   - Asigură-te că token-ul nu a expirat

## 📄 Licență

Acest proiect este licențiat sub MIT License.

## 🆘 Suport

Pentru întrebări sau probleme, deschide un issue pe GitHub sau contactează echipa de dezvoltare.


