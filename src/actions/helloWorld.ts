import { supabase } from "../lib/supabaseClient";

export async function helloWorld() {
  try {
    const response = await supabase.functions.invoke("hello-world", {
      body: { name: "react" },
    });
    const { data, error } = response;
    if (error) throw new Error(error);
    return data;
    
  } catch (e) {
    console.error(e);
  }
}
