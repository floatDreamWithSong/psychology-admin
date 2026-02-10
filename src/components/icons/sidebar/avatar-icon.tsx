import { cn } from "@/lib/utils";
import avatar from "@/assets/icons/sidebar/avatar.svg";

const AvatarIcon = ({ className, style, ...props }: React.ComponentProps<"img">) => {
  return (
    <img
      src={avatar}
      alt="avatar"
      className={cn(className)}
      style={{
        boxShadow: '0px 13.5px 18px -4.5px rgba(28, 25, 23, 0.08), 0px 4.5px 6.75px -2.25px rgba(28, 25, 23, 0.03)',
        borderRadius: '50%',
        ...style,
      }}
      {...props}
    />
  )
}

export default AvatarIcon;