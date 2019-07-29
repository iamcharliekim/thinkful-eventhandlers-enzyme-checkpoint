import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordion from './Accordion'

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

// The component renders an empty li when the sections prop is not supplied
it('the Accordion component renders an empty li when the sections prop is not supplied', ()=>{
	const tree = renderer.create(<Accordion/>).toJSON();
	expect(tree).toMatchSnapshot()
})

// The component renders no sections as active by default
it('the Accordion component renders no sections as active by default', ()=>{
	const tree = renderer.create(<Accordion sections={sections}/>).toJSON();
	expect(tree).toMatchSnapshot()
})

// The component opens a clicked section
it('the Accordion component opens a clicked section', ()=>{
	const wrapper = shallow(<Accordion sections={sections}/>)
	
	wrapper.find('button').at(0).simulate('click')
	expect(toJson(wrapper)).toMatchSnapshot()
})

// The component only opens the last section when multiple sections have been clicked. 

it('the Accordion component only opens 1 section at a time', ()=>{
	const wrapper = shallow(<Accordion sections={sections}/>)
	wrapper.find('button').at(0).simulate('click')
	wrapper.find('button').at(1).simulate('click')
	
	expect(toJson(wrapper)).toMatchSnapshot()
})
