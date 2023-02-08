"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import { useSession } from "../../auth/UserContextProvider";

interface Props {
  children: ReactNode;
}

const UserSecurity = ({ children }: Props) => {
  const { session } = useSession();
  const router = useRef(useRouter());

  useEffect(() => {
    if (!session?.user) {
      router.current.push("/");
    }
  }, [session]);

  if (!session?.user) return null;

  return <>{children}</>;
};

export default UserSecurity;
