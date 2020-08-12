import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsComponent } from './albums/albums.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlbumCardComponent } from './albums/album-card/album-card.component';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { RockstarCardComponent } from './home/rockstar-card/rockstar-card.component';


const appRoutes: Routes = [
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:rockstar', component: AlbumsComponent },
  { path: '', component: HomeComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    HeaderComponent,
    AlbumCardComponent,
    ModalComponent,
    HomeComponent,
    RockstarCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
