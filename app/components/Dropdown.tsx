import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
type DropdownProps = {
  label: string;
  items: string[];
  value?: string;
  onChange?: (value: string) => void;
  buttonClassName?: string;
};
const Dropdown = ({ label, items, value, onChange, buttonClassName }: DropdownProps) => {
  const [open, setOpen] = React.useState(false);
  const btnClass = buttonClassName || "bg-[#4242aa] text-white font-medium pl-4 pr-8 py-2 rounded flex items-center gap-12 focus:outline-none";
  return (
    <div className="relative inline-block text-left">
      <button
        className={btnClass}
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setOpen(false)}
        type="button"
      >
        {value || label}
        <FaChevronDown className="text-xs" />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
          {items.map((item) => (
            <div
              key={item}
              className={`px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer text-left${value === item ? ' font-bold bg-blue-50' : ''}`}
              onMouseDown={() => {
                setOpen(false);
                if (onChange) onChange(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
