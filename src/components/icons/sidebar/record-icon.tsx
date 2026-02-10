import { cn } from "@/lib/utils";
import record from "@/assets/icons/sidebar/record.svg";

const RecordIcon = ({ className, ...props }: React.ComponentProps<"img">) => {
  return (
    <img src={record} alt="record" className={cn(className)} {...props} />
  )
}

export default RecordIcon;
