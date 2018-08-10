import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button/button.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ButtonComponent,AppComponent],
  imports: [BrowserModule],
  entryComponents: [ButtonComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(
    	ButtonComponent, { injector });
    customElements.define('custom-button', customButton);

    const customButton1 = createCustomElement(
    	ButtonComponent, { injector });
    customElements.define('custom-button2', customButton1);

  }

  ngDoBootstrap() {}
}
