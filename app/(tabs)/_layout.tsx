import React, { useState } from "react";
import { Link, Tabs } from "expo-router";
import { AntDesign, Feather, Ionicons, SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  const [homeColor, setHomeColor] = useState();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ tabBarIcon: ({ focused }) => <AntDesign name="home" size={28} color="gray" />, tabBarLabel: "Home" }} />
      <Tabs.Screen name="MyList" options={{ tabBarIcon: () => <SimpleLineIcons name="list" size={28} color="gray" /> }} />
      <Tabs.Screen name="Profile" options={{ tabBarIcon: () => <MaterialCommunityIcons name="human-greeting-variant" size={28} color="gray" /> }} />
      <StatusBar style="light" />
    </Tabs>
  );
}
