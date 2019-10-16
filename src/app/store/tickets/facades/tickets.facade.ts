import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {loadAll, setFilter} from '../actions/tciekts.actions';
import {Observable} from 'rxjs';
import {Ticket} from '../../../models/ticket';
import * as fromTickets from '../reducers';
import {State} from '../reducers/tickets.reducer';

@Injectable()
export class TicketsFacade {

  allTickets$: Observable<Ticket[]> = this.store.pipe(
    select(fromTickets.selectAllTickets)
  );

  allOrFilteredTickets$ = this.store.pipe(
    select(fromTickets.selectAllOrFilteredTickets)
  );

  isLoading$ = this.store.pipe(
    select(fromTickets.selectIsLoading)
  );

  filter$ = this.store.pipe(
    select(fromTickets.selectFilter)
  );

  totalTickets$: Observable<number> = this.store.pipe(
    select(fromTickets.selectTotalTickets)
  );

  constructor(private store: Store<State>) {}

  loadAll() {
    this.store.dispatch(loadAll());
  }

  setFilter(q: string) {
    this.store.dispatch(setFilter({q}));
  }
}
