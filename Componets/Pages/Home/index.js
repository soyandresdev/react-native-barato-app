/**
 *
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {orderBy, filter} from 'lodash';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Picker,
  ScrollView,
  TextInput,
} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {connect} from 'react-redux';
import Slider from '@react-native-community/slider';
import {addToCart} from '../../../redux/actions/cartActions';
import {fetchProducts} from '../../../redux/actions/productAction';
import Product from '../../Molecules/Product/index';
import CheckBox from '../../Atoms/CheckBox/index';
import Category from '../../Atoms/Category/index';
import Icon from 'react-native-vector-icons/Ionicons';
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
  categories,
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
  const [pages, setPages] = useState(10);

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
      <SafeAreaView style={styles.body}>
        <View style={styles.sectionTitle}>
          <ImageBackground
            source={{
              uri: 'https://picsum.photos/id/400/200/300',
            }}
            style={styles.imagenBackground}>
            {/* <Text style={styles.title}>Products</Text> */}
            <View style={styles.boxSearch}>
              <Icon name="ios-search" size={20} style={styles.searchIcon} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Search Products"
                placeholderTextColor="grey"
                style={styles.searchTextInput}
              />
            </View>
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
        <ScrollView
          onScroll={e => {
            var windowHeight = Dimensions.get('window').height,
              height = e.nativeEvent.contentSize.height,
              offset = e.nativeEvent.contentOffset.y;
            if (windowHeight + offset >= height) {
              setPages(pages + 10);
            }
          }}>
          {showFilter && (
            <View style={styles.filterView}>
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
                  style={styles.sliderFilter}
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
                  style={styles.sliderFilter}
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
            </View>
          )}
          {!showFilter && (
            <View style={styles.sectionList}>
              <View>
                <Picker
                  selectedValue={orderByType}
                  style={styles.selectTypes}
                  onValueChange={itemValue => setOrderByType(itemValue)}>
                  <Picker.Item label="Price" value="price" />
                  <Picker.Item label="Available" value="available" />
                  <Picker.Item label="Quantity" value="quantity" />
                </Picker>
              </View>
              <Text style={styles.categoryTitle}>Categories</Text>

              <View style={styles.boxCategory}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {categories.map(item => {
                    return (
                      <Category
                        key={item.name}
                        imageUri={{
                          uri: `https://picsum.photos/id/${item.id}/200/300`,
                        }}
                        name={item.name}
                      />
                    );
                  })}
                </ScrollView>
              </View>
              <View>
                {orderFilterData.slice(0, pages).map(item => {
                  return (
                    <View key={item.id}>
                      <Product
                        item={item}
                        addItemsToCart={addItemsToCart}
                        product={item}
                      />
                      <View style={styles.line} />
                    </View>
                  );
                })}
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

Home.navigationOptions = {
  title: 'Home',
};

const mapStateToProps = state => ({
  categories: state.categories.items,
  products: state.products.items,
});

export default connect(mapStateToProps, {
  onAddToCart: addToCart,
  onFetchProducts: fetchProducts,
})(Home);
