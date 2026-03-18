import React from 'react'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import Projects from '../components/Projects'

vi.mock('next/image', () => {
  return {
    default: (props: any) => {
      const { src, alt, ...rest } = props
      return React.createElement('img', {
        src: typeof src === 'string' ? src : '',
        alt,
        ...rest,
      })
    },
  }
})

describe('Projects category tags', () => {
  it('styles the "Product Marketing" category badge', () => {
    render(React.createElement(Projects))

    const productMarketingTag = screen.getByText('Product Marketing')
    expect(productMarketingTag).toHaveClass('bg-teal-100')
    expect(productMarketingTag).toHaveClass('text-teal-800')
    expect(productMarketingTag).toHaveClass('dark:bg-teal-900')
    expect(productMarketingTag).toHaveClass('dark:text-teal-200')
  })
})

