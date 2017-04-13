import React from 'react'
import Search from './Seacrh'
import renderer from 'react-test-renderer'

test('Seacrh snapshot test', () => {
    const component = renderer.create(<Search />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})