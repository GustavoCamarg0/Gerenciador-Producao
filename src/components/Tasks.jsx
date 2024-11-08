import { ReceiptText, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    console.log(task);
    query.set("description", task.description);
    query.set("unitPrice", task.unitPrice);

    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="grid grid-cols-5 gap-10 mt-3 bg-white w-[80%] p-4 max-h-[256px] overflow-auto rounded-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex flex-col gap-2 items-center p-1">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-blue-500 w-full text-white p-2 rounded-md text-center ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.description}
          </button>
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger>
                <Button className="bg-gray-500 hover:bg-gray-500/90">
                  <ReceiptText />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col">
                <span>Descrição: {task.description}</span>
                <span>Preço Unitário: R$ {task.unitPrice}</span>
              </PopoverContent>
            </Popover>

            <Button
              onClick={() => onDeleteTaskClick(task.id)}
              variant={"destructive"}
            >
              <TrashIcon />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
