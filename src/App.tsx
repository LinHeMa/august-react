import { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./lib/supabaseClient";
import SignIn from "./components/auth/SignIn";
import { Session } from "@supabase/supabase-js";
import { getUser } from "./actions/getUser";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    getUser().then((data) => console.log(data));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);
  return (
    <div>
      {session ? <div>Welcome, {session.user.email}!</div> : <SignIn />}
    </div>
  );
}

export default App;
