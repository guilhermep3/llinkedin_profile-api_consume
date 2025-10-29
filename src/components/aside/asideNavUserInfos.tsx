import { cardStyle } from "@/styles/classnames"
import { Card } from "../ui/card"

export const AsideNavUserInfos = () => {
  return (
    <Card className={cardStyle+ " py-3"}>
      <div className="flex justify-between items-center w-full text-xs">
        <p className="text-foreground">Visualizações do perfil</p>
        <span className="text-primary font-semibold">64</span>
      </div>
      <div className="flex justify-between items-center w-full text-xs">
        <p className="text-foreground">Impressões da publicação</p>
        <span className="text-primary font-semibold">25</span>
      </div>
    </Card>
  )
}