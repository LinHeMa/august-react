import { supabase } from "../../lib/supabaseClient";

const SignIn = () => {
  const handleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return <button onClick={handleSignIn}>Sign in with Google</button>;
};

export default SignIn;
