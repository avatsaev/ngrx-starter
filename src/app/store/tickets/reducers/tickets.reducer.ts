import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Ticket} from '../../../models/ticket';
import {createReducer, on} from '@ngrx/store';
import {loadAll, loadAllError, loadAllSuccess, setFilter} from '../actions/tciekts.actions';
import {escapeRegExp} from '../../../helpers';

export const adapter = createEntityAdapter<Ticket>({
  selectId: (ticket: Ticket) => ticket.id
});

export interface State extends EntityState<Ticket> {
  filter?: string;
  isLoading: boolean;
}

export const INIT_STATE: State = adapter.getInitialState({
  filter: undefined,
  isLoading: false
});


export const reducer = createReducer(INIT_STATE,
  on(loadAll, state => ({...state, isLoading: true})),
  on(loadAllSuccess, (state, {tickets}) => adapter.addAll(tickets, {...state, isLoading: false}) ),
  on(loadAllError, state => ({...state, isLoading: false})),
  on(setFilter, (state, {q}) => ({...state, filter: q}))
);

export const selectIsLoading = (state: State) => state.isLoading;
export const selectFilter = (state: State) => state.filter;


export const byName =
  (name: string) =>
    (ticket: Ticket) =>
      ticket.name.toLowerCase().match(`${escapeRegExp(name).toLowerCase()}.*`);

export const selectAllOrFilteredTickets = (tickets: Ticket[], q: string) =>
  q && q.length > 0 ? tickets.filter(byName(q)) : tickets;

