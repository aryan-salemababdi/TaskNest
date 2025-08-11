import Button from "@/components/atom/Button/Button";
import { Input } from "@/components/atom/Input/Input";
import { FC, useState } from "react";
import { View } from "react-native";

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

const TaskInput: FC<TaskInputProps> = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <View className="flex-row gap-2 mb-4">
      <Input
        placeholder="تسک جدید..."
        value={task}
        onChangeText={setTask}
        className="flex-1"
      />
      <Button title="افزودن" onPress={handleAdd} />
    </View>
  );
};

export default TaskInput;