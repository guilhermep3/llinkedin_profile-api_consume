"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { iconStyle } from "@/styles/classnames"
import { Pen } from "lucide-react"

type props = {
  language: string;
  setLanguage: (newV: string) => void;
}
export const DialogLanguage = ({ language, setLanguage }: props) => {

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div className={iconStyle + " p-2!"}>
          <Pen className="w-5 h-5" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Escolha o idioma do seu perfil</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5 py-5">
          <div className="flex gap-2 items-center">
            <Checkbox
              id="portuguese"
              checked={language === "Português"}
              onCheckedChange={() => handleLanguageChange("Português")}
            />
            <Label htmlFor="portuguese" className="cursor-pointer">
              Português (Brasil)
            </Label>
          </div>
          <div className="flex gap-2 items-center">
            <Checkbox
              id="english"
              checked={language === "Inglês"}
              onCheckedChange={() => handleLanguageChange("Inglês")}
            />
            <Label htmlFor="english" className="cursor-pointer">
              Inglês
            </Label>
          </div>
          <div className="flex gap-2 items-center">
            <Checkbox
              id="spanish"
              checked={language === "Espanhol"}
              onCheckedChange={() => handleLanguageChange("Espanhol")}
            />
            <Label htmlFor="spanish" className="cursor-pointer">
              Espanhol
            </Label>
          </div>
        </div>
        <div>
          <DialogClose
            className="w-full cursor-pointer"
          >
            <Button className="w-full cursor-pointer">Confirmar</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
