import { AvatarIcon } from "@/components/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PaletteIcon } from "lucide-react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { setTheme } = useTheme();
  return (
    <div>
    <DropdownMenu dir="ltr">
      <DropdownMenuTrigger>
        <AvatarIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            setTheme((cur) => {
              if (cur === "cool") return "warm";
              return "cool";
            });
          }}
        >
          <PaletteIcon size={16} className="mr-2" />
          切换主题
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
  )
}

export default Footer