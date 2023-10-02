import { useState } from "react";
import { Arrow } from "./Arrow";
import { Divider } from "./Divider";
import { Dropdown, type DropdownProps } from "./Dropdown.style";
import { Option } from "./Option";
import { OptionProps } from "./Option.style";

export const DropdownComponent = (
  props: DropdownProps & { options: OptionProps[] }
) => {
  const [open, setOpen] = useState(false);

  const Options = props.options.map((option) => {
    return (
      <>
        <Option color={option.color} text={option.text} />
        <Divider />
      </>
    );
  });
  const clickHandler = (e: any) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <Dropdown.Root status={props.status}>
      <Dropdown.Bar onClick={clickHandler}>
        <Dropdown.Select>{props.text}</Dropdown.Select>
        <Arrow />
      </Dropdown.Bar>
      {open && <Dropdown.Content>{Options}</Dropdown.Content>}
    </Dropdown.Root>
  );
};

export { DropdownComponent as Dropdown };
