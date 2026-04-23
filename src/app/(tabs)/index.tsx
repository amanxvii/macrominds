 import { Text, View, StyleSheet } from "react-native";
 import { globalStyles } from "@/styles/global";
 import HomeHeader from "@/components/HomeHeader";
 export default function HomeScreen () {

  return (
    <View style = {globalStyles.container}> 
      <Text style = {globalStyles.title} >MacroMinds</Text>
      <HomeHeader />
       
    </View>
  );
 }
 