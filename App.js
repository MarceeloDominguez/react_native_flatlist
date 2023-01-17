import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import ListItems from "./components/ListItems";

const data = new Array(50).fill(0).map((_, index) => ({ id: index }));

export default function App() {
  const vItems = useSharedValue([]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#579BB1" />
      <FlatList
        contentContainerStyle={{ paddingVertical: 40 }}
        data={data}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={({ viewableItems }) => {
          vItems.value = viewableItems;
        }}
        renderItem={({ item }) => {
          return <ListItems item={item} vItems={vItems} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#579BB1",
  },
});
