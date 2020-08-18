import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { RockstarDetailsComponent } from './home/rockstar-details/rockstar-details.component';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './modal/track/track.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:rockstar', component: RockstarDetailsComponent },
  { path: '', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    HeaderComponent,
    AlbumCardComponent,
    ModalComponent,
    HomeComponent,
    RockstarCardComponent,
    RockstarDetailsComponent,
    SearchComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
