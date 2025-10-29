import Image from "next/image"
import { Button } from "../ui/button"
import { UserPlus } from "lucide-react"
import { buttonOutlineStyle } from "@/styles/classnames"
import { Separator } from "../ui/separator"
import { User } from "@/types/user"
import Link from "next/link"

type props = {
  noSeparator?: boolean;
  data: User;
}
export const UserYouMayKnow = ({ noSeparator, data }: props) => {
  const about = data.about?.length! > 64 ? data.about?.slice(0, 64) + "..." : data.about || "Sem descrição";

  return (
    <>
      <Link href={`/in/${data.username}`} className="flex gap-2">
        <div className="min-w-12 w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={`/user/${data.avatar ?? `empty_avatar.png`}`}
            alt=""
            width={52} height={52}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold text-foreground/90">{data.name}</p>
          <p className="text-sm text-foreground/80">{about}</p>
          <Button variant={"outline"}
            className={buttonOutlineStyle + " w-fit font-semibold mt-1"}
          >
            <UserPlus />
            Conectar
          </Button>
        </div>
      </Link>
      {noSeparator && <Separator className="bg-border" />}
    </>
  )
}