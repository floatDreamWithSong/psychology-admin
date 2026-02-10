import { cn } from "@/lib/utils";
import settting from "@/assets/icons/sidebar/settting.svg";

const SetttingIcon = ({ className, ...props }: React.ComponentProps<"img">) => {
  return (
    <img src={settting} alt="settting" className={cn(className)} {...props} />
  )
}

export default SetttingIcon;
