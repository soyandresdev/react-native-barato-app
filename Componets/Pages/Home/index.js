/**
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {orderBy} from 'lodash';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Picker,
} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {connect} from 'react-redux';
import Slider from '@react-native-community/slider';
import {addToCart} from '../../../redux/actions/cartActions';
import {fetchProducts} from '../../../redux/actions/productAction';
import Product from '../../Molecules/Product/index';
import CheckBox from '../../Atoms/CheckBox/index';

type Props = {
  onAddToCart: Function,
  onFetchProducts: Function,
  products: {
    quantity: number,
    price: string,
    available: boolean,
    sublevel_id: number,
    name: string,
    id: string,
  },
};

const Home: NavigationStackScreenComponent<Props> = ({
  onAddToCart,
  onFetchProducts,
  products,
}) => {
  const priceProducts = products.map(item =>
    Number(item.price.replace(/[^0-9\.]+/g, '')),
  );
  const quantityProducts = products.map(item => Number(item.quantity));
  const minValueProducts = Math.min(...priceProducts);
  const maxValueProducts = Math.max(...priceProducts);
  const minValueQuantity = Math.min(...quantityProducts);
  const maxValueQuantity = Math.max(...quantityProducts);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [valueFilterSliderPrice, setValueFilterSliderPrice] = useState(
    maxValueProducts,
  );
  const [valueSliderQuantity, setValueSliderQuantity] = useState(
    maxValueQuantity,
  );
  const [orderByType, setOrderByType] = useState('price');
  const screenWidth = Math.round(Dimensions.get('window').width);
  useEffect(() => {
    onFetchProducts();
  }, [onFetchProducts]);

  const addItemsToCart = product => {
    onAddToCart(product);
  };
  const orderFilterData = orderBy(products, [`${orderByType}`], ['desc']);
  return (
    <>
      <View style={styles.body}>
        <View style={styles.sectionTitle}>
          <ImageBackground
            source={{
              uri: `https://picsum.photos/id/400/200/300`,
            }}
            style={{width: '100%', height: '100%'}}>
            <Text style={styles.title}>Products</Text>
            <View style={styles.filterBox}>
              <TouchableOpacity
                onPress={() => {
                  setShowFilter(!showFilter);
                }}
                style={styles.filterBtn}>
                {showFilter && <Text style={styles.textBtn}>Close</Text>}
                {!showFilter && <Text style={styles.textBtn}>Filter</Text>}
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        {showFilter && (
          <View style={styles.filterView}>
            <Text style={styles.filterViewTitle}>Filter</Text>
            <View style={styles.filterViewItem}>
              <Text style={styles.filterViewItemTitle}>
                Price: $
                {valueFilterSliderPrice
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, '$&,')}{' '}
                Max
              </Text>
              <Slider
                style={{width: screenWidth - 40}}
                minimumValue={minValueProducts}
                maximumValue={maxValueProducts}
                minimumTrackTintColor="#111d5e"
                thumbTintColor="#111d5e"
                step={2}
                value={valueFilterSliderPrice}
                onValueChange={value => setValueFilterSliderPrice(value)}
                // maximumTrackTintColor="#000000"
              />
              <View style={styles.filterViewSliderTotal}>
                <Text>
                  Min: $
                  {minValueProducts
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, '$&,')}{' '}
                </Text>
                <Text>
                  Max: $
                  {maxValueProducts
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, '$&,')}{' '}
                </Text>
              </View>
            </View>
            <View style={styles.filterViewItem}>
              <Text style={styles.filterViewItemTitle}>
                Quantity: {valueSliderQuantity} Max
              </Text>
              <Slider
                style={{width: screenWidth - 40}}
                minimumValue={minValueQuantity}
                maximumValue={maxValueQuantity}
                minimumTrackTintColor="#111d5e"
                thumbTintColor="#111d5e"
                step={2}
                value={valueSliderQuantity}
                onValueChange={value => setValueSliderQuantity(value)}
                // maximumTrackTintColor="#000000"
              />
              <View style={styles.filterViewSliderTotal}>
                <Text>Min: {minValueQuantity} </Text>
                <Text>Max: {maxValueQuantity} </Text>
              </View>
            </View>
            <View style={styles.filterViewItem}>
              <Text style={styles.filterViewItemTitle}>Available:</Text>
              <CheckBox
                selected={termsAccepted}
                onPress={() => {
                  setTermsAccepted(!termsAccepted);
                }}
                text="Filter by only available"
              />
            </View>
          </View>
        )}
        {!showFilter && (
          <View style={styles.sectionList}>
            <View>
              <Picker
                selectedValue={orderByType}
                style={{height: 50, width: 100}}
                onValueChange={itemValue => setOrderByType(itemValue)}>
                <Picker.Item label="Price" value="price" />
                <Picker.Item label="Available" value="available" />
                <Picker.Item label="Quantity" value="quantity" />
              </Picker>
            </View>
            <FlatList
              data={orderFilterData}
              renderItem={({item}) => (
                <Product
                  item={item}
                  addItemsToCart={addItemsToCart}
                  product={item}
                />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => (
                <View style={{height: 0.5, backgroundColor: '#34495e90'}} />
              )}
            />
          </View>
        )}
      </View>
    </>
  );
};

Home.navigationOptions = {
  title: 'Barato App',
};

const mapStateToProps = state => ({
  products: state.products.items,
});

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  sectionTitle: {
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFF',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  sectionList: {
    justifyContent: 'center',
    flex: 1,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
  highlight: {
    fontWeight: '700',
  },
  filterBox: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  filterBtn: {
    borderRadius: 30,
    margin: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 100,
  },
  textBtn: {
    color: '#111d5e',
    fontSize: 16,
    padding: 10,
  },
  filterView: {
    padding: 15,
  },
  filterViewTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  filterViewItem: {
    paddingLeft: 10,
    marginTop: 20,
  },
  filterViewItemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  filterViewSliderTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default connect(mapStateToProps, {
  onAddToCart: addToCart,
  onFetchProducts: fetchProducts,
})(Home);
