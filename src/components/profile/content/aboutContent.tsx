import { ReactNode } from "react";

type props = {
  data: string | ReactNode;
}
export const AboutContent = ({ data }: props) => {

  return (
    <div className="text-sm md:text-base text-foreground/90" style={{ whiteSpace: "pre-line" }}>
      {data}
    </div>
  )
}