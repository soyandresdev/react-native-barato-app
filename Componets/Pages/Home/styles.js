import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
});
