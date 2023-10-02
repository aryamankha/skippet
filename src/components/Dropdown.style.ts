import {sva} from "../../styled-system/css"
import { createStyleContext } from "../style-contexts";

export type DropdownProps = {
  status: "Idle" | "Active",
  text: string,
}

const DropdownStyles = sva({
    slots: ["select", "bar", "content", "root"],
    base: {
      select: {
        color: "rgb(70, 70, 70)",
        fontSize: "12px",
        fontWeight: "400",
      },
      bar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4px 6px",
        borderRadius: "6px",
        position: "relative",
        width: "160px",
        height: "28px",
        borderStyle: "solid",
        borderColor: "rgb(212, 212, 212)",
        borderWidth: "1px",
        backgroundColor: "rgb(246, 246, 246)",
      },
      content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderRadius: "6px",
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.15)",
        width: "100%",
        borderStyle: "solid",
        borderColor: "rgb(226, 226, 226)",
        borderWidth: "1px",
        backgroundColor: "rgb(255, 255, 255)",
      },
      root: {
        display: "flex",
        flexDirection: "column",
        gap: "1px",
        height: "fit-content",
        width: "fit-content",
        borderRadius: "6px",
      },
    },
    variants: {
      status: {
        Idle: {
          bar: {
            borderColor: "rgb(212, 212, 212)",
            backgroundColor: "rgb(246, 246, 246)",
          },
        },
        Active: {
          bar: {
            borderColor: "rgb(0, 0, 0)",
            backgroundColor: "rgb(255, 255, 255)",
          },
        },
      },
    },
})

const { withProvider, withContext } = createStyleContext(DropdownStyles)

const Root = withProvider("div", "root");

const Select = withContext("div", "select");

const Bar = withContext("div", "bar");

const Content = withContext("div", "content");

export const Dropdown = { Root, Select, Bar, Content}