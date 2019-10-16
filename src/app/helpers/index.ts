import {Ticket} from '../models/ticket';

export const escapeRegExp = (val: string) =>
  val.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

