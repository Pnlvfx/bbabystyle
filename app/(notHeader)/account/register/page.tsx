"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Register1 from "../../../../components/auth/register/Register1";
import Register2 from "../../../../components/auth/register/Register2";
import { useSession } from "../../../../components/auth/UserContextProvider";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [fase2, setFase2] = useState(false);
  const router = useRouter();
  const { session } = useSession();
  const routerRef = useRef(router);

  useEffect(() => {
    if (session?.user) {
      routerRef.current.push("/");
    }
  }, [session]);
  return (
    <div className="block bg-white text-black">
      <main>{!fase2 ? <Register1 setFase2={setFase2} email={email} setEmail={setEmail} /> : <Register2 email={email} setFase2={setFase2} />}</main>
    </div>
  );
};

export default RegisterPage;
