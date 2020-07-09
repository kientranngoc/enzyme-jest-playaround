import React from 'react'
import Link from './Link'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Link', () => {
  const wrapper = shallow(
    <Link isHidden={false} address="https://www.google.com" />
  )
  it('Should contain 1 a element', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
    expect(wrapper.find('a').length).toBe(1)
  })
  it('Should match href', () => {
    expect(wrapper.find('a[href="https://www.google.com"]').length).toBe(1)
  })
  it('Should be emty if isHidden is true', () => {
    const wrapper = shallow(
      <Link isHidden={true} address="https://www.google.com" />
    )
    expect(wrapper.find('a').length).toBe(0)
  })
})
