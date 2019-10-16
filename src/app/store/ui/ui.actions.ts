import {createAction, props} from '@ngrx/store';
import {FlashMessage} from './ui.reducer';


export const setPageTitle = createAction(
  '[UI] SetPageTitle',
  props<{pageTitle: string}>()
);

export const setFlash = createAction(
  '[UI] SetFlash',
  props<{flash: FlashMessage}>()
);

