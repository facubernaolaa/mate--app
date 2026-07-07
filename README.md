# Mate Automático — PWA para iPhone

## Archivos
- `index.html` — app principal
- `manifest.json` — configuración PWA
- `sw.js` — service worker (permite instalar la app)
- `icons/` — íconos para iPhone

## Cómo subir a GitHub Pages (gratis)

### Paso 1 — Crear cuenta en GitHub
Si no tenés, andá a https://github.com y creá una cuenta gratis.

### Paso 2 — Crear repositorio
1. Click en "New repository"
2. Nombre: `mate-app` (o el que quieras)
3. Marcá "Public"
4. Click en "Create repository"

### Paso 3 — Subir los archivos
En la página del repositorio:
1. Click en "uploading an existing file"
2. Arrastrá todos los archivos: `index.html`, `manifest.json`, `sw.js`
3. Creá la carpeta `icons` y subí los dos PNG adentro
4. Click en "Commit changes"

### Paso 4 — Activar GitHub Pages
1. Ir a Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main` / `root`
4. Click en Save
5. En unos minutos tu app estará en: `https://TU_USUARIO.github.io/mate-app`

## Instalar en iPhone

1. Abrí la URL en **Safari** (importante: no Chrome)
2. Tocá el botón **Compartir** (cuadrado con flecha)
3. Tocá **"Agregar a pantalla de inicio"**
4. Confirmá con **"Agregar"**
5. La app aparece en tu homescreen como ícono

## Usar la app

1. Conectá el iPhone y el ESP32 a la **misma red WiFi**
2. Abrí la app desde el ícono
3. Ingresá la IP del ESP32 (la ves en el Serial Monitor: `IP del ESP32: 192.168.x.x`)
4. Tocá Conectar → configurá los valores → Enviar config → Iniciar
