import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadAll, loadAllSuccess} from '../actions/tciekts.actions';
import {delay, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class TicketsEffects {

  loadAll$ = createEffect(() => this.actions$.pipe(
    ofType(loadAll),
    delay(1000),
    switchMap( () => of(
      loadAllSuccess({tickets: [{id: 'a', name: 'Ticket A'}, {id: 'b', name: 'Ticket B'}]})
    ))
  ));

  constructor(private actions$: Actions) {}
}
