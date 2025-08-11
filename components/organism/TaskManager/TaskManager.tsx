import TaskInput from "@/components/molecule/TaskInput/TaskInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View } from "react-native";
import TaskList from "../TaskList/TaskList";

type Task = { id: string; title: string; completed: boolean };

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const savedTasks = await AsyncStorage.getItem("@tasks");
        if (savedTasks) {
          setTasks(JSON.parse(savedTasks));
        }
      } catch (e) {
        console.log("Error loading tasks", e);
      }
    })();
  }, []);

  const saveTasks = async (newTasks: Task[]) => {
    try {
      await AsyncStorage.setItem("@tasks", JSON.stringify(newTasks));
    } catch (e) {
      console.log("Error saving tasks", e);
    }
  };

  const addTask = (title: string) => {
    const newTasks = [...tasks, { id: Date.now().toString(), title, completed: false }];
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const toggleTask = (id: string) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  return (
    <View className="flex-1 p-4">
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </View>
  );
}


export default TaskManager;