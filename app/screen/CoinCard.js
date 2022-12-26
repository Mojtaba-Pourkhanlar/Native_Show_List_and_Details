import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export const CoinCard = ({ coin }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.coinName}>
        <Image source={{ uri: coin.image.small }} style={styles.image} />
        <View style={styles.containerNames}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textPrice}>
          ${coin.market_data.current_price.btc}
        </Text>
        <Text
          style={[
            styles.pricePercentage,
            coin.market_data.price_change_percentage_24h > 0
              ? styles.priceUp
              : styles.priceDown,
          ]}>
          {coin.market_data.price_change_percentage_24h.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  textPrice: {
    fontSize: 20,
    color: "#fff",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B589",
    fontSize: 15,
  },
  priceDown: {
    color: "#fc4422",
    fontSize: 15,
  },
  image: {
    width: 40,
    height: 40,
  },
  textSymbol: {
    color: "#c8cbfa",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
