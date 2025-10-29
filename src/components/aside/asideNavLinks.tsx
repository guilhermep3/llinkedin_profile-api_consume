import { cardStyle } from "@/styles/classnames"
import { Card } from "../ui/card"
import { Bookmark, CalendarSearch, Newspaper, Users } from "lucide-react"

export const AsideNavLinks = () => {

  return (
    <Card className={cardStyle + " gap-2"}>
      <div className="group flex justify-start items-center gap-2 text-xs">
        <Bookmark fill="" className="w-4 font-semibold" />
        <p className="group-hover:underline w-full cursor-pointer">Itens salvos</p>
      </div>
      <div className="group flex justify-start items-center gap-2 text-xs">
        <Users className="w-4 font-semibold" />
        <p className="group-hover:underline w-full cursor-pointer">Grupos</p>
      </div>
      <div className="group flex justify-start items-center gap-2 text-xs">
        <Newspaper className="w-4 font-semibold" />
        <p className="group-hover:underline w-full cursor-pointer">Newsletter</p>
      </div>
      <div className="group flex justify-start items-center gap-2 text-xs">
        <CalendarSearch className="w-4 font-semibold" />
        <p className="group-hover:underline w-full cursor-pointer">Eventos</p>
      </div>
    </Card>
  )
}