import { cn } from "@/lib/utils";
import home from "@/assets/icons/panel/home.svg";

const HomeIcon = ({ className, ...props }: React.ComponentProps<"img">) => {
  return (
    <img src={home} alt="home" className={cn(className)} {...props} />
  )
}

export default HomeIcon;
