import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/coins/CoinAction";
import { CoinCard } from "./CoinCard";

export const AllCurrency = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.coinState);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const { loading, coins } = state;

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#FFE81C" />
      ) : (
        <FlatList
          style={styles.list}
          data={coins}
          keyExtractor={(item) => item.market_data.market_cap_rank.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { coin: item })}>
              <CoinCard coin={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D1024",
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  list: {
    width: "90%",
  },
});
