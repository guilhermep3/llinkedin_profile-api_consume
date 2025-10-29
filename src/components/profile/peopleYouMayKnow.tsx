"use client"
import { profileSectionContentStyle, profileSectionStyle } from "@/styles/classnames"
import { UserYouMayKnow } from "./userYouMayKnow"
import { Button } from "../ui/button"
import { User } from "@/types/user"
import { useState } from "react"
import { DialogPeopleYouMayKnow } from "./dialog/dialogPeopleYouMayKnow"

type props = {
  data: User[]
  username: string;
}
export const PeopleYouMayKnow = ({ data, username }: props) => {
  const followedUsers = data.filter((u) => u.username !== username);
  const randomUsers = [...followedUsers].sort(() => Math.random() - 0.5);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className={profileSectionStyle}>
      <div className={profileSectionContentStyle}>
        <div>
          <p className="font-semibold">Pessoas que você talvez conheça</p>
          <p className="text-foreground/80 text-sm">Do seu setor</p>
        </div>
        <div className="flex flex-col gap-4">
          {randomUsers.slice(0, 5).map((user, index) => (
            <UserYouMayKnow key={index}
              data={user} noSeparator={index < 4}
            />
          ))
          }
        </div>
      </div>
      <DialogPeopleYouMayKnow
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        users={randomUsers}
      />
    </div>
  )
}