import { describe, expect, test } from 'vitest'
import { CSSUtility } from '../src'
import { semanticTokens, tokens } from '@css-panda/fixture'
import { Dictionary } from '@css-panda/dictionary'

describe('utilty class', () => {
  test('should prime cache for faster lookup', () => {
    const css = new CSSUtility({
      tokens: new Dictionary({ tokens, semanticTokens }),
      config: {
        properties: {
          backgroundColor: {
            className: 'bg',
            values: 'colors',
          },
          display: {
            className: 'd',
            values: ['flex', 'inline-flex'],
          },
          margin: {
            className: 'm',
            values: (tokens) => tokens('spacing'),
          },
          marginX: {
            className: 'mx',
            transform(value) {
              return { marginTop: value, marginBottom: value }
            },
            values: { sm: '20px', md: '40px' },
          },
        },
      },
    })

    expect(css.classNameMap).toMatchInlineSnapshot(`
      Map {
        "(backgroundColor = current)" => "bg_current",
        "(backgroundColor = gray.50)" => "bg_gray.50",
        "(backgroundColor = gray.100)" => "bg_gray.100",
        "(backgroundColor = gray.200)" => "bg_gray.200",
        "(backgroundColor = gray.300)" => "bg_gray.300",
        "(backgroundColor = gray.400)" => "bg_gray.400",
        "(backgroundColor = gray.500)" => "bg_gray.500",
        "(backgroundColor = gray.600)" => "bg_gray.600",
        "(backgroundColor = gray.700)" => "bg_gray.700",
        "(backgroundColor = gray.800)" => "bg_gray.800",
        "(backgroundColor = gray.900)" => "bg_gray.900",
        "(backgroundColor = green.50)" => "bg_green.50",
        "(backgroundColor = green.100)" => "bg_green.100",
        "(backgroundColor = green.200)" => "bg_green.200",
        "(backgroundColor = green.300)" => "bg_green.300",
        "(backgroundColor = green.400)" => "bg_green.400",
        "(backgroundColor = green.500)" => "bg_green.500",
        "(backgroundColor = green.600)" => "bg_green.600",
        "(backgroundColor = green.700)" => "bg_green.700",
        "(backgroundColor = green.800)" => "bg_green.800",
        "(backgroundColor = green.900)" => "bg_green.900",
        "(backgroundColor = red.50)" => "bg_red.50",
        "(backgroundColor = red.100)" => "bg_red.100",
        "(backgroundColor = red.200)" => "bg_red.200",
        "(backgroundColor = red.300)" => "bg_red.300",
        "(backgroundColor = red.400)" => "bg_red.400",
        "(backgroundColor = red.500)" => "bg_red.500",
        "(backgroundColor = red.600)" => "bg_red.600",
        "(backgroundColor = red.700)" => "bg_red.700",
        "(backgroundColor = red.800)" => "bg_red.800",
        "(backgroundColor = red.900)" => "bg_red.900",
        "(backgroundColor = primary)" => "bg_primary",
        "(backgroundColor = secondary)" => "bg_secondary",
        "(display = flex)" => "d_flex",
        "(display = inline-flex)" => "d_inline-flex",
        "(margin = 1)" => "m_1",
        "(margin = 2)" => "m_2",
        "(margin = 3)" => "m_3",
        "(margin = 4)" => "m_4",
        "(margin = 5)" => "m_5",
        "(margin = 6)" => "m_6",
        "(margin = -1)" => "m_-1",
        "(margin = -2)" => "m_-2",
        "(margin = -3)" => "m_-3",
        "(margin = -4)" => "m_-4",
        "(margin = -5)" => "m_-5",
        "(margin = -6)" => "m_-6",
        "(margin = 0.5)" => "m_0.5",
        "(margin = -0.5)" => "m_-0.5",
        "(margin = 1.5)" => "m_1.5",
        "(margin = -1.5)" => "m_-1.5",
        "(margin = 2.5)" => "m_2.5",
        "(margin = -2.5)" => "m_-2.5",
        "(margin = 3.5)" => "m_3.5",
        "(margin = -3.5)" => "m_-3.5",
        "(margin = gutter)" => "m_gutter",
        "(margin = -gutter)" => "m_-gutter",
        "(marginX = sm)" => "mx_sm",
        "(marginX = md)" => "mx_md",
      }
    `)

    expect(css.stylesMap).toMatchInlineSnapshot(`
      Map {
        "(backgroundColor = current)" => {
          "backgroundColor": "var(--colors-current)",
        },
        "(backgroundColor = gray.50)" => {
          "backgroundColor": "var(--colors-gray\\\\.50)",
        },
        "(backgroundColor = gray.100)" => {
          "backgroundColor": "var(--colors-gray\\\\.100)",
        },
        "(backgroundColor = gray.200)" => {
          "backgroundColor": "var(--colors-gray\\\\.200)",
        },
        "(backgroundColor = gray.300)" => {
          "backgroundColor": "var(--colors-gray\\\\.300)",
        },
        "(backgroundColor = gray.400)" => {
          "backgroundColor": "var(--colors-gray\\\\.400)",
        },
        "(backgroundColor = gray.500)" => {
          "backgroundColor": "var(--colors-gray\\\\.500)",
        },
        "(backgroundColor = gray.600)" => {
          "backgroundColor": "var(--colors-gray\\\\.600)",
        },
        "(backgroundColor = gray.700)" => {
          "backgroundColor": "var(--colors-gray\\\\.700)",
        },
        "(backgroundColor = gray.800)" => {
          "backgroundColor": "var(--colors-gray\\\\.800)",
        },
        "(backgroundColor = gray.900)" => {
          "backgroundColor": "var(--colors-gray\\\\.900)",
        },
        "(backgroundColor = green.50)" => {
          "backgroundColor": "var(--colors-green\\\\.50)",
        },
        "(backgroundColor = green.100)" => {
          "backgroundColor": "var(--colors-green\\\\.100)",
        },
        "(backgroundColor = green.200)" => {
          "backgroundColor": "var(--colors-green\\\\.200)",
        },
        "(backgroundColor = green.300)" => {
          "backgroundColor": "var(--colors-green\\\\.300)",
        },
        "(backgroundColor = green.400)" => {
          "backgroundColor": "var(--colors-green\\\\.400)",
        },
        "(backgroundColor = green.500)" => {
          "backgroundColor": "var(--colors-green\\\\.500)",
        },
        "(backgroundColor = green.600)" => {
          "backgroundColor": "var(--colors-green\\\\.600)",
        },
        "(backgroundColor = green.700)" => {
          "backgroundColor": "var(--colors-green\\\\.700)",
        },
        "(backgroundColor = green.800)" => {
          "backgroundColor": "var(--colors-green\\\\.800)",
        },
        "(backgroundColor = green.900)" => {
          "backgroundColor": "var(--colors-green\\\\.900)",
        },
        "(backgroundColor = red.50)" => {
          "backgroundColor": "var(--colors-red\\\\.50)",
        },
        "(backgroundColor = red.100)" => {
          "backgroundColor": "var(--colors-red\\\\.100)",
        },
        "(backgroundColor = red.200)" => {
          "backgroundColor": "var(--colors-red\\\\.200)",
        },
        "(backgroundColor = red.300)" => {
          "backgroundColor": "var(--colors-red\\\\.300)",
        },
        "(backgroundColor = red.400)" => {
          "backgroundColor": "var(--colors-red\\\\.400)",
        },
        "(backgroundColor = red.500)" => {
          "backgroundColor": "var(--colors-red\\\\.500)",
        },
        "(backgroundColor = red.600)" => {
          "backgroundColor": "var(--colors-red\\\\.600)",
        },
        "(backgroundColor = red.700)" => {
          "backgroundColor": "var(--colors-red\\\\.700)",
        },
        "(backgroundColor = red.800)" => {
          "backgroundColor": "var(--colors-red\\\\.800)",
        },
        "(backgroundColor = red.900)" => {
          "backgroundColor": "var(--colors-red\\\\.900)",
        },
        "(backgroundColor = primary)" => {
          "backgroundColor": "var(--colors-primary)",
        },
        "(backgroundColor = secondary)" => {
          "backgroundColor": "var(--colors-secondary)",
        },
        "(display = flex)" => {
          "display": "flex",
        },
        "(display = inline-flex)" => {
          "display": "inline-flex",
        },
        "(margin = 1)" => {
          "margin": "var(--spacing-1)",
        },
        "(margin = 2)" => {
          "margin": "var(--spacing-2)",
        },
        "(margin = 3)" => {
          "margin": "var(--spacing-3)",
        },
        "(margin = 4)" => {
          "margin": "var(--spacing-4)",
        },
        "(margin = 5)" => {
          "margin": "var(--spacing-5)",
        },
        "(margin = 6)" => {
          "margin": "var(--spacing-6)",
        },
        "(margin = -1)" => {
          "margin": "calc(var(--spacing-1) * -1)",
        },
        "(margin = -2)" => {
          "margin": "calc(var(--spacing-2) * -1)",
        },
        "(margin = -3)" => {
          "margin": "calc(var(--spacing-3) * -1)",
        },
        "(margin = -4)" => {
          "margin": "calc(var(--spacing-4) * -1)",
        },
        "(margin = -5)" => {
          "margin": "calc(var(--spacing-5) * -1)",
        },
        "(margin = -6)" => {
          "margin": "calc(var(--spacing-6) * -1)",
        },
        "(margin = 0.5)" => {
          "margin": "var(--spacing-0\\\\.5)",
        },
        "(margin = -0.5)" => {
          "margin": "calc(var(--spacing-0\\\\.5) * -1)",
        },
        "(margin = 1.5)" => {
          "margin": "var(--spacing-1\\\\.5)",
        },
        "(margin = -1.5)" => {
          "margin": "calc(var(--spacing-1\\\\.5) * -1)",
        },
        "(margin = 2.5)" => {
          "margin": "var(--spacing-2\\\\.5)",
        },
        "(margin = -2.5)" => {
          "margin": "calc(var(--spacing-2\\\\.5) * -1)",
        },
        "(margin = 3.5)" => {
          "margin": "var(--spacing-3\\\\.5)",
        },
        "(margin = -3.5)" => {
          "margin": "calc(var(--spacing-3\\\\.5) * -1)",
        },
        "(margin = gutter)" => {
          "margin": "var(--spacing-gutter)",
        },
        "(margin = -gutter)" => {
          "margin": "calc(var(--spacing-gutter) * -1)",
        },
        "(marginX = sm)" => {
          "marginBottom": "20px",
          "marginTop": "20px",
        },
        "(marginX = md)" => {
          "marginBottom": "40px",
          "marginTop": "40px",
        },
      }
    `)
  })

  test('should resolve arbitrary property', () => {
    const values = { auto: 'auto', sm: '20px', md: '40px' }
    const css = new CSSUtility({
      tokens: new Dictionary({ tokens, semanticTokens }),
      config: {
        properties: {
          marginLeft: {
            className: 'ml',
            values,
            transform(value) {
              return { marginLeft: value }
            },
          },
          marginRight: {
            className: 'mr',
            values,
            transform(value) {
              return { marginRight: value }
            },
          },
        },
        shorthands: {
          ml: 'marginLeft',
        },
      },
    })

    expect(css.stylesMap).toMatchInlineSnapshot(`
      Map {
        "(marginLeft = auto)" => {
          "marginLeft": "auto",
        },
        "(marginLeft = sm)" => {
          "marginLeft": "20px",
        },
        "(marginLeft = md)" => {
          "marginLeft": "40px",
        },
        "(marginRight = auto)" => {
          "marginRight": "auto",
        },
        "(marginRight = sm)" => {
          "marginRight": "20px",
        },
        "(marginRight = md)" => {
          "marginRight": "40px",
        },
      }
    `)

    expect(css.classNameMap).toMatchInlineSnapshot(`
      Map {
        "(marginLeft = auto)" => "ml_auto",
        "(marginLeft = sm)" => "ml_sm",
        "(marginLeft = md)" => "ml_md",
        "(marginRight = auto)" => "mr_auto",
        "(marginRight = sm)" => "mr_sm",
        "(marginRight = md)" => "mr_md",
      }
    `)

    expect(css.resolve('ml', 'sm')).toMatchInlineSnapshot(`
      {
        "className": "ml_sm",
        "styles": {
          "marginLeft": "20px",
        },
      }
    `)

    expect(css.resolve('ml', '40px')).toMatchInlineSnapshot(`
      {
        "className": "ml_40px",
        "styles": {
          "marginLeft": "40px",
        },
      }
    `)

    expect(css.report).toMatchInlineSnapshot(`
      Map {
        "marginLeft" => "40px",
      }
    `)
  })
})
