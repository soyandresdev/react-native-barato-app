import {StyleSheet, Platform, Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
export default StyleSheet.create({
  body: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  imagenBackground: {
    width: '100%',
    height: '100%',
  },
  sectionTitle: {
    height: 140,
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
    flex: 1,
    padding: 10,
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
  filterBtnActions: {
    borderRadius: 30,
    margin: 10,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 100,
  },
  filterView: {
    padding: 15,
  },
  filterViewTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  filterViewTitleSecond: {
    fontSize: 18,
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
  fAilterViewItemActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  filterViewSliderTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectTypes: {
    height: 50,
    width: 100,
  },
  line: {height: 0.5, backgroundColor: '#34495e90'},
  boxSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 1,
    marginTop: Platform.OS == 'android' ? 30 : null,
    borderRadius: 10,
  },
  searchTextInput: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: 'white',
  },
  searchIcon: {
    marginRight: 10,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: '700',
    // paddingHorizontal: 20,
  },
  boxCategory: {height: 130, marginTop: 20},
  sliderFilter: {
    width: screenWidth - 40,
  },
});
