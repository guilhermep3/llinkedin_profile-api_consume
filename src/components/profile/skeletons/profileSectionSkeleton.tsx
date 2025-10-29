import { Pen } from "lucide-react"
import { buttonOutlineBlueStyle, buttonOutlineStyle, iconStyle, profileSectionStyle } from "@/styles/classnames"
import { DropdownInterest } from "../DropdownInterest"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export const ProfileSectionSkeleton = () => {

  return (
    <div className={profileSectionStyle}>
      <div className="relative w-full z-0">
        <Skeleton
          className="w-full h-48"
        />
        <div className="absolute top-4 right-4 p-2 bg-white rounded-full cursor-pointer">
          <Pen className="text-primary w-4 h-4 stroke-3" />
        </div>
      </div>
      <div className="flex flex-col gap-5 p-3 md:p-6 pt-0">
        <div className="flex justify-between items-start">
          <Skeleton className="w-28 h-28 md:w-40 md:h-40 -mt-16 md:-mt-28" />
          <div className={iconStyle}>
            <Pen className="w-5 h-5" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-2 w-full">
            <Skeleton className="w-2/3 h-5" />
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-full h-5" />
            <div className="flex gap-4 text-sm">
              <Skeleton className="w-32 h-3" />
              <div className="text-primary font-semibold cursor-pointer">Informações de contato</div>
            </div>
            <Skeleton className="w-24 h-3" />
            <Skeleton className="w-20 h-3" />
          </div>
          <div>
            <div className="flex items-center gap-1 sm:min-w-64">
              <Skeleton className="w-8 h-8" />
              <Skeleton className="w-20 h-4" />
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