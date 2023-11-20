import {RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./cvTech/cv/cv.component";
import {ColorComponent} from "./color/color.component";
import {DetailPersonneComponent} from "./cvTech/detail-personne/detail-personne.component";
import {DeleteCvComponent} from "./cvTech/delete-cv/delete-cv.component";
import {AddCvComponent} from "./cvTech/add-cv/add-cv.component";
import {LoginComponent} from "./login/login.component";
import {loginGuard} from "./login/login.guard";


const APP_ROUTING :Routes = [
  {path: 'cv', children: [
      {path: '',component: CvComponent},
      {path: 'delete/:id', component: DeleteCvComponent},
      {path: 'add', component: AddCvComponent},
      {path: ':id', component: DetailPersonneComponent},
    ] },
  {path: 'color/:default', component: ColorComponent},
  {path: 'login', component: LoginComponent, canActivate : [loginGuard]},
  {path: '', component: CvComponent},
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
