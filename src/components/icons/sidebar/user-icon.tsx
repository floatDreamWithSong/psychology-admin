import { cn } from "@/lib/utils";
import user from "@/assets/icons/sidebar/user.svg";

const UserIcon = ({ className, ...props }: React.ComponentProps<"img">) => {
  return (
    <img src={user} alt="user" className={cn(className)} {...props} />
  )
}

export default UserIcon;
