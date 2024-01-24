import React from "react";
import { Link, Tabs } from "expo-router";
import { AntDesign, Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ tabBarIcon: () => <AntDesign name="home" size={28} color="gray" /> }} />
      <Tabs.Screen name="MyList" options={{ tabBarIcon: () => <SimpleLineIcons name="list" size={28} color="gray" /> }} />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
}
