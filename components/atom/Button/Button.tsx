import { FC } from "react";
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity
} from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({ title, onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
