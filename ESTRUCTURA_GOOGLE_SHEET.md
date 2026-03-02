# Estructura esperada del Google Sheet — Noticias

## Columnas obligatorias

El Google Sheet debe tener **exactamente estos encabezados** en la primera fila:

| Titulo | Fecha | Contenido | Imagen_Inicio | Imagen_Final | Slug | Imagen_Hero | Boton_Link | Boton_Texto |
|--------|-------|-----------|---------------|--------------|------|-------------|------------|-------------|

## Descripción de cada columna

| Columna | Obligatoria | Descripción | Ejemplo |
|---------|:-----------:|-------------|---------|
| **Titulo** | ✅ Sí | Título de la noticia. Se usa para generar el slug si no se provee uno. | `Día del Estudiante 2026` |
| **Fecha** | No | Fecha de publicación en formato legible. | `01/03/2026` |
| **Contenido** | No | Cuerpo/texto de la noticia. Puede ser largo. | `Hoy celebramos el Día del Estudiante con...` |
| **Imagen_Inicio** | No | URL pública de la imagen principal (se muestra arriba del artículo y como miniatura en el listado). | `https://drive.google.com/uc?id=XXXXX` |
| **Imagen_Final** | No | URL pública de la imagen secundaria (se muestra al final del artículo). | `https://drive.google.com/uc?id=YYYYY` |
| **Slug** | No | Identificador URL-friendly. Si se deja vacío, se genera automáticamente desde el Título. | `dia-del-estudiante-2026` |
| **Imagen_Hero** | No | URL pública de la imagen del banner hero de la página principal. Solo se usa el primer valor no vacío. | `https://drive.google.com/uc?id=ZZZZZ` |
| **Boton_Link** | No | URL del botón de acción personalizado. Solo se muestra si ambos campos (link y texto) están completos. | `https://ejemplo.com/inscripcion` |
| **Boton_Texto** | No | Texto del botón de acción personalizado. | `Inscríbete Aquí` |
| **Hero_Filtro_Color** | No | Color del filtro/overlay del hero en formato hexadecimal. Si está vacío, se usa el color institucional del tema. | `#1B512C` |
| **Hero_Filtro_Activo** | No | Activa o desactiva el filtro del hero. Por defecto está activo. Usar `no` o `false` para desactivar, cualquier otro valor lo mantiene activo. | `si` o `no` |

## Ejemplo de filas

| Titulo | Fecha | Contenido | Imagen_Inicio | Imagen_Final | Slug |
|--------|-------|-----------|---------------|--------------|------|
| Día del Estudiante 2026 | 01/03/2026 | Hoy celebramos el Día del Estudiante con actividades recreativas, presentaciones artísticas y un acto cívico especial. | <https://ejemplo.com/foto1.jpg> | <https://ejemplo.com/foto2.jpg> | |
| Inicio Año Escolar | 03/03/2026 | Damos la bienvenida a todos nuestros alumnos y familias al año escolar 2026. | <https://ejemplo.com/foto3.jpg> | | inicio-ano-escolar |
| Taller de Medio Ambiente | 15/03/2026 | Se realizó un taller de educación ambiental con la participación de toda la comunidad educativa. | | | |

## Notas importantes

- **La primera fila DEBE ser la fila de encabezados** (los nombres de columna exactos).
- Las noticias se muestran **en el orden en que aparecen en el Sheet** (las más recientes deberían ir primero).
- Si `Titulo` está vacío, esa fila se ignora.
- Si `Slug` está vacío, se genera automáticamente. Ejemplo: `Día del Estudiante 2026` → `dia-del-estudiante-2026`.
- Las URLs de imágenes deben ser **públicas** (accesibles sin login).
  - Para Google Drive: Archivo → Compartir → Cualquiera con el enlace. Usar formato: `https://drive.google.com/uc?id=ID_DEL_ARCHIVO`

## Cómo publicar el Sheet como CSV

1. Abrir el Google Sheet
2. Ir a **Archivo → Compartir → Publicar en la web**
3. Seleccionar la hoja correcta
4. Elegir formato **CSV**
5. Hacer clic en **Publicar**
6. Copiar la URL generada
