import { ValueObject } from '../value'
import { HistoryEventsList } from './history-events-list'

export type History<Summary extends ValueObject, Fragment extends Partial<Summary> = Partial<Summary>> = {
  readonly summary: Summary
  readonly events: HistoryEventsList<Summary, Fragment>
}
