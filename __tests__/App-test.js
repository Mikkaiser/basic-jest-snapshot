/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("<App />", () => {
  it('has 1 child', () => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree.children.length).toBe(1);
  });
});