/* =========================================================
   LOAMÉ · Tarjeta de sellos — CONFIGURACIÓN
   Edita solo los valores de este bloque. Guarda y vuelve a subir el archivo.
   ========================================================= */
window.LOAME = {
  negocio: "LOAMÉ Buena Vibra Café",
  whatsapp: "9996420775",          // WhatsApp del negocio, 10 dígitos
  lada: "52",                      // México
  meta: 10,                        // sellos para el premio
  selloRegalo: true,               // 1 sello de regalo al registrarse
  premio: "café americano o jugo del día",
  proximoEvento: "Noche de Calabazas · Pinta & Brindis · miércoles 28 de octubre, 17:00 a 20:00",
  // Dirección pública de tarjeta.html. Déjala vacía si subes la carpeta completa
  // (la app la calcula sola). Llénala solo si abres index.html desde el celular sin hosting.
  urlTarjeta: "",
  clave: "loame-bv"                // cambia esta palabra para invalidar tarjetas viejas
};

/* ---------- No editar debajo de esta línea ---------- */
(function (L) {
  L.hsh = function (t) { let h = 5381; for (let i = 0; i < t.length; i++) h = ((h << 5) + h + t.charCodeAt(i)) >>> 0; return h.toString(36).slice(-5); };
  L.b64u = function (t) { return btoa(unescape(encodeURIComponent(t))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); };
  L.unb64u = function (t) { t = t.replace(/-/g, "+").replace(/_/g, "/"); while (t.length % 4) t += "="; return decodeURIComponent(escape(atob(t))); };
  L.token = function (c) {
    const j = JSON.stringify({ n: (c.nombre || "").slice(0, 24), s: Math.min(c.sellos || 0, L.meta), r: c.regalo && !(c.canjes > 0) ? 1 : 0, c: c.canjes || 0, f: c.ultimaVisita || "", t: (c.tel || "").slice(-4) });
    const b = L.b64u(j); return b + "." + L.hsh(L.clave + b);
  };
  L.leeToken = function (h) {
    try { const [b, k] = String(h || "").replace(/^#/, "").split("."); if (!b || !k || L.hsh(L.clave + b) !== k) return null; return JSON.parse(L.unb64u(b)); } catch (e) { return null; }
  };
  L.fecha = function (d) { if (!d) return "—"; const p = d.split("-"); return p[2] + "/" + p[1] + "/" + p[0]; };
  L.hoy = function () { return new Date().toLocaleDateString("en-CA", { timeZone: "America/Merida" }); };
})(window.LOAME);
