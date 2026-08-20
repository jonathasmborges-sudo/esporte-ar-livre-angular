import { Routes } from '@angular/router';
import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta-component/atleta-component';
import { CorridaComponent } from './component/corrida-component/corrida-component';
import { AtletaListaComponent } from './component/atleta/atleta-lista-component/atleta-lista-component';
import { CorridaListaComponent } from './corrida/corrida-lista-component/corrida-lista-component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: "cadastroAtleta",
        component: AtletaComponent,
    },
    {
        path: 'cadastroCorrida',
        component: CorridaComponent,
    },
    {
        path: "listaAtleta",
        component: AtletaListaComponent,
    },
    {
        path: "corridas",
        component: CorridaListaComponent,
    },
    {
        path: "cadastroCorrida/:id",
        component: CorridaComponent
    },
    {
        path: "cadastroAtleta/:id",
        component: AtletaComponent
    }
];
