import {sva} from "../../styled-system/css"

import {createStyleContext} from "../style-contexts"

export type OptionProps = {
  color: "Gray" | "Orange" | "Green",
  text: string,
}

const OptionStyles = sva({
  slots: ["root", "badge", "text"],
  base: {
    root: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      height: "fit-content",
      padding: "4px 8px",
      width: "95px",
      backgroundColor: "rgb(255, 255, 255)",
    },
    badge: {
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content",
      height: "fit-content",
      padding: "4px 6px",
      borderRadius: "4px",
      borderStyle: "solid",
      borderWidth: "1px",
    },
    text: {
      color: "rgb(46, 46, 46)",
      fontSize: "12px",
      fontWeight: "400",
    },
  }, 
  variants: {
    color: {
      Gray: {
        badge: {
          borderColor: "rgb(226, 226, 226)",
          backgroundColor: "rgb(251, 251, 251)",
        },
      },
      Orange: {
        badge: {
          borderColor: "rgb(246, 215, 186)",
          backgroundColor: "rgb(249, 230, 212)",
        },
      },
      Green: {
        badge: {
          borderColor: "rgb(168, 245, 197)",
          backgroundColor: "rgb(199, 250, 218)",
        },
      },
    },
  },
})

const { withProvider, withContext } = createStyleContext(OptionStyles)

const Root = withProvider("div", "root");

const Badge = withContext("div", "badge");

const Text = withContext("p", "text");

export const Option = { Root, Badge, Text}