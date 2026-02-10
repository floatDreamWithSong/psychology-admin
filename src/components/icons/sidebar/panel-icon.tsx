import { cn } from "@/lib/utils";
import panel from "@/assets/icons/sidebar/panel.svg";

const PanelIcon = ({ className, ...props }: React.ComponentProps<"img">) => {
  return (
    <img src={panel} alt="panel" className={cn(className)} {...props} />
  )
}

export default PanelIcon;
