# Alejandro Ingeniería

Sitio educativo para aprender redes con tutoriales, una ruta de estudio y un glosario. Está hecho con HTML, CSS y JavaScript, sin dependencias de compilación.

- [Abrir sitio](https://alejandroingenieria.me/)
- [Ver el tutorial de VLSM](blog/vlsm-paso-a-paso.html)
- [Explorar la ruta de estudio](ruta/index.html)
- [Consultar el glosario](glosario/index.html)

## Qué puedes probar

1. En el blog, filtra los tutoriales por tema.
2. En la ruta de estudio, sigue el orden de lectura y las actividades de práctica.
3. En el glosario, busca un término como VLSM y revisa los resultados.

## Ejecutar en local

```bash
git clone https://github.com/brayansanpr1694/alejandroingenieria-web.git
cd alejandroingenieria-web
python -m http.server 8000
```

Abre `http://localhost:8000`. Cada tutorial es una página HTML. Los estilos y el comportamiento compartido viven en `assets/style.css` y `assets/main.js`.

## Publicar un tutorial

1. Copia `blog/vlsm-paso-a-paso.html` con un nombre nuevo, por ejemplo `blog/vlans-packet-tracer.html`.
2. Cambia `<title>`, `description`, `canonical`, `og:*`, el bloque JSON-LD, el título y el contenido de `<article>`.
3. Agrega la tarjeta en `blog/index.html` (con su `data-tema` para el filtro) y, si va en la ruta, un paso en `ruta/index.html`.
4. Agrega la URL en `sitemap.xml`.

## Despliegue

El repositorio está preparado para GitHub Pages. El dominio configurado en [`CNAME`](CNAME) es `alejandroingenieria.me`.
