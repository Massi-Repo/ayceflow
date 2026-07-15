// ============================================================================
// AYCEflow — config.js
// ============================================================================
// QUESTO E' L'UNICO FILE CHE DEVI TOCCARE.
// Ci metti tre cose:
//   1) SUPABASE_URL e SUPABASE_ANON_KEY: le trovi su supabase.com
//      → Project Settings → API
//   2) SLUG: il codice identificativo del locale (lo scegliamo noi di Pezzanera
//      quando attiviamo un cliente, es. "sakura", "trattoriamario", "demo").
//      Va nei token dei QR e nel database. Una parola sola, niente spazi.
// ============================================================================
window.AYCE_CFG = {
  SUPABASE_URL:      "https://INCOLLA-QUI.supabase.co",
  SUPABASE_ANON_KEY: "INCOLLA-QUI-LA-CHIAVE-ANON",
  SLUG:              "demo",   // ← codice del locale (lo scegli tu)
};
