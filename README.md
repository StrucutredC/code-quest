# CODE QUEST

Plataforma educativa arcade para practicar programación en C.

## Requisitos
- Node.js 20.9 o superior
- npm

## Instalar y ejecutar
```bash
npm install
npm run dev
```
Abre http://localhost:3000

## Compilar para producción
```bash
npm run build
npm start
```

## Primera versión incluida
- Dashboard arcade y cuatro mundos.
- Retos progresivos de C con editor Monaco.
- XP, niveles y registro local de retos.
- Temporizador por reto y pistas.
- Perfiles múltiples en un mismo dispositivo.
- Clasificación local entre perfiles.
- Pregunta de muestra para examen simulado.
- Persistencia en localStorage.

## Importante: alcance actual
El botón “Marcar como completado” registra el avance, pero todavía no compila ni ejecuta C. Para evaluar código real se debe integrar un servicio aislado como Judge0 y validar los casos de prueba desde servidor. El ranking actual es local al navegador/dispositivo; un ranking global requiere base de datos y autenticación. No guardar secretos ni claves API en el frontend.

## Despliegue
El proyecto está preparado para Vercel. Importa el repositorio, selecciona Next.js y deja Root Directory en `./`. Cada push a `main` generará un nuevo despliegue.
