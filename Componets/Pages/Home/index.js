/**
 *
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {orderBy, filter} from 'lodash';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Picker,
  ScrollView,
} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {connect} from 'react-redux';
import Slider from '@react-native-community/slider';
import {addToCart} from '../../../redux/actions/cartActions';
import {fetchProducts} from '../../../redux/actions/productAction';
import Product from '../../Molecules/Product/index';
import CheckBox from '../../Atoms/CheckBox/index';
import styles from './styles';

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
  const [showFilter, setShowFilter] = useState(false);
  const [valueFilterSliderPrice, setValueFilterSliderPrice] = useState(
    maxValueProducts,
  );
  const [valueSliderQuantity, setValueSliderQuantity] = useState(
    maxValueQuantity,
  );
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [orderByType, setOrderByType] = useState('price');
  const [showResetButton, setShowResetButton] = useState(false);
  const [filterEjectCount, setFilterEjectCount] = useState(0);

  const screenWidth = Math.round(Dimensions.get('window').width);
  useEffect(() => {
    onFetchProducts();
    console.log('Get products');
  }, [onFetchProducts]);

  useEffect(() => {
    if (
      valueFilterSliderPrice !== maxValueProducts ||
      valueSliderQuantity !== maxValueQuantity ||
      termsAccepted
    ) {
      setShowResetButton(true);
    } else {
      setShowResetButton(false);
      setFilterEjectCount(0);
    }
  }, [
    valueFilterSliderPrice,
    valueSliderQuantity,
    termsAccepted,
    maxValueProducts,
    maxValueQuantity,
  ]);

  const addItemsToCart = product => {
    onAddToCart(product);
  };
  const resetFilter = product => {
    setValueFilterSliderPrice(maxValueProducts);
    setValueSliderQuantity(maxValueQuantity);
    setTermsAccepted(false);
    setShowResetButton(false);
    setFilterEjectCount(0);
  };
  let orderFilterData = orderBy(products, [`${orderByType}`], ['desc']);
  if (
    valueFilterSliderPrice !== maxValueProducts ||
    valueSliderQuantity !== maxValueQuantity ||
    termsAccepted
  ) {
    if (valueFilterSliderPrice !== maxValueProducts) {
      orderFilterData = filter(orderFilterData, function(o) {
        return (
          Number(o.price.replace(/[^0-9\.]+/g, '')) < valueFilterSliderPrice
        );
      });
    }
    if (valueSliderQuantity !== maxValueQuantity) {
      orderFilterData = filter(orderFilterData, function(o) {
        return o.quantity < valueFilterSliderPrice;
      });
    }
    if (termsAccepted) {
      orderFilterData = filter(orderFilterData, {available: true});
    }
  }
  return (
    <>
      <View style={styles.body}>
        <View style={styles.sectionTitle}>
          <ImageBackground
            source={{
              uri: 'https://picsum.photos/id/400/200/300',
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
          <ScrollView style={styles.filterView}>
            <Text style={styles.filterViewTitle}>Filter</Text>
            <Text style={styles.filterViewTitleSecond}>
              {' '}
              Total Filter: {orderFilterData.length}
            </Text>
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
            <View style={styles.filterViewItem}>
              <View style={styles.fAilterViewItemActions}>
                <TouchableOpacity
                  onPress={() => {
                    setFilterEjectCount(filterEjectCount + 1);
                    setShowFilter(!showFilter);
                  }}
                  style={styles.filterBtnActions}>
                  <Text style={styles.textBtn}>Filter</Text>
                </TouchableOpacity>
                {showResetButton && (
                  <TouchableOpacity
                    onPress={() => {
                      resetFilter();
                    }}
                    style={styles.filterBtnActions}>
                    <Text style={styles.textBtn}>Reset</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </ScrollView>
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

export default connect(mapStateToProps, {
  onAddToCart: addToCart,
  onFetchProducts: fetchProducts,
})(Home);
