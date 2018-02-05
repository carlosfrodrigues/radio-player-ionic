export class RadioPlayer {
  url:string;
  stream:any;
  promise:any;

 constructor() {
   this.stream = new Audio();
   this.stream.src = "http://streaming21.hstbr.net:8268/live";

 };

 play() {

   this.stream.play();
   this.promise = new Promise((resolve,reject) => {
     this.stream.addEventListener('playing', () => {
       resolve(true);
     });

     this.stream.addEventListener('error', () => {
       reject(false);
     });
   });

  return this.promise;
};

pause() {
  this.stream.pause();
};

stop(){
  this.stream.pause();
  this.stream.src = '';
  this.stream.load();
  this.stream = null;
  this.stream = new Audio();
  this.stream.src = "http://streaming21.hstbr.net:8268/live";
  this.stream.preload = 'none';
};
}
