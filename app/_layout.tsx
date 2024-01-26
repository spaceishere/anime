import { Text, View } from "react-native";
import Constants from "expo-constants";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="product/[id]" />
        <Stack.Screen name="Hits" />
        <Stack.Screen name="NewEp" />
      </Stack>
      <StatusBar style="light" />
    </View>
  );
}
