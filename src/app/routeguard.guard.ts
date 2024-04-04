import { CanActivateFn } from '@angular/router';

export const routeguardGuard: CanActivateFn = (route, state) => {
  // token = localStorage.getItem('token');

  if (localStorage.getItem('token')) {
    return true;
  }
  return false;
};
