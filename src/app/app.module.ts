import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './components/layouts/header1/header1.component';
import { Header2Component } from './components/layouts/header2/header2.component';
import { Header3Component } from './components/layouts/header3/header3.component';
import { Header4Component } from './components/layouts/header4/header4.component';
import { Footer1Component } from './components/layouts/footer1/footer1.component';
import { Footer2Component } from './components/layouts/footer2/footer2.component';
import { Footer3Component } from './components/layouts/footer3/footer3.component';
import { Footer4Component } from './components/layouts/footer4/footer4.component';
import { BlogSidebarComponent } from './components/layouts/blog-sidebar/blog-sidebar.component';
import { RecipeSidebarComponent } from './components/layouts/recipe-sidebar/recipe-sidebar.component';
import { ShopSidebarComponent } from './components/layouts/shop-sidebar/shop-sidebar.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { Homepage1Component } from './components/pages/homepage1/homepage1.component';
import { Homepage2Component } from './components/pages/homepage2/homepage2.component';
import { Homepage3Component } from './components/pages/homepage3/homepage3.component';
import { Homepage4Component } from './components/pages/homepage4/homepage4.component';
import { Homepage5Component } from './components/pages/homepage5/homepage5.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogListComponent } from './components/pages/blog-list/blog-list.component';
import { BlogMasonryComponent } from './components/pages/blog-masonry/blog-masonry.component';
import { BlogSingleV1Component } from './components/pages/blog-single-v1/blog-single-v1.component';
import { BlogSingleV2Component } from './components/pages/blog-single-v2/blog-single-v2.component';
import { BlogSingleV3Component } from './components/pages/blog-single-v3/blog-single-v3.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { RecipeArchiveComponent } from './components/pages/recipe-archive/recipe-archive.component';
import { RecipeDetailComponent } from './components/pages/recipe-detail/recipe-detail.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';
import { Header5Component } from './components/layouts/header5/header5.component';
import { RecommendationsComponent } from './components/pages/recommnedations/recommendations.component';
import { ProdRecComponent } from './components/layouts/prod-rec/prod-rec.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    Header2Component,
    Header3Component,
    Header4Component,
    Footer1Component,
    Footer2Component,
    Footer3Component,
    Footer4Component,
    BlogSidebarComponent,
    RecipeSidebarComponent,
    ShopSidebarComponent,
    PreloaderComponent,
    Homepage1Component,
    Homepage2Component,
    Homepage3Component,
    Homepage4Component,
    Homepage5Component,
    BlogGridComponent,
    BlogListComponent,
    BlogMasonryComponent,
    BlogSingleV1Component,
    BlogSingleV2Component,
    BlogSingleV3Component,
    AboutusComponent,
    LoginComponent,
    SignupComponent,
    CheckoutComponent,
    CartComponent,
    ProductDetailComponent,
    RecipeArchiveComponent,
    RecipeDetailComponent,
    ShopComponent,
    ContactusComponent,
    Header5Component,
    RecommendationsComponent,
    ProdRecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
