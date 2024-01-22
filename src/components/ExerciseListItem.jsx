
import { StyleSheet, Text, View, Pressable } from 'react-native';
import {Link} from 'expo-router';

ExerciseListItem = ({ item }) => {
    return(
      <Link href={ `./${item.name} `} asChild>
        <Pressable style={styles.exerciseContainer}>
          <Text style = {styles.exerciseName}>Name: {item.name}</Text>
          <Text style = {styles.exerciseSubtitle}> {item.muscle} | {item.equipment}</Text>
        </Pressable>
      </Link>
    )
  }

export default ExerciseListItem;

  const styles = StyleSheet.create({
    exerciseName: {
      fontSize: 20, 
      fontWeight: 500, 
    },
    exerciseSubtitle: {
      textTransform: 'capitalize', 
      color: 'dimgrey'
    },
    exerciseContainer: {
      backgroundColor: 'white',
      padding: 10, 
      borderRadius:10, 
      gap: 5,
      marginBottom: 5, 
      marginHorizontal: 2,

      //shadow 
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,

    },
  });