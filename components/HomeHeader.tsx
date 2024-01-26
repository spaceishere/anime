import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export default function HomeHeader() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/anime")
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
      });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={{ uri: data?.[2].attributes.coverImage.original }} resizeMode="cover" style={styles.image}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            paddingLeft: 40,
            paddingRight: 40,
            backgroundColor: "transparent",
          }}
        >
          <Text style={styles.text}>
            <Ionicons name="logo-github" size={28} color="white" />
          </Text>
          <View style={{ display: "flex", flexDirection: "row", gap: 20, backgroundColor: "transparent" }}>
            <Text style={styles.text}>
              <AntDesign name="search1" size={28} color="white" />
            </Text>
            <Text style={styles.text}>
              <Feather name="bell" size={28} color="white" />
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "transparent", paddingLeft: 40, paddingRight: 40, display: "flex", gap: 15 }}>
          <View style={{ backgroundColor: "transparent" }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 24 }}>{data?.[2].attributes.titles.en_jp}</Text>
          </View>
          <View style={{ backgroundColor: "transparent" }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 24 }}>{data?.[2].attributes.ageRatingGuide}</Text>
          </View>
          <View style={{ backgroundColor: "transparent", display: "flex", flexDirection: "row", gap: 12 }}>
            <View
              style={{
                width: 84,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#06C149",
                borderRadius: 100,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>Play</Text>
            </View>
            <View
              style={{
                width: 104,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 100,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}> + My List</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: "100%",
    paddingTop: 50,
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
