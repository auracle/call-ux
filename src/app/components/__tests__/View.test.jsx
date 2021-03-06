import React from 'react';
import { mount } from 'enzyme';
import View from 'app/components/View';

describe('Component: <View />', () => {
  it('should render self', () => {
    const wrapper = mount(<View />);
    expect(wrapper.find('.view')).toHaveLength(1);
  });
  it('should render children', () => {
    const wrapper = mount(
      <View>
        <div className="foo" />
      </View>,
    );
    expect(wrapper.find('.foo')).toHaveLength(1);
  });
});
