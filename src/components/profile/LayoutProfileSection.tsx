import { buttonOutlineBlueStyle, iconStyle, profileSectionContentStyle, profileSectionStyle, profileSectionTitleStyle } from "@/styles/classnames"
import { ArrowRight, LucideProps } from "lucide-react";
import Link from "next/link";
import { ComponentType, ReactNode } from "react"
import { Button } from "../ui/button";

type props = {
  sectionName: string;
  sectionDesc?: string;
  SectionDescIcon?: ComponentType<LucideProps>;
  sectionLink?: string;
  sectionLinkHref?: string;
  Icon?: ComponentType<LucideProps>;
  ButtonTop?: ReactNode;
  sectionContent?: ReactNode;
  hasData?: boolean;
  buttonDisplayAll?: string | false;
  buttonText?: string | ReactNode;
  buttonLink?: string | ReactNode;
  ButtonLinkIcon?: ComponentType<LucideProps>;
  buttonNotBlue?: boolean;
}
export const LayoutProfileSection = ({
  sectionName, sectionDesc, SectionDescIcon, sectionLink, sectionLinkHref,
  Icon, ButtonTop, sectionContent, hasData, buttonDisplayAll,
  buttonText, buttonLink, ButtonLinkIcon, buttonNotBlue
}: props) => {

  return (
    <div className={`${profileSectionStyle} ${hasData ? '' : 'p-3'}`}>
      <div className={`${profileSectionContentStyle} ${hasData ? '' : ' gap-1! p-2! md:p-4! border border-dashed border-muted-foreground rounded-md'} `}>
        <div className="flex justify-between">
          <div className={`flex flex-col gap-1`}>
            <h1 className={`${profileSectionTitleStyle} ${hasData ? 'opacity-100' : 'opacity-50'}`}>{sectionName}</h1>
            {sectionDesc &&
              <div className={`flex items-center gap-2 text-sm text-foreground/70 ${hasData ? 'opacity-100' : 'opacity-50'}`}>
                {SectionDescIcon && <SectionDescIcon className="w-4 h-4 fill-muted" />}
                <p>{sectionDesc}</p>
              </div>
            }
            {sectionLink && sectionLinkHref &&
              <Link
                href={sectionLinkHref}
                className="text-sm text-primary hover:underline"
              >
                {sectionLink}
              </Link>
            }
          </div>
          <div className="flex items-center gap-4">
            {ButtonTop && ButtonTop}
            {Icon && <div className={iconStyle}>
              <Icon className="w-5 h-5" />
            </div>}
          </div>
        </div>
        {sectionContent}
        {buttonText && (
          typeof buttonText === "string" ? (
            <Button
              variant={"outline"}
              className={`${!buttonNotBlue && buttonOutlineBlueStyle} ${buttonNotBlue && 'border-muted-foreground'} w-fit`}
            >
              {buttonText}
            </Button>
          ) : (
            buttonText
          )
        )}
        {buttonLink && ButtonLinkIcon && (
          <Button
            variant={"link"}
            className={`${!buttonNotBlue && buttonOutlineBlueStyle} ${buttonNotBlue && 'border-muted-foreground'} w-fit text-foreground`}
          >
            <ButtonLinkIcon /> {buttonLink}
          </Button>
        )}
      </div>
      {buttonDisplayAll &&
        <Button
          variant={"outline"}
          className=" w-full bg-white dark:bg-black rounded-none text-base text-foreground/90 hover:text-foreground border-x-0 py-5! cursor-pointer"
        >
          {buttonDisplayAll} <ArrowRight className="-mb-1" />
        </Button>}
    </div>
  )
}