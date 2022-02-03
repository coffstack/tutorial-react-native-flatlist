import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { CoffeeHeader } from "./components/CoffeeHeader/CoffeeHeader";
import { CoffeeItem } from "./components/CoffeeItem";
import { SeparatorItem } from "./components/SeparatorItem/SeparatorItem";
import { Coffee, coffeeList } from "./data/coffeeList";

export default function App() {
  function renderItem({ item }: ListRenderItemInfo<Coffee>) {
    return <CoffeeItem {...item} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={CoffeeHeader}
        ItemSeparatorComponent={SeparatorItem}
        data={coffeeList}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
