import {CanActivateFn, Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";
import {inject} from "@angular/core";
import {catchError, map, of, tap} from "rxjs";

export const loginGuard: CanActivateFn = (route, state) => {
  const authService : AuthentificationService = inject(AuthentificationService)
  const router : Router = inject(Router);

  return authService.user$.pipe(
    tap(user => {
      if (user) {
        router.navigate(['cv']);
      }
    }),
    map(user => !user),
    catchError((error) => {
      console.error('Error in loginGuard', error);
      return of(false);
    })
  )
};
