type RepoIdT = string;
type KeywordT = string;
type KeywordAliasT = string; // To display on the chart. If not provided, then RepoName is used

const gtrendsDefs: [RepoIdT, KeywordT, KeywordAliasT?][] = [
  ['vuejs/vue', '/g/11c0vmgx5d', 'Vue.js'], // Vue.js; type: Topic
  ['facebook/react', '/m/012l1vxv'], // Vue.js; type: Topic
  ['angular/angular', '/g/11c6w0ddw9'], // Angular; type: Web framework
  ['reduxjs/redux', '/g/11dxf0gf92'], // Redux; type: JavaScript library
  ['vuetifyjs/vuetify', 'vuetify'],
  ['twbs/bootstrap', '/m/0j671ln'],
  ['moment/moment', 'moment js', 'Moment js'],
  ['lodash/lodash', 'lodash'],
  ['jashkenas/underscore', '/m/0ndwxg_', 'Underscore.js'],
  ['chartjs/chart.js', '/g/11fqctpc5j'],
  ['d3/d3', '/m/0k2kwt4', 'D3.js'],
  ['highcharts/highcharts', '/g/11bv3xdz92'],
  ['puppeteer/puppeteer', 'puppeteer'],
  ['cypress-io/cypress', 'cypress'],
  ['nestjs/nest', 'nestjs', 'nestjs'],
  ['expressjs/express', '/m/0_v2szx', 'Express.js'],
  ['mde/ejs', 'ejs'],
  ['seleniumhq/selenium', '/m/0c828v', 'Selenium'],
  ['webpack/webpack', '/g/11clg_kyfc', 'Webpack'],
  ['eslint/eslint', '/g/11fm79ww5w', 'ESLint'],
  ['microsoft/typescript', '/m/0n50hxv', 'TypeScript'],
  ['facebook/jest', '/g/11h03gh9zq', 'Jest'],
  ['vercel/next.js', 'next js', 'next js'],
  ['flutter/flutter', '/g/11f03_rzbg', 'Flutter'],
  ['facebook/react-native', '/g/11h03gfxy9', 'React Native'],
  ['ionic-team/ionic-framework', '/g/1q6l_n0n0', 'Ionic'],
  ['mui-org/material-ui', 'material ui', 'material ui'],
  ['websockets/ws', 'ws'],
  ['reactivex/rxjs', 'rxjs'],
  ['vuejs/vuex', 'vuex'],
  ['mobxjs/mobx', 'mobx'],
  ['cucumber/cucumber-js', '/m/0c4z18h'],
  ['mochajs/mocha', 'Mocha'],
  ['jasmine/jasmine', 'jasmine'],
  ['sinonjs/sinon', 'sinon'],
  ['gatsbyjs/gatsby', 'gatsby'],
  ['nuxt/nuxt.js', '/g/11g0wgnhgc', 'Nuxt.js'],
  ['laravel/laravel', '/m/0jwy148', 'Laravel'],
  ['django/django', '/m/06y_qx', 'Django'],
  ['axios/axios', 'axios', 'axios'],
];

export interface GTrendDefT {
  repoId: string;
  keyword: string;
  alias: string;
}

export const repoToGTrendDefMap = gtrendsDefs.reduce(
  (accum, [repoId, keyword, keywordAlias]) => {
    accum[repoId.toLowerCase()] = {
      repoId,
      keyword,
      alias: capitalise(keywordAlias || repoId.slice(repoId.indexOf('/') + 1)),
    };
    return accum;
  },
  {} as Record<string, GTrendDefT>
);

function capitalise(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

export const LIBS_LIMIT = 5;
