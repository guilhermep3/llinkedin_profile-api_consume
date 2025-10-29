import { Button } from "@/components/ui/button"
import { buttonOutlineBlueStyle } from "@/styles/classnames"
import Image from "next/image"

type props = {
  title?: string;
  description?: string;
  subscription?: string;
  imageSrc?: string;
  buttonText?: string;
  noImage?: boolean;
}
export const NoDataItem = ({ title, description, subscription, imageSrc, buttonText, noImage }: props) => {

  return (
    <div className="flex flex-col gap-3 rounded-md">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 opacity-50">
          {!noImage && <div className="w-12 h-12 bg-muted-foreground">
            <Image
              src={imageSrc ?? "/empty_image.png"}
              alt="imagem"
              width={48} height={48}
              className="w-full h-full"
            />
          </div>}
          <div className="flex flex-col gap-1">
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-foreground/90">{description}</p>
            <p className="text-xs text-foreground/80">{subscription}</p>
          </div>
        </div>
        {buttonText &&
          <Button variant={"outline"} className={buttonOutlineBlueStyle + " w-fit"}>{buttonText}</Button>
        }
      </div>
    </div>
  )
}