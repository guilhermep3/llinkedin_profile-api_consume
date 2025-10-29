import { containerStyle } from "@/styles/classnames"
import { InputIcon } from "../inputIcon"
import { Logo } from "../logo"
import { HeaderNav } from "./headerNav"
import { HeaderDropdownPerfil } from "./headerDropdownPerfil"
import { ThemeToggle } from "../themeToggle"

export const Header = () => {

  return (
    <div className="fixed z-40 bg-white dark:bg-black w-full shadow-lg">
      <div className={containerStyle + " justify-between"}>
        <div className="flex items-center gap-4">
          <Logo width={40} height={40} />
          <InputIcon />
        </div>
        <div className="flex items-center gap-4">
          <HeaderNav />
          <HeaderDropdownPerfil />
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="max-w-20 text-center">
            <p className="text-xs underline cursor-pointer
             text-yellow-600 hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-600"
            >
              Experimente o premium
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}