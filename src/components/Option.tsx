import { Option, type OptionProps } from "./Option.style";

const OptionComponent = (props: OptionProps) => {
  return (
    <Option.Root color={props.color}>
      <Option.Badge>
        <Option.Text>{props.text}</Option.Text>
      </Option.Badge>
    </Option.Root>
  );
};

export { OptionComponent as Option };
