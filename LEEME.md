# Tarjeta de sellos LOAMÉ

App de lealtad de código abierto (licencia MIT). Funciona en cualquier celular, tableta o computadora, en cualquier navegador (Chrome, Safari, Edge, Firefox). No necesita cuenta de Claude, ni de ninguna otra plataforma, ni pagar mensualidad.

## Qué incluye

| Archivo | Para qué sirve |
|---|---|
| `index.html` | App de mostrador para el equipo: registrar clientes, dar sellos, canjear premios, enviar la tarjeta por WhatsApp, respaldos y reporte para Excel. |
| `tarjeta.html` | Tarjeta digital del cliente con los colores de LOAMÉ. Se actualiza con cada enlace que le envías y se puede agregar a la pantalla de inicio de su celular. |
| `config.js` | Datos del negocio: WhatsApp, número de sellos, premio, próximo evento. **Es el único archivo que necesitas editar.** |
| `sw.js`, `manifest*.webmanifest`, `icons/` | Permiten instalar la app y abrirla sin internet. |

## Cómo funciona

1. El cliente paga y el mesero escribe su teléfono en la app de mostrador.
2. Si es nuevo, se registra y recibe 1 sello de regalo más el de su visita.
3. El mesero toca **Enviar por WhatsApp**: sale el mensaje desde el WhatsApp del celular del negocio con su avance y el enlace a su tarjeta.
4. El cliente abre el enlace y ve su tarjeta. Su celular guarda siempre la más reciente.
5. Al llegar a 10 sellos aparece **Canjear premio** y la tarjeta empieza otra ronda.

## Publicarla gratis en internet (una sola vez, unos 10 minutos)

Para que los clientes abran su tarjeta desde cualquier lugar, la carpeta debe estar en internet. La forma gratuita recomendada es **GitHub Pages**:

1. Crea una cuenta gratis en github.com (con el correo del negocio).
2. Toca **New repository**. Nombre: `loame-sellos`. Marca **Public**. Toca **Create repository**.
3. Toca **uploading an existing file** y arrastra todos los archivos de esta carpeta (incluida la carpeta `icons`). Toca **Commit changes**.
4. Entra a **Settings › Pages**. En **Branch** elige `main` y `/ (root)`. Toca **Save**.
5. En uno o dos minutos aparece tu dirección, por ejemplo `https://tu-usuario.github.io/loame-sellos/`.
   - App de mostrador: `https://tu-usuario.github.io/loame-sellos/`
   - Tarjeta del cliente: se envía sola en el mensaje de WhatsApp.

Alternativas gratuitas que también sirven: Netlify, Cloudflare Pages o el hosting web de Google Workspace si lo tienes.

> Los registros de clientes **no** se suben a internet: se quedan guardados en el celular de mostrador. Lo único público es la app vacía.

## Instalar en el celular del negocio

1. Abre la dirección de la app de mostrador en el celular del negocio.
2. Android (Chrome): toca **Instalar en este dispositivo**, o menú ⋮ › **Agregar a pantalla principal**.
3. iPhone (Safari): **Compartir › Agregar a pantalla de inicio**.
4. Ya abre como app, también sin internet.

## Respaldos (muy importante)

Los registros viven en el navegador del celular de mostrador. Si se borran los datos del navegador o se cambia de celular, se pierden si no hay respaldo.

- Cada semana toca **Descargar respaldo** y guárdalo en tu correo o Drive.
- Para pasar los registros a otro celular: **Restaurar respaldo** y elige el archivo.
- **Descargar Excel (CSV)** sirve para reportes: clientes, sellos, visitas, canjes y por qué activación llegaron.

## Cambiar datos del negocio

Edita `config.js` (en GitHub: abre el archivo y toca el lápiz):

- `whatsapp`: número del negocio.
- `meta`: sellos para el premio.
- `premio`: texto del premio.
- `proximoEvento`: el evento que ven los clientes en su tarjeta. Cámbialo cada vez que haya uno nuevo.
- `clave`: si la cambias, las tarjetas enviadas antes dejan de ser válidas.

Después de cambiar archivos, sube el número en `VERSION` dentro de `sw.js` (por ejemplo `loame-sellos-v2`) para que los celulares descarguen la versión nueva.

## Límites a conocer

- Los registros están en **un solo dispositivo**. Si más de un celular registra sellos, cada uno tendrá su lista; se unen con los respaldos.
- La tarjeta del cliente se actualiza con cada enlace nuevo, no sola.
- La tarjeta lleva un código de verificación: si alguien cambia el enlace, aparece como no válida. La fuente oficial de sellos siempre es la app de mostrador.
- El QR y las tipografías necesitan internet la primera vez; después quedan guardados.

## Siguiente paso posible

Sincronizar varios dispositivos sin costo usando una hoja de Google Sheets como base de datos (Google Apps Script). Se puede agregar sin cambiar la forma de trabajar.
