import { StatusBar } from "expo-status-bar";
import SplashScreen from "./src/SplashScreen";
import { useEffect, useState } from "react";
import HomeScreen from "./src/HomeScreen";

export default function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isShowSplashScreen ? <SplashScreen /> : <HomeScreen />}
      <StatusBar style="auto" />
    </>
  );
}
