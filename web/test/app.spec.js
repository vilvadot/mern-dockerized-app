import React from 'react'
import Title from '../src/components/Title'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Title', () => {
  it('renders the title we pass', () => {
    const TITULO = 'Pietro'
    const titleComponent = shallow(<Title title={TITULO}/>);

    expect(titleComponent.text()).toBe(TITULO);
  })
});
