import { linkStyle } from "@/styles/classnames"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export const AsideNavFooterLinks = () => {

  return (
    <div className="w-56 flex flex-col justify-center items-center gap-1">
      <div className="flex justify-between gap-3">
        <Link href={'#'} className={linkStyle}>Sobre</Link>
        <Link href={'#'} className={linkStyle}>Acessibilidade</Link>
        <Link href={'#'} className={linkStyle}>Central de ajuda</Link>
      </div>
      <div className="flex justify-center">
        <Link href={'#'} className={linkStyle + " flex items-center"}>Termos e privacidade <ChevronDown size={'16px'} /></Link>
      </div>
      <div className="flex justify-between gap-3">
        <Link href={'#'} className={linkStyle}>Preferências de anúncios</Link>
        <Link href={'#'} className={linkStyle}>Publicidades</Link>
      </div>
      <div className="flex justify-center">
        <Link href={'#'} className={linkStyle + " flex items-center"}>Serviços empresariais <ChevronDown size={'16px'} /></Link>
      </div>
      <div className="flex justify-between gap-3">
        <Link href={'#'} className={linkStyle}>Baixe o aplicativo do Linkedin</Link>
        <Link href={'#'} className={linkStyle}>Mais</Link>
      </div>
    </div>
  )
}