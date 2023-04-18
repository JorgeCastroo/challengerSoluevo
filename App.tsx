import React, { ReactElement } from "react";
import { SafeAreaView, StatusBar, Platform } from "react-native";
import AppRoutes from "./src/routes/Routes";
import theme from "./src/styles/theme";
import { useTheme, ThemeProvider } from "styled-components";

const ApplicationContent = () => {
  const { colors: colorsOfTheme } = useTheme();

  return (
    <>
      <>
        <SafeAreaView
          style={{ flex: 0, backgroundColor: colorsOfTheme.background }}
        />

        <SafeAreaView
          style={{
            flex: 1,
            paddingVertical: Platform.OS === "ios" ? 16 : 0,
            backgroundColor: colorsOfTheme.background,
          }}
        >
          <StatusBar barStyle="light-content" backgroundColor={"#131418"} />
          <AppRoutes />
        </SafeAreaView>
      </>
    </>
  );
};

function App(): ReactElement {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ApplicationContent />
      </ThemeProvider>
    </>
  );
}

export default App;
