import { Button } from "@/components/ui/button"
import { buttonOutlineBlueStyle, profileSectionContentStyle, profileSectionTitleStyle } from "@/styles/classnames"
import { X } from "lucide-react"
import Image from "next/image"

export const NoExperienceItem = () => {

  return (
    <div className="flex flex-col gap-3 rounded-md">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 opacity-50">
          <div className="w-12 h-12 bg-muted-foreground">
            <Image
              src={"/empty_image.png"}
              alt="imagem"
              width={48} height={48}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Cargo</p>
            <p className="text-sm text-foreground/90">Empresa</p>
            <p className="text-xs text-foreground/80">2023 - o momento</p>
          </div>
        </div>
        <Button variant={"outline"} className={buttonOutlineBlueStyle + " w-fit"}>Adicionar Experiência</Button>
      </div>
    </div>
  )
}