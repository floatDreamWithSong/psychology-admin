import { cn } from "@/lib/utils";
import clock from "@/assets/icons/panel/clock.svg";

const ClockIcon = ({ className, ...props }: React.ComponentProps<"img">) => {
  return (
    <img src={clock} alt="clock" className={cn(className)} {...props} />
  )
}

export default ClockIcon;