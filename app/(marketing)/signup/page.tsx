import Redirector from "@/components/Redirector";
import { APP_URL } from "@/lib/theme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start free | Dolemai",
  description: "Create your Dolemai account.",
  robots: { index: false, follow: false },
};

export default function SignupRedirect() {
  return <Redirector to={APP_URL + "/signup"} label="sign up" />;
}
