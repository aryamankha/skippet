import { Arrow } from "./Arrow";
import { Divider } from "./Divider";
import { Dropdown, type DropdownProps } from "./Dropdown.style";
import { Option } from "./Option";

export const DropdownComponent = (props: DropdownProps) => {
  return (
    <Dropdown.Root status={props.status}>
      <Dropdown.Bar>
        <Dropdown.Select>{props.text}</Dropdown.Select>
        <Arrow />
      </Dropdown.Bar>
      {props.status === "Active" && (
        <Dropdown.Content>
          <Option color="Green" text="Hello!" />
          <Divider />
          <Option color="Gray" text="Bonjour!" />
          <Divider />
          <Option color="Orange" text="Hola!" />
        </Dropdown.Content>
      )}
    </Dropdown.Root>
  );
};

export { DropdownComponent as Dropdown };
