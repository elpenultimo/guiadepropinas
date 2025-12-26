# Guía de Propinas

Proyecto Next.js 14 (App Router) en TypeScript para consultar rápidamente las normas de propinas por país. Listo para desplegar en Vercel.

## Requisitos
- Node 18.17 o superior
- npm

## Instalación
```bash
npm install
```

## Comandos
```bash
npm run dev     # desarrollo
npm run build   # build de producción
npm run start   # servidor de producción
npm run lint    # análisis estático
```

## Estructura de rutas
- `/` Home con buscador y lista de países
- `/paises` Listado completo con filtro
- `/pais/[slug]` Detalle por país (404 si no existe)
- `/privacidad` Política de privacidad
- `/aviso` Aviso legal
- `/sitemap.xml` y `/robots.txt` generados por handlers

## Datos locales
Los 12 países iniciales viven en `data/paises.ts`. Incluyen moneda, resumen por sector, notas y FAQs.

## Estilos
Tailwind CSS + estilos globales minimalistas en `app/globals.css`.

## Deploy
Configurado para Vercel sin dependencias externas ni llamadas a APIs.
