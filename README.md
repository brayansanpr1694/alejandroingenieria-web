# alejandroingeneria.tech

Sitio de **Alejandro Ingeniería**: portada del canal, blog de tutoriales y contacto para colaboraciones.
HTML + CSS + JS puro, sin dependencias, publicado con GitHub Pages.

## Estructura

```
index.html                 Portada (series, blog, redes, colaboraciones, quién soy)
blog/index.html            Listado del blog (con filtro por tema)
blog/<tutorial>.html       Un archivo por tutorial
ruta/index.html            Ruta de estudio (orden de lectura + práctica)
glosario/index.html        Glosario con buscador
404.html                   Página de error
assets/style.css           Estilos compartidos
assets/main.js             Menú móvil, animaciones y diagrama de ojo
assets/favicon.svg, apple-touch-icon.png, og.png (imagen al compartir en redes)
CNAME                      Dominio personalizado
robots.txt, sitemap.xml    SEO
```

## Publicar un tutorial nuevo

1. Copia `blog/vlsm-paso-a-paso.html` con un nombre nuevo, por ejemplo `blog/vlans-packet-tracer.html`.
2. Cambia `<title>`, `description`, `canonical`, `og:*`, el bloque JSON-LD, el título y el contenido de `<article>`.
3. Agrega la tarjeta en `blog/index.html` (con su `data-tema` para el filtro) y, si va en la ruta, un paso en `ruta/index.html`.
4. Agrega la URL en `sitemap.xml`.

## Conectar el dominio (GitHub Pages)

**1. En GitHub:** repo → *Settings* → *Pages*
- *Source*: Deploy from a branch → `main` / `(root)`
- *Custom domain*: `alejandroingeneria.tech` → Save
- Cuando el certificado esté listo, marca **Enforce HTTPS**.

**2. En el panel DNS del dominio (.TECH / registrador):**

| Tipo  | Nombre / Host | Valor |
|-------|---------------|-------|
| A     | @             | 185.199.108.153 |
| A     | @             | 185.199.109.153 |
| A     | @             | 185.199.110.153 |
| A     | @             | 185.199.111.153 |
| AAAA  | @             | 2606:50c0:8000::153 |
| AAAA  | @             | 2606:50c0:8001::153 |
| AAAA  | @             | 2606:50c0:8002::153 |
| AAAA  | @             | 2606:50c0:8003::153 |
| CNAME | www           | brayansanpr1694.github.io |

Borra cualquier registro A/CNAME de “parking” o redirección que el registrador haya creado en `@` o `www`.
La propagación puede tardar desde minutos hasta 24 h. Comprobar:

```
dig alejandroingeneria.tech +short
dig www.alejandroingeneria.tech +short
```

**3. Recomendado:** verifica el dominio en GitHub (*Settings de tu cuenta* → *Pages* → *Add a domain*) para que nadie más pueda usarlo en Pages; te pide un registro TXT.

## Correos del dominio

Correo en Zoho Mail (plan gratis): buzón `contacto@alejandroingeneria.tech` con el alias `colaboraciones@alejandroingeneria.tech`.
Registros en el DNS: MX `mx.zoho.com` (10), `mx2.zoho.com` (20), `mx3.zoho.com` (50), SPF `v=spf1 include:zohomail.com ~all` y DKIM en `zmail._domainkey`.
Conviven sin problema con los A/CNAME de GitHub Pages.
