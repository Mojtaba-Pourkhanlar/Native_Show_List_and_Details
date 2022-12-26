import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export const CurrencyDetails = ({ route }) => {
  const { image, name, symbol, market_data } = route.params.coin;

  return (
    <View style={styles.container}>
      <>
        <Button
          color="#841584"
          style={styles.btn}
          title={`#${market_data.market_cap_rank}`}
        />
      </>

      <View style={styles.header}>
        <Image source={{ uri: image.large }} style={styles.image} />
        <View style={{ marginLeft: 30 }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.sym}>{symbol.toUpperCase()}</Text>
        </View>
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>Current Price : </Text>
        <Text style={styles.textPrice}>${market_data.current_price.btc}</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.text}>Price Change : </Text>
        <Text
          style={[
            styles.pricePercentage,
            market_data.price_change_percentage_24h > 0
              ? styles.priceUp
              : styles.priceDown,
          ]}>
          {market_data.price_change_percentage_24h.toFixed(2)}%
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.text}>Market Cap : </Text>
        <Text style={styles.textPrice}>
          {market_data.market_cap_change_24h}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D1024",
    flex: 1,
    marginTop: 20,
  },
  image: {
    width: 140,
    height: 140,
    marginLeft: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },
  name: {
    fontSize: 35,
    color: "#fff",
  },
  sym: {
    fontSize: 25,
    color: "#ccc",
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 70,
    marginHorizontal: 20,
  },
  textPrice: {
    fontSize: 23,
    color: "#fff",
  },
  text: {
    fontSize: 20,
    color: "#e0e0e0",
  },
  priceUp: {
    color: "#00B589",
    fontSize: 20,
  },
  priceDown: {
    color: "#fc4422",
    fontSize: 20,
  },
});
