import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SandboxComponent } from "./components/sandbox/sandbox.component";
import { ModelTestComponent } from "./components/modeltest/modeltest.component";
import { UserService } from "./services/user.service";
import { PostService } from "./services/post.service";
import { CryptocoinService } from "./services/cryptocoin.service";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TestCompComponent } from "./test-comp/test-comp.component";
import { ComponentsComponent } from "./components/components.component";
import { AppRoutingModule } from ".//app-routing.module";
import { UsersComponent } from "./components/users/users.component";
import { PostsComponent } from "./components/posts/posts.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { PostFormComponent } from "./components/post-form/post-form.component";
import { CryptocoinsComponent } from "./components/cryptocoins/cryptocoins.component";

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    ModelTestComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    TestCompComponent,
    ComponentsComponent,
    UsersComponent,
    PostsComponent,
    SkillsComponent,
    PostFormComponent,
    CryptocoinsComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [UserService, PostService, CryptocoinService],
  bootstrap: [AppComponent]
})
export class AppModule {}
