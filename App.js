import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./app/containers/StackNavigator";
import { store } from "./app/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </NavigationContainer>
  );
}
