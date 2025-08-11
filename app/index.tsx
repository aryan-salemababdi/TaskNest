import TaskManager from "@/components/organism/TaskManager/TaskManager";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <TaskManager />
    </SafeAreaProvider>
  );
}
