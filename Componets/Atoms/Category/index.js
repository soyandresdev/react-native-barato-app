import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Category({name, imageUri}) {
  return (
    <View style={styles.container}>
      <View style={styles.imagenBox}>
        <Image source={imageUri} style={styles.imagen} />
      </View>
      <View style={styles.name}>
        <Text>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 130,
    marginRight: 15,
    borderWidth: 0.5,
    borderColor: '#dddddd',
  },
  imagenBox: {flex: 2},
  imagen: {flex: 1, width: null, height: null, resizeMode: 'cover'},
  name: {flex: 1, paddingLeft: 10, paddingTop: 10},
});
