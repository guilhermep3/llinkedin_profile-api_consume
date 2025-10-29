import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { User } from "@/types/user";
import { UserYouMayKnow } from "../userYouMayKnow";

type props = {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  users: User[];
}
export const DialogPeopleYouMayKnow = ({ isDialogOpen, setIsDialogOpen, users }: props) => {

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Button
          variant={"outline"}
          className=" w-full bg-white dark:bg-black rounded-none text-base text-foreground/90 hover:text-foreground border-x-0 py-5! cursor-pointer"
          onClick={(prev) => setIsDialogOpen(!prev)}
        >
          Exibir tudo
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col max-h-[calc(100vh-100px)]">
        <DialogHeader className="shrink-0 text-lg font-semibold text-foreground/90">
          <DialogTitle>Pessoas que você talvez conheça</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-5">
            {users.slice(0, 10).map((user, index) => (
              <UserYouMayKnow key={index}
                data={user} noSeparator={index < 9}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}