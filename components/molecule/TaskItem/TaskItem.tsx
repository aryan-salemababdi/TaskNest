import Checkbox from "@/components/atom/Checkbox/Checkbox";
import Text from "@/components/atom/Text/Text";
import { FC } from "react";
import { Pressable, View } from "react-native";
import { TrashIcon } from "react-native-heroicons/outline";

interface TaskItemProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskItem: FC<TaskItemProps> = ({ title, completed, onToggle, onDelete }) => {
  return (
    <View className="flex-row items-center justify-between bg-white p-3 rounded-lg shadow mb-2">
      <View className="flex-row items-center gap-2">
        <Checkbox checked={completed} onToggle={onToggle} />
        <Text
          variant="body"
          className={completed ? "line-through text-gray-400" : ""}
        >
          {title}
        </Text>
      </View>

      <Pressable onPress={onDelete} className="p-1">
        <TrashIcon size={20} color="#f87171" />
      </Pressable>
    </View>
  );
};

export default TaskItem;