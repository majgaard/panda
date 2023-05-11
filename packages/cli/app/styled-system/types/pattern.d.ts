import type { CssProperty, SystemStyleObject } from './system-types'
import type { TokenCategory } from '../tokens'

type Primitive = string | number | boolean | null | undefined
type LiteralUnion<T, K extends Primitive = string> = T | (K & Record<never, never>)

export type PatternProperty =
  | { type: 'property'; value: CssProperty }
  | { type: 'enum'; value: string[] }
  | { type: 'token'; value: TokenCategory; property?: CssProperty }
  | { type: 'string' | 'boolean' | 'number' }

export type PatternHelpers = {
  map: (value: any, fn: (value: string) => string | undefined) => any
}

export type PatternConfig<T> = {
  /**
   * The description of the pattern. This will be used in the JSDoc comment.
   */
  description?: string
  /**
   * The JSX element rendered by the pattern
   * @default 'div'
   */
  jsxElement?: string
  /**
   * The properties of the pattern.
   */
  properties: T extends Record<string, PatternProperty> ? T : Record<string, PatternProperty>
  /**
   * The css object this pattern will generate.
   */
  transform?: (
    props: T extends Record<infer Keys, PatternProperty> ? Record<Keys, any> : Record<string, PatternProperty>,
    helpers: PatternHelpers,
  ) => SystemStyleObject
  /**
   * The jsx element name this pattern will generate.
   */
  jsx?: string
  /**
   * Whether to only generate types for the specified properties.
   * This will disallow css properties
   */
  strict?: boolean
  /**
   * @experimental
   * Disallow certain css properties for this pattern
   */
  blocklist?: LiteralUnion<CssProperty>[]
}

export type AnyPatternConfig = PatternConfig<PatternProperty>