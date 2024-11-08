import { Bell, List, MailOpen } from "lucide-react";


export function Header() {
  return (
    <div className="w-full h-[50px] flex items-center p-4 justify-between">
      <div className="flex gap-4 underline">
        <p>Dashboard</p>
        <p>Users</p>
        <p>Settings</p>
      </div>

      <div className="flex gap-2 items-center">
      <Bell size={20}/>
      <List size={20}/>
      <MailOpen size={20}/>
      <div className="border w-[30px] h-[30px] rounded-full bg-sky-300 flex justify-center items-center">
        <p className="text-lg">U</p>
      </div>
      </div>
    </div>
  );
}
