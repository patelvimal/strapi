import { chain, noop, Rule,Tree } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { addDepsToPackageJson, addPackageWithInit } from '@nrwl/workspace';

export default function (schema: Schema): Rule {
  return chain([
    schema.unitTestRunner === 'jest'
      ? addPackageWithInit('@nrwl/jest')
      : noop(),
    addDepsToPackageJson(
      {
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
      },{}
    ),
  ]);
}
