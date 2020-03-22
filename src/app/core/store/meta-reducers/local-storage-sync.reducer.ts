import { Action, ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer<T, V extends Action = Action>(reducer: ActionReducer<any>): ActionReducer<T, V> {
  const storageKeySerializer = (key: string) => {
    return 'app_' + key;
  };

  return localStorageSync({
    rehydrate: true,
    removeOnUndefined: true,
    storageKeySerializer,
    keys: [
      { auth: ['status'] },
      'appSettings'
    ]
  })(reducer);
}
