import { FC } from "react";
import { Text as RNText, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  variant?: "title" | "body" | "caption";
  className?: string;
}

const Text: FC<CustomTextProps> = ({ variant = "body", className, children, ...rest }) => {
  let variantClass = "";

  switch (variant) {
    case "title":
      variantClass = "text-2xl font-bold";
      break;
    case "body":
      variantClass = "text-base";
      break;
    case "caption":
      variantClass = "text-sm text-gray-500";
      break;
  }

  return (
    <RNText className={`${variantClass} ${className || ""}`} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;