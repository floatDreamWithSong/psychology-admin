import { cn } from "@/lib/utils";
import warning from "@/assets/icons/sidebar/warning.svg";

const AlertIcon = ({ className, ...props }: React.ComponentProps<"img">) => {
  return (
    <img src={warning} alt="warning" className={cn(className)} {...props} />
  )
}

export default AlertIcon;
