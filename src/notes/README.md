# Cómo añadir una nota

1. Crea un archivo nuevo en esta carpeta, por ejemplo `2026-11-ia-en-quirofano.md`.
2. Empieza con esta cabecera y escribe debajo en Markdown normal:

```markdown
---
title: Título de la nota
date: 2026-11-02
summary: Una o dos frases que se ven antes de abrir la nota.
draft: false
---

Primer párrafo.

## Un subtítulo

- Una lista
- **Negritas** y [enlaces](https://www.app-pbm.com)
```

3. Si pones `draft: true`, la nota no se publica.
4. Las notas se ordenan solas por fecha, de la más reciente a la más antigua.
5. Haz commit y push: GitHub publica la web automáticamente en un par de minutos.
