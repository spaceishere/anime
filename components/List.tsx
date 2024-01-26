import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, Image, ImageBackground, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export default function List() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/anime")
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
      });
  }, []);
  return (
    <View style={{ flex: 1, paddingLeft: 24, paddingRight: 24, gap: 24, marginTop: 20 }}>
      <View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Top Hits Anime</Text>
          <Link href={"../Hits"} style={{ fontSize: 14, color: "#06C149" }}>
            See all
          </Link>
        </View>
      </View>
      <View>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => (
            <Link href={`/animeDetail/${item.id}`}>
              <View style={{ paddingLeft: 8, width: 150, height: 200, borderRadius: 18 }}>
                <ImageBackground style={styles.image} source={{ uri: item?.attributes.posterImage.original }} resizeMode="cover">
                  <View
                    style={{
                      width: 44,
                      height: 24,
                      backgroundColor: "#06C149",
                      left: 12,
                      top: 12,
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: "white" }}>{item?.attributes.averageRating.slice(0, 4)}</Text>
                  </View>
                </ImageBackground>
              </View>
            </Link>
          )}
        />
      </View>
      <View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>New Episode Releases</Text>
          <Link href={"../NewEp"} style={{ fontSize: 14, color: "#06C149" }}>
            See all
          </Link>
        </View>
      </View>
      <View>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => (
            <Link href={`/animeDetail/${item.id}`}>
              <View style={{ paddingLeft: 8, width: 150, height: 200, borderRadius: 18 }}>
                <ImageBackground style={styles.image} source={{ uri: item?.attributes.posterImage.original }} resizeMode="cover">
                  <View
                    style={{
                      width: 44,
                      height: 24,
                      backgroundColor: "#06C149",
                      left: 12,
                      top: 12,
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: "white" }}>{item?.attributes.averageRating.slice(0, 4)}</Text>
                  </View>
                </ImageBackground>
              </View>
            </Link>
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: 50,
    borderRadius: 18,
    overflow: "hidden",
    display: "flex",
    gap: 100,
  },
});
