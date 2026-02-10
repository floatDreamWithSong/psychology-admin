import { cn } from "@/lib/utils";
import warning from "@/assets/icons/panel/warning.svg";

const WarningIcon = ({ className, ...props }: React.ComponentProps<"img">) => {
  return (
    <img src={warning} alt="warning" className={cn(className)} {...props} />
  )
}

export default WarningIcon;
