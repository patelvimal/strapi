import { chain, noop, Rule } from '@angular-devkit/schematics';
import { addDependenciesToPackageJson, Tree } from '@nrwl/devkit';
import { addPackageWithInit } from '@nrwl/workspace';
import { Schema } from './schema';

export default function (host: Tree, schema: Schema): Rule {
  return chain([
    schema.unitTestRunner === 'jest'
      ? addPackageWithInit('@nrwl/jest')
      : noop(),
    addDependenciesToPackageJson(host, {
      "strapi": "3.4.6",
      "strapi-admin": "3.4.6",
      "strapi-utils": "3.4.6",
      "strapi-plugin-content-type-builder": "3.4.6",
      "strapi-plugin-content-manager": "3.4.6",
      "strapi-plugin-users-permissions": "3.4.6",
      "strapi-plugin-email": "3.4.6",
      "strapi-plugin-upload": "3.4.6",
      "strapi-connector-bookshelf": "3.4.6",
      "knex": "<0.20.0",
      "sqlite3": "5.0.0"
    }, {}
    ),
  ]);
}
