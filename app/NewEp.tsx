import { Text, View, ScrollView, SafeAreaView, Image, FlatList, StyleSheet, ImageBackground, ActivityIndicator } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay";

export default function NewEp() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/anime")
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
      });
  }, []);
  return data ? (
    <SafeAreaView>
      <ScrollView>
        <View style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 30 }}>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }}>
              <Link href={"../"}>
                <Ionicons name="arrow-back" size={28} color="black" />
              </Link>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>Top Hits Anime</Text>
            </View>
            <AntDesign name="search1" size={28} color="black" />
          </View>
          <View>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View style={{ flex: 0.5, marginBottom: 16, marginTop: 16 }}>
                    <Link href={`/animeDetail/${item.id}`} style={{ width: "100%" }}>
                      <ImageBackground
                        style={styles.image}
                        source={{ uri: item?.attributes.posterImage.original }}
                        width={150}
                        height={200}
                        resizeMode="cover"
                      >
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
                          <Text style={{ color: "white" }}>{item?.attributes.averageRating}</Text>
                        </View>
                      </ImageBackground>
                    </Link>
                  </View>
                  <View style={{ flex: 0.5, justifyContent: "space-between", paddingBottom: 30, paddingTop: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item?.attributes.titles.en}</Text>
                    <Text style={{ fontSize: 14 }}>{item?.attributes.createdAt.slice(0, 4)} | Japan</Text>
                    <Text style={{ fontSize: 12, color: "#424242" }}>{item?.attributes.ageRatingGuide.slice(5)}</Text>
                    <View
                      style={{
                        width: 90,
                        height: 32,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#06C149",
                        borderRadius: 100,
                      }}
                    >
                      <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>+ My list </Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        <ActivityIndicator />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 150,
    justifyContent: "space-between",
    paddingBottom: 50,
    borderRadius: 18,
    overflow: "hidden",
    display: "flex",
    gap: 100,
  },
});
