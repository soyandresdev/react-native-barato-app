/**
 * @format
 */

import 'react-native';
import React from 'react';
import CheckBox from '../Componets/Atoms/CheckBox/index';
import Accordion from '../Componets/Atoms/Accordion/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Renders correctly Atoms', () => {
  it('Renders correctly CheckBox', () => {
    renderer.create(<CheckBox />);
  });
  it('Renders correctly Accordion', () => {
    renderer.create(<Accordion />);
  });
});
