import * as fromTickets from './tickets.reducer';
import {Action, createFeatureSelector, createSelector} from '@ngrx/store';


export function reducers(state: fromTickets.State | undefined, action: Action) {
  return fromTickets.reducer(state, action);
}

export const ticketsFeatureSelector = createFeatureSelector<fromTickets.State>('tickets');

export const {
  selectAll: selectAllTickets,
  selectTotal: selectTotalTickets
} = fromTickets.adapter.getSelectors(ticketsFeatureSelector);

export const selectIsLoading = createSelector(ticketsFeatureSelector, fromTickets.selectIsLoading);
export const selectFilter = createSelector(ticketsFeatureSelector, fromTickets.selectFilter);

export const selectAllOrFilteredTickets = createSelector(
  selectAllTickets,
  selectFilter,
  fromTickets.selectAllOrFilteredTickets
);

