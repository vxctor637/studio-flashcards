# FlashCards de Estudio con IA

Aplicacion web para crear tarjetas de estudio desde una materia, un tema y apuntes opcionales.

## Que hace ahora

- Usa una interfaz web simple que puedes abrir directamente.
- Intenta generar tarjetas con IA usando un backend seguro en `api/flashcards.js`.
- Si OpenAI no esta configurado todavia, usa un modo local de respaldo para que la app siga funcionando.

## Archivos principales

- `index.html`: interfaz principal
- `styles.css`: estilos
- `app.js`: logica del frontend
- `api/flashcards.js`: backend para llamar a OpenAI
- `vercel.json`: configuracion minima para publicarlo facil

## Importante

No pongas tu `OPENAI_API_KEY` dentro de `app.js` ni en el navegador.
La clave debe ir en variables de entorno del servidor o de Vercel.

## Como publicarla con IA

1. Sube esta carpeta a GitHub.
2. Importa el proyecto en Vercel.
3. En Vercel, agrega la variable de entorno `OPENAI_API_KEY`.
4. Publica el proyecto.
5. Abre la URL publica desde tu telefono o compartela con otras personas.

## Nota tecnica

El backend usa OpenAI Responses API y solicita salida en formato JSON estructurado para recibir un arreglo de tarjetas con `question` y `answer`.
