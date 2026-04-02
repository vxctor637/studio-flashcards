module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Metodo no permitido." });
    return;
  }

  const supabaseUrl = process.env.SUPABASE_URL || "";
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "";

  if (!supabaseUrl || !supabaseAnonKey) {
    res.status(500).json({
      error: "Faltan SUPABASE_URL o SUPABASE_ANON_KEY en las variables de entorno."
    });
    return;
  }

  res.status(200).json({
    supabaseUrl,
    supabaseAnonKey
  });
};
