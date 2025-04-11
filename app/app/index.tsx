//The onboarding component is an additional component whose route I later removed since it was unnecessary in the project 


import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function index() {
  const [isOnboarding, setIsOnboarding] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkOnboarding = async () => {
      const isOnboarding = await AsyncStorage.getItem("onboarding");
      if (isOnboarding) {
        setIsOnboarding(false);
      }
      setLoading(false);
    };
    checkOnboarding();
  }, []);

  if (loading) return null;

  return (
    <Redirect href={isOnboarding ? "/(routes)/home" : "/(routes)/home"} />
  );
}
