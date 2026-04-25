 import { globalStyles, colors } from "@/styles/global";
 import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
 import { useState } from "react";

 export default function AddMealScreen () {
     const [name, setName] = useState("");
     const [calories, setCalories] = useState("");
     const [protein, setProtien] = useState("");
     const [carbs, setCarbs] = useState("");
     const [fat, setFat] = useState("");

     const handleMeal = () => {
        console.log({name,calories,protein,carbs,fat})
     };
     return (
        <View style = {globalStyles.container}>
            <Text style = {globalStyles.title}>Add Meal</Text>

            <TextInput style={[styles.input, styles.rowInput]}
            placeholder="Meal-Name"
            placeholderTextColor={colors.textSecondary}
            value={name}
            onChangeText={setName} 
            /> 

            <TextInput style={[styles.input, styles.rowInput]}
            placeholder="Calories" 
            placeholderTextColor={colors.textSecondary}
            keyboardType="numeric"
            value={calories}
            onChangeText={setCalories}
            />

            <TextInput style={[styles.input, styles.rowInput]}
            placeholder="Protien (g)"
            placeholderTextColor={colors.textSecondary}
            keyboardType="numeric"
            value={protein}
            onChangeText={setProtien}
            />

            <TextInput style={[styles.input,styles.rowInput]} 
            placeholder="Carbs (g)"
            placeholderTextColor={colors.textSecondary}
            keyboardType="numeric"
            value={carbs}
            onChangeText={setCarbs}
            />            
            
            <TextInput style={[styles.input, styles.rowInput]}
            placeholder="Fat (g)"
            placeholderTextColor={colors.textSecondary}
            keyboardType="numeric"
            value={fat}
            onChangeText={setFat}
            /> 

            <TouchableOpacity style={styles.button} onPress = {handleMeal}> 
                <Text style = {styles.buttonText}>Add Meal</Text> </TouchableOpacity>           
        </View>
     );
 }

 const styles = StyleSheet.create ({
    input: {
    backgroundColor: colors.surface,
    color: colors.text,
    padding: 16,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  rowInput: {
    flex: 1,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
    marginBottom:24,
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
 });