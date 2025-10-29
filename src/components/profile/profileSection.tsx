import { ExternalLink, Pen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { DropdownInterest } from "./DropdownInterest"
import { buttonOutlineBlueStyle, buttonOutlineStyle, iconStyle, profileSectionStyle } from "@/styles/classnames"
import { User } from "@/types/user"

type props = {
  data: User;
}
export const ProfileSection = ({ data }: props) => {

  return (
    <div className={profileSectionStyle}>
      <div className="relative w-full z-0">
        <Image
          src={`/user/${data.cover ?? 'empty_cover.png'}`}
          alt="cover"
          width={1200} height={320}
          className="w-full max-h-56 object-cover"
        />
        <div className="absolute top-4 right-4 p-2 bg-white rounded-full cursor-pointer">
          <Pen className="text-primary w-4 h-4 stroke-3" />
        </div>
      </div>
      <div className="flex flex-col gap-5 p-3 md:p-6 pt-0">
        <div className="flex justify-between items-start">
          <div className="relative w-28 h-28 md:w-40 md:h-40 -mt-16 md:-mt-28 rounded-full overflow-hidden border-4 md:border-[6px] border-border z-10">
            <Image
              src={`/user/${data.avatar ?? 'empty_avatar.png'}`}
              alt="foto de usuario"
              width={160} height={160}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={iconStyle}>
            <Pen className="w-5 h-5" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold -mb-2">{data.name ?? "Nome do usuário"}</h1>
            <p className="text-foreground/90 text-sm md:text-base">{data.bio ?? "Desenvolvedor Front-End Júnior | React.js, Next.js, TypeScript, JavaScript, Tailwind, HTML, CSS | Sass, Git & GitHub | Node.js Básico"}</p>
            <div className="flex gap-4 text-sm">
              <p className="text-foreground/70">{data.city}, {data.state}, {data.country}</p>
              <div className="text-primary font-semibold cursor-pointer">Informações de contato</div>
            </div>
            {data.website &&
              <Link href={data.website} target="_blank" className="flex items-center gap-4 w-fit text-primary font-semibold text-sm hover:underline">
                Portfolio <ExternalLink className="w-4 stroke-3" />
              </Link>
            }
            <Link href={`#`} className="flex items-center gap-4 w-fit text-primary font-semibold text-sm hover:underline">
              52 conexões
            </Link>
          </div>
          <div>
            <div className="flex items-center gap-2 sm:min-w-64">
              <div className="w-8 h-8 bg-muted-foreground"></div>
              <p className="text-sm">Nome do curso</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:flex gap-4">
          <DropdownInterest />
          <Button variant={"outline"} className={buttonOutlineBlueStyle}>
            Aprimorar Perfil
          </Button>
          <Button variant={"outline"} className={buttonOutlineStyle + " col-span-2"}>Recursos</Button>
        </div>
      </div>
    </div>
  )
}