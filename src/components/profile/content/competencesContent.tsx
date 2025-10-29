import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { UserSkill } from "@/types/user";

type props = {
  data?: UserSkill[];
  isLoading?: boolean;
}
export const CompetencesContent = ({ data, isLoading }: props) => {
  const dataSliced = data!.slice(0, 3);

  return (
    <div className="flex flex-col">
      {isLoading
        ? <Skeleton className="w-32 h-4" />
        : dataSliced.map((i, index) => (
          <div key={index}
            className="flex flex-col gap-3 text-foreground hover:text-primary hover:underline transition cursor-pointer"
          >
            <p>{i.name}</p>
            {index < dataSliced.length - 1 &&
              <Separator className="mb-3" />
            }
          </div>
        ))}
    </div>
  )
}