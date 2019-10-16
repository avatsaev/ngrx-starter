import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {State, selectFlash, selectPageTitle} from '.';
import {setFlash, setPageTitle} from './ui.actions';
import {FlashMessage} from './ui.reducer';

@Injectable({
  providedIn: 'root'
})
export class UiFacade {
  pageTitle$ = this.store.pipe(
    select(selectPageTitle)
  );

  flash$ = this.store.pipe(
    select(selectFlash)
  );

  constructor(private store: Store<State>) { }

  setPageTitle(pageTitle: string) {
    this.store.dispatch(setPageTitle({pageTitle}));
  }

  setFlash(flash: FlashMessage) {
    this.store.dispatch(setFlash({flash}));
  }
}
