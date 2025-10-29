import Image from "next/image"
import Link from "next/link"

type props = {
  width: number;
  height: number;
}
export const Logo = ({ width, height }: props) => {

  return (
    <Link href={"/"} className="inline-block">
      <Image
        src={"/linkedin_logo.jpg"}
        alt="linkedin_logo"
        width={width}
        height={height}
      />
    </Link>
  )
}