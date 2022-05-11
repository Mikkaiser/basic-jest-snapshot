import React from 'react';
import AppButton from '../src/components/AppButton';
import renderer from 'react-test-renderer';

test('AppButton renders correctly', () => {
    const tree = renderer.create(<AppButton onPress={() => alert('Hello World')}/>).toJSON();
    expect(tree).toMatchSnapshot();
})