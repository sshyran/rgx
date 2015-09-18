
import React from 'react/addons'
import expect from 'expect'
import Grid from '../src/Grid'
import Cell from '../src/Cell'

const { TestUtils } = React.addons

describe('Grid', () => {

  let grid

  beforeEach(() => {
    const props = {
      gutter: 32
    }
    grid = TestUtils.renderIntoDocument(
      <Grid {...props}>
        <Cell min={128}>
          Cell 128
        </Cell>
        <Cell min={256}>
          Cell 256
        </Cell>
      </Grid>
    )
  })

  it('should render', () => {
    expect(grid).toExist()
  })

  it('should set props on children')

  it('should have negative margins for gutters')

})
