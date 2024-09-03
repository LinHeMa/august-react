import { createClient } from "@supabase/supabase-js";

const process = import.meta.env;
const env = process.MODE;
const supabaseUrl =
  env === "production"
    ? import.meta.env.SUPABASE_URL
    : import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey =
  env === "production"
    ? import.meta.env.SUPABASE_URL
    : import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
