import React, { useEffect, useState } from "react";

export const MoneyInput = ({ value = 0, onChange,classProp,  ...props }) => {
  const [formattedValue, setFormattedValue] = useState("");

  // Formata o valor inicial recebido via props
  useEffect(() => {
    const formatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
    setFormattedValue(formatted);
  }, [value]);

  const handleChange = (event) => {
    const rawValue = event.target.value.replace(/[^\d]/g, ""); // Remove caracteres não numéricos
    const numericValue = Number(rawValue) / 100; // Converte para decimal
    const formatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numericValue);
    setFormattedValue(formatted);
    onChange && onChange(numericValue); // Notifica o pai do novo valor
  };

  return (
    <input
      type="text"
      value={formattedValue}
      onChange={handleChange}
      className={`${classProp} flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm `}
      {...props}
    />
  );
};
