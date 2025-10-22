# Enjoy Cafe - Frontend

Website modern pentru Enjoy Cafe, construit cu Angular 18.2, Angular Material și TailwindCSS.

## 🚀 Caracteristici

- **Design modern**: Temă dark elegantă cu accente verzi și efecte glassmorphism
- **Responsive**: Design adaptiv pentru toate dispozitivele
- **Animații fluide**: Micro-animații și tranziții elegante
- **Admin Panel**: Interfață de administrare cu autentificare JWT
- **CRUD Operations**: Gestionare completă a produselor din meniu
- **Accesibilitate**: Conformitate WCAG cu contrast optim și focus management
- **SEO Optimizat**: Meta tags, structured data și performance optimizat

## 🛠️ Tehnologii

- **Angular 18.2** - Framework principal
- **Angular Material** - Componente UI cu temă dark verde
- **TailwindCSS** - Styling utility-first
- **Angular Animations** - Animații și tranziții
- **TypeScript** - Tipizare strictă
- **RxJS** - Programare reactivă

## 📦 Instalare

### Cerințe
- Node.js ≥ 20
- npm ≥ 10

### Pași de instalare

1. **Clonează repository-ul**
```bash
git clone <repository-url>
cd enjoy-cafe
```

2. **Instalează dependențele**
```bash
npm install
```

3. **Configurează variabilele de mediu**
```bash
# Copiază și editează environment files
cp src/environments/environment.ts.example src/environments/environment.ts
cp src/environments/environment.prod.ts.example src/environments/environment.prod.ts
```

4. **Rulează aplicația în development**
```bash
ng serve
```

Aplicația va fi disponibilă la `http://localhost:4200`

## 🏗️ Structura proiectului

```
src/app/
├── core/                    # Servicii și componente core
│   ├── components/         # Header, Footer
│   ├── guards/             # Auth guard
│   ├── interceptors/       # JWT interceptor
│   └── services/           # Auth, Product services
├── shared/                 # Componente și modele partajate
│   ├── components/        # Product card
│   └── models/            # TypeScript interfaces
├── pages/                  # Pagini publice
│   ├── home/              # Pagina principală
│   ├── menu/              # Meniul cu filtre
│   ├── about/             # Despre noi
│   └── contact/           # Contact și formular
└── admin/                 # Modul admin (lazy loaded)
    ├── login/             # Autentificare
    ├── dashboard/         # Dashboard admin
    └── product-form/      # Formular produse
```

## 🎨 Design System

### Culori
- **Verde principal**: `#10b981` (ec-500)
- **Verde accent**: `#34d399` (ec-400)
- **Fundal**: `#0b1720` (ec-bg)
- **Carduri**: Glassmorphism cu blur și transparență

### Componente
- **ec-card**: Carduri cu efect glassmorphism
- **btn-primary**: Butoane cu gradient verde și hover effects
- **animate-floaty**: Animație de plutire pentru elemente decorative
- **animate-fadeUp**: Animație de intrare pentru secțiuni

## 🔐 Autentificare

Sistemul folosește JWT pentru autentificare:
- Token stocat în localStorage
- Interceptor pentru atașarea automată a token-ului
- Guard pentru protejarea rutelor admin
- Expirare token: 8 ore

## 📱 Responsive Design

- **Mobile First**: Design optimizat pentru mobile
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid adaptiv**: 1/2/3 coloane în funcție de ecran
- **Navigation**: Meniu hamburger pe mobile

## ♿ Accesibilitate

- **Contrast AA**: Toate textele respectă standardele WCAG
- **Focus management**: Focus ring vizibil pe toate elementele interactive
- **Alt text**: Imagini cu descrieri alternative
- **ARIA labels**: Etichete pentru screen readers
- **Keyboard navigation**: Navigare completă cu tastatura

## 🚀 Build și Deploy

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --configuration production
```

### Deploy pe Vercel

1. **Conectează repository-ul la Vercel**
2. **Configurează build settings**:
   - Build Command: `ng build --configuration production`
   - Output Directory: `dist/enjoy-cafe`
   - Install Command: `npm install`

3. **Setează variabilele de mediu**:
   - `API_URL`: URL-ul backend-ului în producție

## 🧪 Testing

```bash
# Unit tests
ng test

# E2E tests
ng e2e

# Coverage
ng test --code-coverage
```

## 📊 Performance

- **Lighthouse Score**: ≥ 90 pentru Performance, Best Practices, SEO
- **Lazy Loading**: Module și componente încărcate la cerere
- **Image Optimization**: Imagini SVG și lazy loading
- **Bundle Splitting**: Codul împărțit în chunks optimizate

## 🔧 Scripts disponibile

```bash
ng serve              # Development server
ng build              # Build pentru producție
ng test               # Rulare teste
ng lint               # Linting
ng generate component # Generare componente
```

## 📝 Contribuție

1. Fork repository-ul
2. Creează o branch pentru feature: `git checkout -b feature/nume-feature`
3. Commit modificările: `git commit -m 'Add: descriere feature'`
4. Push la branch: `git push origin feature/nume-feature`
5. Deschide un Pull Request

## 📄 Licență

Acest proiect este licențiat sub MIT License.

## 🆘 Suport

Pentru întrebări sau probleme, deschide un issue pe GitHub sau contactează echipa de dezvoltare.