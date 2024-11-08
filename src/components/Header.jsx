import { Bell, List, MailOpen } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="w-full h-[50px] flex items-center p-4 relative">
      <div className="flex gap-4 underline">
        <Link to="/users">Users</Link>
        <Link to="#">Settings</Link>
      </div>

      <div className="flex gap-2 items-center absolute  right-4">
        <Bell size={20} />
        <List size={20} />
        <MailOpen size={20} />
        <div className="border w-[30px] h-[30px] rounded-full bg-sky-300 flex justify-center items-center">
          <p className="text-lg">U</p>
        </div>
      </div>
    </div>
  );
}
