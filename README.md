To use this locally, follow the steps below:-

1. Build the nx plugin using command :- nx build strapi
2. Goto dist folder and do npm link:- cd dist && npm link
3. Go into target application (empty nx workspace) and run below commands:-
4. npm link @ngx-builders/strapi
3. nx g @ngx-builders/strapi:strapi sample
