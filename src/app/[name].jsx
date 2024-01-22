import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Link} from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import exercises from '../../assets/data/exercises.json'
import {Stack} from 'expo-router'
import { useState } from 'react';

export default function ExerciseDetailsScreen() {
    const params = useLocalSearchParams(); 
    const exercise = exercises.find((item) => item.name == params.name)
    const [isInstructionsExpanded, setInstructionsExpanded] = useState(false)

    if (!exercise){
        return (
            <text>Exercise not found </text>
        )
    }
    return(
        <ScrollView contentContainerStyle = {styles.container}>
            <Stack.Screen options={{title: exercise.name}}/>
            <View style = {styles.panelHeader}>
                <Text style = {styles.exerciseName}>Name: {exercise.name}</Text>
                <Text style = {styles.exerciseSubtitle}> {exercise.muscle} | {exercise.equipment}</Text>
            </View>
            <View style = {styles.panelBody}>
                <Text style = {styles.exerciseInstruction} numberOfLines={isInstructionsExpanded ? 0 : 5}>
                    {exercise.instructions}
                </Text>
                <Text onPress = {() => setInstructionsExpanded(!isInstructionsExpanded)} style = {styles.seeMore}>{isInstructionsExpanded ? 'See less' : 'See More'}</Text>
            </View>
            
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 10, 
        gap: 10, 
    },
    panelHeader: {
        backgroundColor: 'white', 
        padding: 10 , 
        borderRadius: 10,
    },
    panelBody: {
        backgroundColor: 'white', 
        padding: 10 , 
        borderRadius: 10,
    },
    exerciseName: {
        fontSize: 20, 
        fontWeight: 500, 
      },
    exerciseSubtitle: {
        textTransform: 'capitalize', 
        color: 'dimgrey'
    },
    BackButton : {
        fontSize: 100, 
        marginTop: 20 

    },
    exerciseInstruction: {
        color: '#333333', 
        fontSize: 16, 
        marginTop: 10, 
        lineHeight: 24, 

      },
    seeMore: {
        alignSelf: 'center',
        padding: 10, 
        fontWeight: 600, 
        color: 'grey',

    }


})


