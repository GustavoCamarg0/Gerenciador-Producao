"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Define o tipo genérico para o componente
interface ComboboxDemoProps<T> {
  data: T[];
  displayKey: keyof T; // Chave que será usada para exibição
  onSelectionChange?: (selectedItem: T | null) => void; // Função de callback para mudança de seleção
}

export function ComboboxDemo<T extends object>({ data, displayKey, onSelectionChange }: ComboboxDemoProps<T>) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="capitalize w-full relative flex flex-col text-xs text-left pl-2 items-start font-medium"
        >
          {value
            ? data.find((item) => item[displayKey] === value)?.[displayKey] as string
            : `Selecione ${String(displayKey)}...`}
          <ChevronsUpDown className="opacity-50 absolute right-1" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item[displayKey] as React.Key}
                  value={item[displayKey] as string}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    
                    if (onSelectionChange) {
                      const selectedItem = data.find((i) => i[displayKey] === currentValue) || null;
                      onSelectionChange(selectedItem); 
                    }
                  }}
                >
                  {item[displayKey] as string}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item[displayKey] ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
