import { cn } from "@/lib/utils";
import message from "@/assets/icons/panel/message.svg";

const MessageIcon = ({ className, ...props }: React.ComponentProps<"img">) => {
  return (
    <img src={message} alt="message" className={cn(className)} {...props} />
  )
}

export default MessageIcon;
