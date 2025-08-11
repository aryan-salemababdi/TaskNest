import TaskManager from "@/components/organism/TaskManager/TaskManager";
import { SafeAreaView, StatusBar } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <TaskManager />
    </SafeAreaView>
  );
}