import { ValueObject } from '../value'
import { HistoryEvent } from './history-event'

// TODO: This could be moved to a directory/file destinated to utility types
type RequireOne<T extends Partial<ValueObject>>  = T & { [P in keyof T]: Required<Pick<T, P>> }[keyof T]

export type HistoryEventsList<Summary extends ValueObject, Fragment extends Partial<Summary> = Partial<Summary>> = readonly [
  HistoryEvent<Summary>, ...HistoryEvent<RequireOne<Fragment>>[]
]
