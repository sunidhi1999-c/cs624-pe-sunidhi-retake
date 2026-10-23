import { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const coreCourses = [
  'CS 504 Software Engineering',
  'CS 506 Programming for Computing',
  'CS 519 Cloud Computing Overview',
  'CS 533 Computer Architecture',
  'CS 547 Secure Systems and Programs',
  'CS 622 Discrete Math and Algorithms for Computing',
  'DS 510 Artificial Intelligence for Data Science',
  'DS 620 Machine Learning and Deep Learning',
];

const depthCourses = [
  'CS 624 Full-Stack Development - Mobile App',
  'CS 628 Full-Stack Development - Web App',
];

const capstoneCourses = [
  'CS 687 Computer Science Capstone',
];

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <Image
        source={require('../../assets/icon.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.inputSection}>
        <Text style={styles.label}>Which course did you like?</Text>

        <TextInput
          style={styles.input}
          placeholder="Example: CS 624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
        />

        {favoriteCourse.length > 0 && (
          <Text style={styles.favorite}>
            Your favorite course is: {favoriteCourse}
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Core Requirements (24 credits)
        </Text>

        {coreCourses.map((course) => (
          <Text key={course} style={styles.course}>
            {course}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Depth of Study (6 credits)
        </Text>

        {depthCourses.map((course) => (
          <Text key={course} style={styles.course}>
            {course}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Capstone (3 credits)
        </Text>

        {capstoneCourses.map((course) => (
          <Text key={course} style={styles.course}>
            {course}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default CoreComponents;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },

  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 25,
  },

  inputSection: {
    marginBottom: 20,
  },

  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },

  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
  },

  favorite: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },

  section: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginTop: 20,
  },

  heading: {
    backgroundColor: 'yellow',
    fontSize: 26,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 12,
  },

  course: {
    fontSize: 16,
    lineHeight: 27,
  },
});