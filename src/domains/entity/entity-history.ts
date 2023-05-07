import { History } from "../history";
import { Entity } from "./entity";
import { EntityProperties } from "./entity-properties";
import { EntityPropertiesPartial } from "./entity-properties-partial";

export type EntityHistory<E extends Entity> = History<EntityProperties<E>, EntityPropertiesPartial<E>> & {
  readonly entityId: E['id'],
}
