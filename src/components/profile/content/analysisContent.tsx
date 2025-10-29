import { ChartNoAxesColumn, Search, Users } from "lucide-react"

export const AnalysisContent = () => {

  return (
    <div className="flex flex-col">
      <div className="grid-cols-1 grid md:grid-cols-3 gap-5">
        <div className="flex gap-2">
          <Users className="stroke-3" />
          <div>
            <p className="font-semibold text-foreground/90">59 visualizações de perfil</p>
            <p className="text-foreground/80">Saiba quem viu seu perfil</p>
          </div>
        </div>
        <div className="flex gap-2">
          <ChartNoAxesColumn className="stroke-3" />
          <div>
            <p className="font-semibold text-foreground/90">32 impressões das publicações</p>
            <p className="text-foreground/80">Confira quem está interagindo com suas publicações.</p>
            <p className="text-foreground/70 text-sm">Últimos 7 dias.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Search className="stroke-3" />
          <div>
            <p className="font-semibold text-foreground/90">2 ocorrências em resultados de pesquisa</p>
            <p className="text-foreground/80">Veja a frequência com que seu perfil é exibido em resultados de pesquisa.</p>
          </div>
        </div>
      </div>
    </div>
  )
}