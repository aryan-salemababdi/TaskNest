import TaskItem from "@/components/molecule/TaskItem/TaskItem";
import { FC } from "react";
import { FlatList, View } from "react-native";


interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <View className="flex-1">
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            title={item.title}
            completed={item.completed}
            onToggle={() => onToggleTask(item.id)}
            onDelete={() => onDeleteTask(item.id)}
          />
        )}
      />
    </View>
  );
}

export default TaskList;