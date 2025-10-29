import { FullPost, Post } from "@/types/post"
import { Button } from "../../ui/button"
import { ActivitiesSlide } from "./activitiesSlide"
import { User } from "@/types/user"

type props = {
  user: User
  data: FullPost[]
}
export const ActivitiesContent = ({ user, data }: props) => {

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex flex-col gap-6">
        <div className="flex gap-3">
          <Button className="bg-green-700 hover:bg-green-800 text-white">Publicações</Button>
          <Button variant={"outline"} className="hover:border-muted-foreground cursor-pointer">Comentários</Button>
          <Button variant={"outline"} className="hover:border-muted-foreground cursor-pointer">Imagens</Button>
        </div>
        <ActivitiesSlide user={user} data={data} />
      </div>
    </div>
  )
}