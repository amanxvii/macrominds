import {StyleSheet, View} from 'react-native'
import MacroCard from './MacroCard'

export default function MacroGrid () {
    return(
        <View style={styles.grid}>
        <MacroCard label='Calories' value='0' goal='2,000' color='#ff6b6b' />
        <MacroCard label='Protien' value='0' goal='120g' color='#4ecdc4' />
        <MacroCard label='Carbs' value='0' goal='250g' color='#ffd93d' />
        <MacroCard label='Fats' value='0' goal='70g' color='#6bcb77' />
        </View>
    );
}

const styles = StyleSheet.create ({
    grid:{
        flexDirection:'row',
        flexWrap:'wrap',
        gap:12,
    },
});