import { supabase } from "../lib/supabaseClient";

export async function getUser() {
  try {
    const { data } = await supabase.from("users").select();
    return data;
  } catch (e) {
    console.error(e);
  }
}
