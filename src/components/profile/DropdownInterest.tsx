"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownInterest() {
  const [position, setPosition] = React.useState("beHired");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" className="text-white cursor-pointer">Tenho interesse em...</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="hire" className="flex flex-col items-start">
            <p className="font-bold">Contratar</p>
            <p className="text-foreground/70">Compartilhe que você está contratando e atraia candidatos qualificados.</p>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="beHired" className="flex flex-col items-start">
            <p className="font-bold">Prestar serviços</p>
            <p className="text-foreground/70">Destaque os serviços que você oferece para que novos clientes possam descobrir você.</p>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
