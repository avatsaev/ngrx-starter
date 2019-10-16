import * as fromUI from './ui.reducer';
import {InjectionToken} from '@angular/core';
import {Action, ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface State {
  ui: fromUI.State;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('RootReducersToken', {
  factory: () => ({
    ui: fromUI.reducer
  })
});

export const selectUIState = createFeatureSelector<State, fromUI.State>('ui');

export const selectPageTitle = createSelector(selectUIState, fromUI.selectPageTitle);
export const selectFlash = createSelector(selectUIState, fromUI.selectFlash);
