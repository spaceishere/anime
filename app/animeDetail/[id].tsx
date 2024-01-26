import { useGlobalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { Text, View, ScrollView, ImageBackground, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons, MaterialIcons, Feather, Entypo, AntDesign } from "@expo/vector-icons";

export default function AnimeDetail() {
  const [data, setData] = useState<any>();
  const { id } = useGlobalSearchParams();

  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
      });
  }, []);

  return data ? (
    <ScrollView>
      <View>
        <ImageBackground source={{ uri: data?.attributes.coverImage.original }} resizeMode="cover" style={styles.image}>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", paddingLeft: 50, paddingRight: 50, marginTop: 30 }}>
            <Link href={"../"}>
              <Ionicons name="arrow-back" size={28} color="white" />
            </Link>
            <MaterialIcons name="connected-tv" size={32} color="white" />
          </View>
        </ImageBackground>
      </View>
      <View style={{ marginTop: 20, paddingLeft: 20, paddingRight: 20 }}>
        <View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>{data?.attributes.titles.en} ...</Text>
            <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
              <MaterialIcons name="save-alt" size={20} color="black" />
              <Feather name="send" size={20} color="black" />
            </View>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
          <Entypo name="star" size={20} color="#06C149" />
          <View style={{ display: "flex", flexDirection: "row", gap: 7, alignItems: "center" }}>
            <Text style={{ color: "#06C149" }}>{data?.attributes.averageRating.slice(0, 4)} </Text>
            <Entypo name="chevron-right" size={20} color="#06C149" />
            <Text style={{ color: "black" }}>{data?.attributes.createdAt.slice(0, 4)}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <View
              style={{
                borderWidth: 1,
                width: 50,
                height: 24,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#06C149",
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "#06C149" }}>{data?.attributes.ageRatingGuide.slice(0, 3)}</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                width: 70,
                height: 24,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#06C149",
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "#06C149" }}>Japan</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                width: 70,
                height: 24,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#06C149",
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "#06C149" }}>Subtitle</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 30, gap: 10 }}>
          <View
            style={{
              flex: 0.5,
              borderWidth: 1,
              height: 40,
              borderColor: "#06C149",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
              backgroundColor: "#06C149",
            }}
          >
            <View style={{ display: "flex", gap: 10, flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="play" size={20} color="white" />
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Play</Text>
            </View>
          </View>
          <View style={{ flex: 0.5, borderWidth: 1, height: 40, borderColor: "#06C149", borderRadius: 100, justifyContent: "center" }}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
              <Ionicons name="download" size={25} color="#06C149" />
              <Text style={{ color: "#06C149", fontSize: 20 }}>Download</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text>{data?.attributes.description}</Text>
        </View>
      </View>
    </ScrollView>
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator />
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
