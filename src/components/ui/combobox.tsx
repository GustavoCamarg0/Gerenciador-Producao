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

interface Product {
  description: string;
  unitPrice: string; 
}


export function ComboboxProduct({
  onSelectionChange,
}: {
  onSelectionChange?: (selectedProduct: Product | null) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const products = JSON.parse(
    localStorage.getItem("products") || "[]"
  ) as Array<any>;

  const handleSelect = (currentValue:string) => {
    const selectedProduct = products.find(
      (product) => product.description === currentValue
    );

    setValue(currentValue === value ? "" : currentValue); // Atualiza o valor interno
    setOpen(false);

    if (onSelectionChange && selectedProduct) {
      onSelectionChange(selectedProduct); // Notifica o componente pai
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full relative flex flex-col text-xs text-left pl-2 items-start font-medium dark:bg-gray-900"
        >
          {value
            ? products.find((product) => product.description === value)
                ?.description
            : "Selecione o Produto..."}
          <ChevronsUpDown className="opacity-50 absolute right-1 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command className="dark:bg-gray-900">
          <CommandInput placeholder="Busque o Produto..." />
          <CommandList>
            <CommandEmpty>Nenhum produto encontrado.</CommandEmpty>
            <CommandGroup>
              {products.map((product) => (
                <CommandItem
                  key={product.description}
                  value={product.description}
                  onSelect={handleSelect}
                >
                  {product.description}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === product.description
                        ? "opacity-100"
                        : "opacity-0"
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


export function ComboboxPlace() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const place = [
    {
      label: "Primeiro",
      value: "1",
    },
    {
      label: "Segundo",
      value: "2",
    },
    {
      label: "Terceiro",
      value: "3",
    },
    {
      label: "Quarto",
      value: "4",
    },
    {
      label: "Quinto",
      value: "5",
    },
  ];
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full relative flex flex-col text-xs text-left pl-2 items-start font-medium dark:bg-gray-900"
        >
          {value
            ? place.find((place) => place.value === value)?.label
            : "Selecione o Lugar..."}
          <ChevronsUpDown className="opacity-50 absolute right-1 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command className="dark:bg-gray-900">
          <CommandList>
            <CommandGroup>
              {place.map((place) => (
                <CommandItem
                  key={place.value}
                  value={place.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {place.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === place.value ? "opacity-100" : "opacity-0"
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

export function BoxUsersTypes() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const types = [
    {
      label: "Admin",
      value: "Admin",
    },
    {
      label: "Fiscal",
      value: "Fiscal",
    },
    {
      label: "Observador",
      value: "Observador",
    }
  ];
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full relative flex flex-col text-xs text-left pl-2 items-start font-medium dark:bg-gray-900"
        >
          {value
            ? types.find((types) => types.value === value)?.label
            : "Selecione o Tipo de Usuário..."}
          <ChevronsUpDown className="opacity-50 absolute right-1 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[220px] p-0">
        <Command className="dark:bg-gray-900">
          <CommandList>
            <CommandGroup>
              {types.map((types) => (
                <CommandItem
                  key={types.value}
                  value={types.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {types.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === types.value ? "opacity-100" : "opacity-0"
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
