import Image from "next/image"
import { Logo } from "../logo"

export const AsideCopyright = () => {

  return (
    <div className="text-xs flex justify-center items-center gap-2 w-56">
      <Logo width={16} height={16} />
      LinkedIn Corporation &copy; 2025
    </div>
  )
}