import { Identifier } from 'domains/identifiable'
import { ValueObject } from 'domains/value'

// TODO: Elements inside the data object should actually be stored in dot notation to allow keeping history of nested objects and arrays
export type HistoryEvent<V extends Partial<ValueObject>> = {
  readonly id: Identifier
  readonly data: V
  readonly agent: Identifier
  readonly index: number
  readonly moment: Date
}
