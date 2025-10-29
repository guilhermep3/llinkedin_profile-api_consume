"use client"
import { Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { coverImage, profileImage } from "@/data/profileData"

export const AsideNavProfile = () => {
  const router = useRouter();

  const handleGoToProfilePage = () => {
    router.push(`/in/guilherme`)
  }

  const handleNewBranchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  return (
    <Card className="gap-0 pt-0 overflow-hidden w-56 cursor-pointer" onClick={handleGoToProfilePage}>
      <Image
        src={coverImage}
        alt="cover"
        width={'400'} height={'200'}
      />
      <CardContent className="px-4">
        <Avatar className="w-20 h-20 -mt-7">
          <AvatarImage
            src={profileImage}
            alt="foto de usuario"
          />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl">Nome de usuário</CardTitle>
        <CardDescription className="text-secondary-foreground">Descrição do usuário com limite de caracteres...</CardDescription>
        <CardDescription>Cidade - Estado</CardDescription>
        <Button
          variant="outline"
          size="sm"
          className="mt-3 w-full justify-start"
          onClick={handleNewBranchClick}
        >
          <Plus /> New Branch
        </Button>
      </CardContent>
    </Card>
  )
}