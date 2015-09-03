import Dropzone from 'dropzone';

export class App {
  attached() {
    var zone = new Dropzone(this.targetElement, { url: "/file/post"});
  }
}
