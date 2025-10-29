import { Header } from "@/components/layout/header";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
}
export default function Layout({ children }: props) {

  return (
    <div>
      <Header />
      {children}
    </div>
  )
}