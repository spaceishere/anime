import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Image, ImageBackground, StyleSheet, Text, View, ScrollView } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import HomeHeader from "../../components/HomeHeader";
import List from "../../components/List";

export default function Page() {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <HomeHeader />
        <List />
      </View>
    </ScrollView>
  );
}
