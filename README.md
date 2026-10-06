# David Guallar | Web personal

Web personal publicada en **https://guallar7.github.io/**: proyectos, notas e IA práctica desde la medicina y la anestesia.

## Proyectos destacados

- [app-PBM](https://www.app-pbm.com)
- [Estatuto Médico Propio](https://guallar7.github.io/estatuto-medico-propio/index.html)
- [app-builder](https://github.com/Guallar7/app-builder/)

## Escribir una nota

Crea un archivo `.md` en `src/notes/`. Las instrucciones están en [src/notes/README.md](src/notes/README.md).

## Desarrollo

```bash
npm install
npm run dev
```

## Publicación

Antes de publicar, ejecuta `npm run lint` y `npm run build`.
La compilación genera el HTML de la portada con `scripts/prerender.mjs`, usando
el mismo componente React y el mismo filtro de notas publicadas que el navegador.
El contenido se puede leer sin JavaScript; React activa después las interacciones
mediante hidratación. No edites `dist/index.html` a mano.

Los iconos y el manifiesto están en `public/`. El manifiesto usa el modo `browser`
para conservar el comportamiento de una web personal normal.

Cada `git push` a la rama `main` compila la web y la publica en GitHub Pages
(`.github/workflows/deploy.yml`). Tarda un par de minutos.
