# Proyecto E-commerce — Pre-entrega

Pequeño proyecto de e-commerce desarrollado como pre‑entrega para el curso de React (Talento Tech). Incluye gestión de usuarios y productos, modales, formularios y consumo de una API mock.

---

## Características
- Listado y CRUD básico de productos.
- Gestión de usuarios (listar, editar, borrar, cambiar rol).
- Componentes reutilizables (Modal, CardProduct, InputBox, etc.).
- Validaciones en formularios con feedback de errores.
- Diseño responsive (tabla con scroll / tarjetas en mobile).
- Integración con API mock (ej. mockapi.io).

---

## Tecnologías
- React
- Tailwind CSS
- Vite (o Create React App según configuración)
- Fetch API para llamadas HTTP
- mockapi.io (o similar) como API de prueba

---

## Requisitos
- Node.js >= 16
- npm (o yarn)

---

## Instalación (Windows)
1. Clonar el repo:
```bash
git clone https://github.com/TomasBozzano/E-commerce-TalentoTech.git
cd E-commerce-TalentoTech
```

2. Instalar dependencias:
```bash
npm i
```

3. Variables de entorno
Crear un archivo `.env` en la raíz (si aplica) con la URL de la API:
```
VITE_API_URL=MOCK_API
```
(Ajustar según tu mock o proxy)

4. Ejecutar en desarrollo:
```bash
npm run start
# o
npm run dev
```

5. Compilar para producción:
```bash
npm run build
```

---

## Notas sobre CORS
Si trabajas con mockapi.io y recibes errores CORS al usar PATCH, opciones:
- Usar PUT en lugar de PATCH (si el mock lo soporta).
- Configurar un proxy en Vite (server.proxy) y apuntar las peticiones a `/api/...`.
- Verificar la respuesta OPTIONS (preflight) y los encabezados Access-Control-Allow-*.

---

## Estructura recomendada
- src/
  - components/      # Componentes reutilizables (Modal, Button, CardProduct...)
  - pages/           # Páginas (products, dashboard...)
  - services/        # Lógica de API (products.service, auth.service...)
  - hooks/           # Hooks personalizados (useProduct, useAuth...)
  - assets/
  - styles/

---

## Buenas prácticas
- Mantener los modales en un portal (ReactDOM.createPortal) para evitar problemas de stacking context.
- Controlar inputs como controlled components (value + onChange).
- Usar un estado `refresh` o callbacks `onSaved` para recargar listas tras CRUD, evita efectos infinitos en useEffect.
- Mostrar errores de validación en el render (no solo con clases).

---

## Contribuir
1. Crear branch feature: `git checkout -b feat/nombre-feature`
2. Commit y push: `git commit -m "feat: ..."` / `git push`
3. Abrir PR describiendo cambios.

---

## Autor
Tomas Bozzano

---

## Licencia
Proyecto para fines educativos. Adaptar según necesidad.