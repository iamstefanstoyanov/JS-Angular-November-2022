import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Observable, map } from 'rxjs';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
//function interval(internalValue: number = 0) {
  //return new Observable<number>((observer) => {
  //  let counter = 0;
  //  setInterval(() => {
   //   observer.next(counter++);
//}, internalValue);
  //});
//}

//interval(2000).pipe(
 // map(x => x + 2),
 // map(x => x + 2),
  // ).subscribe(console.log);
//