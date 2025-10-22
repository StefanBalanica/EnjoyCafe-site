# Ghid pentru Modificarea Informațiilor - Enjoy Cafe

## 📍 Unde să modifici informațiile de contact

### 1. Pagina de Contact
**Fișier:** `src/app/pages/contact/contact.component.html`

#### Adresa (liniile 104-108):
```html
<p class="text-[var(--ec-muted)]">
  Strada Aromelor 123<br>
  Sector 1, București 010101<br>
  România
</p>
```

#### Telefon (linia 119):
```html
<p class="text-[var(--ec-muted)]">+40 21 555 1234</p>
```

#### Email (linia 130):
```html
<p class="text-[var(--ec-muted)]">contact@enjoycafe.ro</p>
```

#### Program (liniile 142-144):
```html
<p>Luni - Vineri: 7:00 - 22:00</p>
<p>Sâmbătă - Duminică: 8:00 - 23:00</p>
```

### 2. Harta Google Maps
**Fișier:** `src/app/pages/contact/contact.component.html` (liniile 153-160)

Pentru a schimba locația pe hartă, înlocuiește URL-ul din `src`:
```html
<iframe 
  title="Harta Enjoy Cafe"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.1234567890!2d26.1234567!3d44.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDA3JzI0LjQiTiAyNsKwMDcnMjQuNCJF!5e0!3m2!1sro!2sro!4v1234567890123!5m2!1sro!2sro"
  width="100%" 
  height="300" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

### 3. Footer (informații generale)
**Fișier:** `src/app/core/components/footer/footer.component.html`

Verifică dacă există informații de contact și în footer.

### 4. Footer (rețele sociale)
**Fișier:** `src/app/core/components/footer/footer.component.html`

#### Facebook (linia 21):
```html
href="https://www.facebook.com/enjoycafecoresi"
```

#### Instagram (linia 29):
```html
href="https://www.instagram.com/enjoycafecoresi?igsh=MTg2bXJ2MDFsampmcQ=="
```

#### TikTok (linia 37):
```html
href="https://www.tiktok.com/@enjoycafecoresi"
```

### 5. Pagina Despre
**Fișier:** `src/app/pages/about/about.component.html`

Verifică dacă există informații despre cafenea care trebuie actualizate.

## 🔧 Cum să modifici

### Pasul 1: Deschide fișierul
1. Navighează la `d:\site-cafenea\enjoy-cafe\src\app\pages\contact\`
2. Deschide `contact.component.html`

### Pasul 2: Găsește informațiile
1. Caută textul pe care vrei să-l modifici (ex: "Strada Aromelor 123")
2. Înlocuiește cu informațiile tale

### Pasul 3: Salvează și verifică
1. Salvează fișierul (Ctrl+S)
2. Aplicația se va reîncărca automat
3. Verifică pe `http://localhost:4201/contact`

## 📝 Exemple de modificări

### Schimbarea adresei:
```html
<!-- ÎNAINTE -->
<p class="text-[var(--ec-muted)]">
  Strada Aromelor 123<br>
  Sector 1, București 010101<br>
  România
</p>

<!-- DUPĂ -->
<p class="text-[var(--ec-muted)]">
  Strada Ta 456<br>
  Sector 2, București 020202<br>
  România
</p>
```

### Schimbarea telefonului:
```html
<!-- ÎNAINTE -->
<p class="text-[var(--ec-muted)]">+40 21 555 1234</p>

<!-- DUPĂ -->
<p class="text-[var(--ec-muted)]">+40 21 123 4567</p>
```

### Schimbarea email-ului:
```html
<!-- ÎNAINTE -->
<p class="text-[var(--ec-muted)]">contact@enjoycafe.ro</p>

<!-- DUPĂ -->
<p class="text-[var(--ec-muted)]">info@enjoycafe.ro</p>
```

## ⚠️ Important

- **Nu șterge** clasele CSS (ex: `text-[var(--ec-muted)]`)
- **Păstrează** structura HTML
- **Folosește** `<br>` pentru a trece la linia următoare
- **Testează** modificările în browser

## 🚀 Aplicația rulează pe

- **URL:** http://localhost:4201
- **Contact:** http://localhost:4201/contact
- **Despre:** http://localhost:4201/despre
