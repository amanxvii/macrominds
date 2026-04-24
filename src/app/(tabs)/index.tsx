 import { Text, ScrollView, StyleSheet } from "react-native";
 import { globalStyles } from "@/styles/global";
 import HomeHeader from "@/components/HomeHeader";
 import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";
 export default function HomeScreen () {

  return (
    <ScrollView style = {globalStyles.container}> 
      <Text style = {globalStyles.title} >MacroMinds</Text>
      <HomeHeader />
       <MacroGrid />
       <RecentMeals />
    </ScrollView>
  );
 }
 