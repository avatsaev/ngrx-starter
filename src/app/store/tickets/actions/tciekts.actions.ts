import {createAction, props} from '@ngrx/store';
import {Ticket} from '../../../models/ticket';


export const loadAll = createAction(
  '[Tickets] Load all'
);

export const loadAllSuccess = createAction(
  '[Tickets] Load all success',
  props<{tickets: Ticket[]}>()
);


export const loadAllError = createAction(
  '[Tickets] Load all Error',
  props<{error: any}>()
);

export const setFilter = createAction(
  '[Tickets] Set filter',
  props<{q: string}>()
);
