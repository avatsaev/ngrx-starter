import {createReducer, on} from '@ngrx/store';
import {setFlash, setPageTitle} from './ui.actions';

export interface FlashMessage {
  type: 'error' | 'info' | 'success';
  message: string;
  link?: string;
}
export interface State {
  pageTitle: string;
  flash: FlashMessage;
}

export const INIT_STATE: State =  {
  flash: undefined,
  pageTitle: undefined
};


export const reducer = createReducer(INIT_STATE,
  on(setPageTitle, (state, {pageTitle}) => ({...state, pageTitle})),
  on(setFlash, (state, {flash}) => ({...state, flash})),
);

export const selectPageTitle = (state: State) => state.pageTitle;
export const selectFlash = (state: State) => state.flash;



