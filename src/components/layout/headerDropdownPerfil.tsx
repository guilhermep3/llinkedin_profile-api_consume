import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { ChevronDown, HelpCircle, Languages, LogOut, Settings } from "lucide-react"
import Link from "next/link"
import { profileImage } from "@/data/profileData"

export function HeaderDropdownPerfil() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex flex-col cursor-pointer">
          <Avatar className="w-7 h-7">
            <AvatarImage
              src={profileImage}
              alt="foto de usuario"
            />
            <AvatarFallback className="text-sm text-secondary-foreground">US</AvatarFallback>
          </Avatar>
          <div className="flex justify-center items-center text-xs text-secondary-foreground">Eu <ChevronDown width={14} /></div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64" align="end">
        <DropdownMenuGroup className="p-2">
          <div className="flex gap-2 mb-2">
            <Avatar className="w-14 h-14">
              <AvatarImage
                src={profileImage}
                alt="foto de usuario"
              />
              <AvatarFallback className="text-sm">US</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-base font-bold">Nome de usuário</p>
              <p className="text-sm text-secondary-foreground">Descrição do usuário, uma bio com um texto maior mas ainda com limite de caracteres...</p>
            </div>
          </div>
          <Link href={`/in/guilherme`}>
            <Button className="w-full text-white">Ver Perfil</Button>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-lg font-semibold">Conta</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            Configurações e privacidade
            <DropdownMenuShortcut><Settings /></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Ajuda
            <DropdownMenuShortcut><HelpCircle /></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Idioma
            <DropdownMenuShortcut><Languages /></DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Link href={'/signin'} className="inline-block w-full">
            <Button variant={"ghost"} size={"sm"} className="w-full">
              Sair <LogOut className="text-foreground" />
            </Button>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
