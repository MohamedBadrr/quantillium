import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "cursor-pointer peer data-[state=checked]:bg-success data-[state=unchecked]:bg-[#39393D] dark:data-[state=unchecked]:bg-[#39393D] inline-flex h-[21px] w-[34px] shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "cursor-pointer bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block w-[18px] h-[18px] rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-5px)] data-[state=unchecked]:translate-x-[1px]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
