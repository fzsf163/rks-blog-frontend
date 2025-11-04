import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectBoxProps {
  options?: Option[];
  placeholder?: string;
  className?: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  className,
  options,
  placeholder,
}) => {
  return (
    <Select>
      <SelectTrigger className={className ? className : "w-[180px]"}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options?.map((o) => {
          return (
            <div key={o.label}>
              <SelectItem value={o.value}>{o.label}</SelectItem>
            </div>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectBox;
