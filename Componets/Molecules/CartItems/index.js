import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import Counter from 'react-native-counters';
import {removeItem, addCountCart} from '../../../redux/actions/cartActions';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CartItems: () => React$Node = ({
  item,
  index,
  removeItem: onRemoveItem,
  addCountCart: onAddCountCart,
  countCart,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.productDes}>
        <View>
          <Text style={styles.text}>{item.name}</Text>
          <View style={styles.productActions}>
            <Counter
              start={countCart[item.id]}
              min={1}
              max={item.quantity}
              onChange={value => {
                onAddCountCart({[item.id]: value});
              }}
              touchableColor="#111d5e"
            />
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Alert',
                  'Are you sure you want to delete?',
                  [
                    {
                      text: 'No',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'Yes',
                      onPress: () => {
                        onRemoveItem({
                          index: index,
                          item: item,
                        });
                      },
                    },
                  ],
                  {cancelable: true},
                );
              }}>
              <Icon
                style={{marginLeft: 20}}
                name="delete"
                size={30}
                color="#111d5e"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.text}>
            ${Number(item.price.replace(/[^0-9\.]+/g, '')) * countCart[item.id]}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productDes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontSize: 24,
    padding: 10,
  },
  productActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default connect(null, {removeItem, addCountCart})(CartItems);
