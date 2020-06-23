import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {AuthService} from "./auth.service";
import {map} from "rxjs/operators";

@Injectable()
export class AdminAuthGuard {

  constructor(private auth: AuthService) {
  }

  // canActivate() {
  //   this.auth.user$.pipe(
  //     map(user => {
  //       user.isAdmin
  //     })
  //   )
  // }
}
