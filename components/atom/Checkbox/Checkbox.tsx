import { FC } from "react";
import { Pressable, View } from "react-native";

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
}

const Checkbox: FC<CheckboxProps> = ({ checked, onToggle }) => {
  return (
    <Pressable onPress={onToggle} className="w-6 h-6 border-2 border-blue-500 rounded-md items-center justify-center">
      {checked && <View className="w-3.5 h-3.5 bg-blue-500 rounded" />}
    </Pressable>
  );
};

export default Checkbox;