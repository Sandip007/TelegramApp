
// its  Global Root Layout
// Define Global Provider

import {Slot} from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthProvide from "@/provider/AuthProvider";

export default function RootLayout() {
  return(
      <GestureHandlerRootView style={{ flex: 1 }}>
          <AuthProvide>
              <Slot />
          </AuthProvide>
      </GestureHandlerRootView>
  );
}