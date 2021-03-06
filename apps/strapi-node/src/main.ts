import strapi from 'strapi';
import build from './node_modules/strapi/lib/commands/build';
import develop from './node_modules/strapi/lib/commands/develop';

const startupType = process.argv[2];

(async function() {
  switch (startupType) {
    case 'build': build({ optimization: true, clean: false }); break;
    case 'develop': develop({ build: true }); break;
    case 'start': (strapi as any)().start(); break;
    default: throw new Error('Strapi command not specified');
  }
})();
