import {Observable} from 'rxjs';
function getValue() {
  return new Promise((res) => {
    setTimeout(() => {
      res('TEST');
    }, 2000);
  });
}
Promise.resolve(1)
.then(function (value) { console.log(value);})

//const o = new Observable(observer => {
 //   let counter = 0
 //   setInterval(()=>{ 
 //       observer.next(counter++);
 //   })
    //observer.next(100)
    //observer.next(200)
    //observer.next(300)
    //observer.complete();
//})

//o.subscribe(console.log);