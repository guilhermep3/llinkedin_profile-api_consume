"use client"
import { iconStyle, profileSectionContentStyle, profileSectionStyle } from "@/styles/classnames"
import { Pen } from "lucide-react"
import { Separator } from "../ui/separator"
import { PeopleYouMayKnow } from "./peopleYouMayKnow"
import { User } from "@/types/user"
import { DialogLanguage } from "./dialog/dialogLanguage"
import { useState } from "react"

type props = {
  data: User[];
  username: string;
}
export const ProfileAside = ({ data, username }: props) => {
  const [language, setLanguage] = useState("Português");

  return (
    <aside className="flex flex-col gap-2 w-full lg:max-w-80 rounded-lg mx-auto" >
      <div className={profileSectionStyle}>
        <div className={profileSectionContentStyle + " p-2 lg:p-4"}>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="font-semibold text-lg">Idioma do perfil</p>
              <DialogLanguage language={language} setLanguage={setLanguage} />
            </div>
            <p className="text-foreground/70 text-sm">{language}</p>
          </div>
          <Separator />
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="font-semibold text-lg">Perfil público e URL</p>
              <div className={iconStyle + " p-2!"}>
                <Pen className="w-5 h-5" />
              </div>
            </div>
            <p className="text-foreground/70 text-sm">www.linkedin.com/in/nome-usuario123</p>
          </div>
        </div>
      </div>
      <PeopleYouMayKnow data={data} username={username} />
    </aside>
  )
}