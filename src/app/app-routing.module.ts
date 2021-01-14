import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { RecommendationsComponent } from './components/pages/recommnedations/recommendations.component';

const routes: Routes = [

{path: '', component: Homepage3Component},
{path: 'homepage2', component: Homepage2Component},
{path: 'homepage3', component: Homepage3Component},
{path: 'homepage4', component: Homepage4Component},
{path: 'homepage5', component: Homepage5Component},
{path: 'blog-grid', component: BlogGridComponent},
{path: 'blog-list', component: BlogListComponent},
{path: 'blog-masonry', component: BlogMasonryComponent},
{path: 'blog-single-v1', component: BlogSingleV1Component},
{path: 'blog-single-v2', component: BlogSingleV2Component},
{path: 'blog-single-v3', component: BlogSingleV3Component},
{path: 'aboutus', component: AboutusComponent},
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'checkout', component: CheckoutComponent},
{path: 'cart', component: CartComponent},
{path: 'product-detail', component: ProductDetailComponent},
{path: 'recipe-archive', component: RecipeArchiveComponent},
{path: 'recipe-detail', component: RecipeDetailComponent},
{path: 'shop', component: ShopComponent},
{path: 'contactus', component: ContactusComponent},
{path: 'recommendations', component: RecommendationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
