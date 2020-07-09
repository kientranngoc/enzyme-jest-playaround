import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('App', () => {
  it('Renders success', () => {
    render(<App />)
  })
  const wrapper = shallow(<App />)
  it('Should contain 1 div element', () => {
    expect(wrapper.find('div').length).toBe(1)
  })
  it('Should contain a div with 1 h1 element', () => {
    expect(wrapper.find('div').children().length).toBe(1)
  })
  it('Should match with the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
