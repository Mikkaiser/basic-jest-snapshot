import React from 'react';
import renderer from 'react-test-renderer';
import SimpleText from '../src/components/SimpleText';

test('SimpleText renders correctly', () => {
    const tree = renderer.create(<SimpleText initialName={'Mikkaiser'} />).toJSON();
    expect(tree).toMatchSnapshot();
})