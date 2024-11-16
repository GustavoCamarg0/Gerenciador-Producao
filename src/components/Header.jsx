import { Bell, List, MailOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ui/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
export function Header() {
  return (
    <div className="w-full h-[50px] flex items-center p-4 relative dark:bg-gray-900">
      <div className="flex gap-4 underline">
        <Link to="/users">Users</Link>
      </div>

      <div className="flex gap-2 items-center absolute  right-4">
        <ModeToggle />
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <List />
        </Button>

        <div className="w-[30px] h-[30px] flex justify-center items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
