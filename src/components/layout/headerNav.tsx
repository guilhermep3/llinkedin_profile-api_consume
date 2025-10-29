"use client"
import { headerNavData } from "@/data/headerNavData"
import Link from "next/link";
import { usePathname } from "next/navigation";

export const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1">
      {headerNavData.map((i) => {
        const Icon = i.icon;
        const isActive = pathname === i.pathname;

        return (
          <Link href={i.pathname} key={i.id}
            className={`flex flex-col items-center gap-1 text-xs cursor-pointer border-b py-2 px-3 font-semibold
              ${isActive ? 'text-primary border-primary' : 'text-secondary-foreground border-transparent'}`}
          >
            <Icon className={`${isActive ? 'text-primary' : ''}`} />
            {i.name}
          </Link>
        )
      })}
    </div>
  )
}