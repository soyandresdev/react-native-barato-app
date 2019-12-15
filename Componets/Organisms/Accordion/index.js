import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Accordion: () => React$Node = ({children, products, name}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
        <Text style={[styles.title, styles.font]}>{name}</Text>
        {(children || products) && (
          <Icon
            name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={30}
            color="#fcc"
          />
        )}
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {children && (
        <>{expanded && <View style={styles.child}>{children}</View>}</>
      )}
      {products && (
        <>
          {expanded && (
            <View style={styles.child}>
              {products && (
                <>
                  {products.map(pro => (
                    <TouchableOpacity
                      key={`${pro.name}${pro.sublevel_id}${pro.quantity}`}
                      style={styles.row}
                      onPress={() => toggleExpand()}>
                      <Text style={[styles.title, styles.font]}>
                        {pro.name}
                      </Text>
                      <Icon name="favorite-border" size={30} color="#f4f4" />
                    </TouchableOpacity>
                  ))}
                </>
              )}
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
  },
  parentHr: {
    height: 1,
    color: '#fff',
    width: '100%',
  },
  child: {
    paddingLeft: 10,
  },
});
export default Accordion;
