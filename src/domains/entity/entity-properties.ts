import { Entity } from './entity';

export type EntityProperties<E extends Entity<any>> = Omit<E,  keyof Entity>