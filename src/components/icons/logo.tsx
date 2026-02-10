import { cn } from "@/lib/utils";

const Logo = ({ className, ...props }: React.ComponentProps<"img">) => {
  return (
    <img src="/icon.svg" alt="logo" {...props} className={cn('size-12',className)} />
  )
}

export default Logo;