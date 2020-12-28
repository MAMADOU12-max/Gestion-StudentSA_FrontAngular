import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ListUsersComponent} from "./User/list-users/list-users.component";
import {AddUsersComponent} from "./User/add-users/add-users.component";
import {EditUserComponent} from "./User/edit-user/edit-user.component";
import {DetailUserComponent} from "./User/detail-user/detail-user.component";
import {ListProfilsComponent} from "./Profil/list-profils/list-profils.component";
import {AddProfilComponent} from "./Profil/add-profil/add-profil.component";
import {ListProfilDeSortieComponent} from "./Profil_de_sortie/list-profil-de-sortie/list-profil-de-sortie.component";
import {AddProfilDeSortieComponent} from "./Profil_de_sortie/add-profil-de-sortie/add-profil-de-sortie.component";
import {ListGrpeCompetenceComponent} from "./Groupe_de_Competence/list-grpe-competence/list-grpe-competence.component";
import {AddGrpeCompetenceComponent} from "./Groupe_de_Competence/add-grpe-competence/add-grpe-competence.component";
import {EditGrpeCompetenceComponent} from "./Groupe_de_Competence/edit-grpe-competence/edit-grpe-competence.component";
import {AddCompetenceComponent} from "./Competence/add-competence/add-competence.component";
import {ListCompetenceComponent} from "./Competence/list-competence/list-competence.component";
import {ListReferentielComponent} from "./Referentiel/list-referentiel/list-referentiel.component";
import {AddReferentielComponent} from "./Referentiel/add-referentiel/add-referentiel.component";
import {EditReferentielComponent} from "./Referentiel/edit-referentiel/edit-referentiel.component";
import {ListPromotionComponent} from "./Promotion/list-promotion/list-promotion.component";
import {AddPromotionComponent} from "./Promotion/add-promotion/add-promotion.component";
import {EditPromotionComponent} from "./Promotion/edit-promotion/edit-promotion.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin/listUsers', component: ListUsersComponent},
  {path: 'addUser', component: AddUsersComponent},
  {path: 'admin/editUser', component: EditUserComponent},
  {path: 'admin/detailUser', component: DetailUserComponent},
  {path: 'listProfil', component: ListProfilsComponent},
  {path: 'addProfil', component: AddProfilComponent},
  {path: 'listprofildeSortie', component: ListProfilDeSortieComponent},
  {path: 'addprofildeSortie', component: AddProfilDeSortieComponent},
  {path: 'listGrpeCompetence', component: ListGrpeCompetenceComponent},
  {path: 'addGrpeCompetence', component: AddGrpeCompetenceComponent},
  {path: 'editGrpeCompetence', component: EditGrpeCompetenceComponent},
  {path: 'listCompetence', component: ListCompetenceComponent},
  {path: 'addCompetence', component: AddCompetenceComponent},
  {path: 'listReferentiel', component: ListReferentielComponent},
  {path: 'addReferentiel', component: AddReferentielComponent},
  {path: 'editReferentiel', component: EditReferentielComponent},
  {path: 'listPromotion', component: ListPromotionComponent},
  {path: 'addPromotion', component: AddPromotionComponent},
  {path: 'editPromotion', component: EditPromotionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
