import { Button } from "@/components/ui/button"
import { buttonOutlineBlueStyle } from "@/styles/classnames"
import { LucideProps } from "lucide-react"
import Image from "next/image"
import { ComponentType, ReactNode } from "react"

type Props = {
  title?: string | ReactNode;
  description?: string | ReactNode;
  subscription?: string | ReactNode;
  subscription2?: string | ReactNode;
  ImageSrc?: string | ReactNode;
  buttonText?: string | ReactNode;
  buttonLink?: string | ReactNode;
  ButtonLinkIcon?: ComponentType<LucideProps>;
  buttonCredential?: string | ReactNode;
  buttonNotBlue?: boolean;
}

export const ProfileItem = ({
  title,
  description,
  subscription,
  subscription2,
  ImageSrc,
  buttonCredential,
  buttonNotBlue
}: Props) => {
  return (
    <div className="flex flex-col gap-3 rounded-md">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <div className="w-12 h-12 flex items-center justify-center">
            {typeof ImageSrc === "string" ? (
              <Image
                src={ImageSrc ?? '/empty_image.png'}
                alt="imagem"
                width={48}
                height={48}
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              ImageSrc
            )}
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-foreground/90">{description}</p>
            <div>
              <p className="text-sm text-foreground/70">{subscription}</p>
              {subscription2 && <p className="text-sm text-foreground/70">{subscription2}</p>}
            </div>
          </div>
        </div>
        {buttonCredential && (
          <Button
            variant={"outline"}
            className={`${!buttonNotBlue && buttonOutlineBlueStyle} ${buttonNotBlue && 'border-muted-foreground'} w-fit`}
          >
            {buttonCredential}
          </Button>
        )}
      </div>
    </div>
  )
}
