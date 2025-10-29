import { ProfileItem } from "../item/profileItem"
import { Separator } from "@/components/ui/separator"

export const CertificatesContent = () => {

  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: 2 }, (_, index) => (
        <div key={index}>
          <ProfileItem key={index}
            title="Integrando node com SQL"
            description="B7Web"
            subscription="Verificação emitida em agosto de 2025"
            subscription2="Código da credencial 62479093364-8654567-tv3246471"
            buttonText="Exibir credencial"
            ImageSrc="empty_avatar.png"
            buttonNotBlue
          />
          {index < 1 &&
            <Separator />
          }
        </div>
      ))}
    </div>
  )
}