import Redirector from "@/components/Redirector";
import { APP_URL } from "@/lib/theme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | Dolemai",
  description: "Sign in to the Dolemai app.",
  robots: { index: false, follow: false },
};

export default function LoginRedirect() {
  return <Redirector to={APP_URL + "/login"} label="sign in" />;
}
