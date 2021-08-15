import DemoButton from './demo-button';
import DemoButton2 from './demo-button2';
var version = '1.0.0';

function install(app) {
  var components = [DemoButton, DemoButton2];
  components.forEach(item => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}

export { install, version, DemoButton, DemoButton2 };
export default {
  install,
  version
};