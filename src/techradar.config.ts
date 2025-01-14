const HOLD = 'Hold';
const ADOPT = 'Adopt';
const TRIAL = 'Trial';
const ASSESS = 'Assess';

type TRadarLevelT = typeof HOLD | typeof ADOPT | typeof TRIAL | typeof ASSESS;

export const TRADAR_LEVELS: TRadarLevelT[] = [HOLD, ASSESS, TRIAL, ADOPT];

export type DateT =
  | '2014-01'
  | '2014-07'
  | '2015-01'
  | '2015-05'
  | '2015-11'
  | '2016-04'
  | '2016-11'
  | '2017-03'
  | '2017-11'
  | '2018-05'
  | '2018-03'
  | '2018-11'
  | '2019-04'
  | '2019-11'
  | '2020-05'
  | '2020-10'
  | '2021-04';

type RepoNameT = string;
type AliasT = string;
type LinkT = string;

interface EntryT {
  month: DateT;
  level: TRadarLevelT;
}

export interface TechRadarT {
  repo: RepoNameT;
  alias: AliasT;
  link: LinkT;
  entries: EntryT[];
}

const libs: [RepoNameT, AliasT, LinkT, EntryT[]][] = [
  [
    'vuejs/vue',
    'Vue.js',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/vue-js',
    [
      { month: '2016-11', level: 'Assess' },
      { month: '2017-03', level: 'Trial' },
      { month: '2020-05', level: 'Adopt' },
    ],
  ],
  [
    'facebook/react',
    'React.js',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/react-js',
    [
      { month: '2015-01', level: 'Assess' },
      { month: '2015-05', level: 'Trial' },
      { month: '2015-11', level: 'Trial' },
      { month: '2016-04', level: 'Adopt' },
      { month: '2016-11', level: 'Adopt' },
    ],
  ],
  [
    'sveltejs/svelte',
    'Svelte',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/svelte',
    [{ month: '2020-10', level: 'Assess' }],
  ],
  [
    'angular/angular',
    'Angular',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/angular',
    [
      { month: '2017-03', level: 'Assess' },
      { month: '2017-11', level: 'Trial' },
    ],
  ],
  [
    'angular/angular.js',
    'AngularJS',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/angularjs',
    [
      { month: '2014-07', level: 'Trial' },
      { month: '2015-01', level: 'Trial' },
      { month: '2016-04', level: 'Assess' },
      { month: '2016-11', level: 'Hold' },
      { month: '2017-03', level: 'Hold' },
    ],
  ],
  [
    'emberjs/ember.js',
    'Ember.js',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/ember-js',
    [
      { month: '2015-05', level: 'Assess' },
      { month: '2015-11', level: 'Assess' },
      { month: '2016-04', level: 'Trial' },
      { month: '2016-11', level: 'Adopt' },
      { month: '2017-03', level: 'Adopt' },
    ],
  ],
  [
    'reduxjs/redux',
    'Redux',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/redux',
    [
      { month: '2016-04', level: 'Trial' },
      { month: '2016-11', level: 'Adopt' },
      { month: '2017-03', level: 'Adopt' },
      { month: '2020-10', level: 'Trial' },
    ],
  ],
  [
    'facebookexperimental/recoil',
    'Recoil',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/recoil',
    [{ month: '2020-10', level: 'Assess' }],
  ],
  [
    'davidkpiano/xstate',
    'XState',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/xstate',
    [
      { month: '2020-05', level: 'Assess' },
      { month: '2020-10', level: 'Trial' },
    ],
  ],
  [
    'testing-library/react-testing-library',
    'React Testing Library',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/react-testing-library',
    [
      { month: '2019-04', level: 'Assess' },
      { month: '2019-11', level: 'Trial' },
      { month: '2020-05', level: 'Adopt' },
    ],
  ],
  [
    'enzymejs/enzyme',
    'Enzyme',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/enzyme',
    [
      { month: '2016-11', level: 'Trial' },
      { month: '2017-03', level: 'Trial' },
      { month: '2018-05', level: 'Adopt' },
      { month: '2019-11', level: 'Hold' },
      { month: '2020-05', level: 'Hold' },
    ],
  ],
  [
    'facebook/jest',
    'Jest',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/jest',
    [{ month: '2017-11', level: 'Trial' }],
  ],
  [
    'timkindberg/jest-when',
    'jest-when',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/jest-when',
    [
      { month: '2019-11', level: 'Trial' },
      { month: '2020-10', level: 'Adopt' },
    ],
  ],
  [
    'fastify/fastify',
    'Fastify',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/fastify',
    [{ month: '2020-10', level: 'Trial' }],
  ],
  [
    'immerjs/immer',
    'Immer',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/immer',
    [
      { month: '2019-04', level: 'Assess' },
      { month: '2020-10', level: 'Trial' },
    ],
  ],
  [
    'immutable-js/immutable-js',
    'Immutable.js',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/immutable-js',
    [
      { month: '2016-04', level: 'Assess' },
      { month: '2016-11', level: 'Trial' },
    ],
  ],
  [
    'single-spa/single-spa',
    'single-spa',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/single-spa',
    [
      { month: '2017-11', level: 'Assess' },
      { month: '2020-10', level: 'Trial' },
    ],
  ],
  [
    'microsoft/typescript',
    'TypeScript',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/typescript',
    [
      { month: '2014-01', level: 'Assess' },
      { month: '2014-07', level: 'Assess' },
      { month: '2018-11', level: 'Trial' },
      { month: '2019-04', level: 'Adopt' },
    ],
  ],
  [
    'babylonjs/babylon.js',
    'Babylon.js',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/babylon-js',
    [{ month: '2020-10', level: 'Assess' }],
  ],
  [
    'facebook/hermes',
    'Hermes',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/hermes',
    [{ month: '2020-10', level: 'Assess' }],
  ],
  [
    'gcanti/io-ts',
    'io-ts',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/io-ts',
    [
      { month: '2020-10', level: 'Assess' },
      { month: '2021-04', level: 'Trial' },
    ],
  ],
  [
    'polymer/lit-element',
    'LitElement',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/litelement',
    [
      { month: '2020-10', level: 'Assess' },
      { month: '2021-04', level: 'Trial' },
    ],
  ],
  [
    'mswjs/msw',
    'Mock Service Worker',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/mock-service-worker',
    [{ month: '2020-10', level: 'Assess' }],
  ],
  [
    'vercel/swr',
    'SWR',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/swr',
    [
      { month: '2020-10', level: 'Assess' },
      { month: '2021-04', level: 'Trial' },
    ],
  ],
  [
    'yarnpkg/yarn',
    'Yarn',
    'https://www.thoughtworks.com/radar/tools/yarn',
    [
      { month: '2017-03', level: 'Assess' },
      { month: '2017-11', level: 'Assess' },
      { month: '2018-03', level: 'Trial' },
      { month: '2020-10', level: 'Trial' },
    ],
  ],
  [
    'npm/cli',
    'NPM for all the things',
    'https://www.thoughtworks.com/radar/techniques/npm-for-all-the-things',
    [
      { month: '2015-11', level: 'Trial' },
      { month: '2016-04', level: 'Trial' },
    ],
  ],
  [
    'garris/backstopjs',
    'BackstopJS',
    'https://www.thoughtworks.com/radar/tools/backstopjs',
    [{ month: '2018-05', level: 'Trial' }],
  ],
  [
    'oblador/loki',
    'Loki',
    'https://www.thoughtworks.com/radar/tools/loki',
    [{ month: '2019-11', level: 'Trial' }],
  ],
  [
    'tailwindlabs/tailwindcss',
    'Tailwind CSS',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/tailwind-css',
    [{ month: '2020-05', level: 'Assess' }],
  ],
  [
    'devexpress/testcafe',
    'TestCafe',
    'https://www.thoughtworks.com/radar/tools/testcafe',
    [
      { month: '2018-11', level: 'Assess' },
      { month: '2019-04', level: 'Trial' },
    ],
  ],
  [
    'cypress-io/cypress',
    'Cypress',
    'https://www.thoughtworks.com/radar/tools/cypress',
    [
      { month: '2017-11', level: 'Assess' },
      { month: '2018-05', level: 'Assess' },
      { month: '2018-11', level: 'Trial' },
      { month: '2019-04', level: 'Adopt' },
      { month: '2020-05', level: 'Adopt' },
    ],
  ],
  [
    'puppeteer/puppeteer',
    'Puppeteer',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/puppeteer',
    [
      { month: '2018-11', level: 'Assess' },
      { month: '2019-04', level: 'Trial' },
    ],
  ],
  [
    'getsentry/sentry',
    'Sentry',
    'https://www.thoughtworks.com/radar/tools/sentry',
    [
      { month: '2018-05', level: 'Assess' },
      { month: '2020-10', level: 'Trial' },
      { month: '2021-04', level: 'Adopt' },
    ],
  ],
  [
    'styled-components/styled-components',
    'Styled components',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/styled-components',
    [{ month: '2019-11', level: 'Trial' }],
  ],
  [
    'snowpackjs/snowpack',
    'Snowpack',
    'https://www.thoughtworks.com/radar/tools/snowpack',
    [{ month: '2020-05', level: 'Assess' }],
  ],
  [
    'styleguidist/react-styleguidist',
    'React Styleguidist',
    'https://www.thoughtworks.com/radar/tools/react-styleguidist',
    [{ month: '2019-11', level: 'Adopt' }],
  ],
  [
    'pnpm/pnpm',
    'pnpm',
    'https://www.thoughtworks.com/radar/tools/pnpm',
    [{ month: '2020-10', level: 'Assess' }],
  ],
  [
    'microsoft/playwright',
    'Playwright',
    'https://www.thoughtworks.com/radar/tools/playwright',
    [
      { month: '2020-10', level: 'Assess' },
      { month: '2021-04', level: 'Trial' },
    ],
  ],
  [
    'parcel-bundler/parcel',
    'Parcel',
    'https://www.thoughtworks.com/radar/tools/parcel',
    [{ month: '2018-05', level: 'Assess' }],
  ],
  [
    'webpack/webpack',
    'Webpack',
    'https://www.thoughtworks.com/radar/tools/webpack',
    [
      { month: '2016-04', level: 'Trial' },
      { month: '2016-11', level: 'Trial' },
    ],
  ],
  [
    'prettier/prettier',
    'Prettier',
    'https://www.thoughtworks.com/radar/tools/prettier',
    [{ month: '2018-11', level: 'Trial' }],
  ],
  [
    'netflix/pollyjs',
    'Polly.js',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/polly-js',
    [{ month: '2018-11', level: 'Assess' }],
  ],
  [
    'nestjs/nest',
    'NestJS',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/nestjs',
    [
      { month: '2019-11', level: 'Assess' },
      { month: '2020-05', level: 'Trial' },
    ],
  ],
  [
    'bbyars/mountebank',
    'Mountebank',
    'https://www.thoughtworks.com/radar/tools/mountebank',
    [
      { month: '2014-07', level: 'Assess' },
      { month: '2015-01', level: 'Assess' },
      { month: '2015-05', level: 'Adopt' },
      { month: '2015-11', level: 'Adopt' },
    ],
  ],
  [
    'uber/manifold',
    'Manifold',
    'https://www.thoughtworks.com/radar/tools/manifold',
    [{ month: '2020-05', level: 'Assess' }],
  ],
  [
    'mermaid-js/mermaid',
    'Mermaid',
    'https://www.thoughtworks.com/radar/tools/mermaid',
    [{ month: '2018-11', level: 'Trial' }],
  ],
  [
    'laconiajs/laconia',
    'Laconia',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/laconia',
    [{ month: '2019-04', level: 'Trial' }],
  ],
  [
    'facebook/jscodeshift',
    'jscodeshift',
    'https://www.thoughtworks.com/radar/tools/jscodeshift',
    [{ month: '2020-10', level: 'Trial' }],
  ],
  [
    'gatsbyjs/gatsby',
    'Gatsby.js',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/gatsby-js',
    [{ month: '2019-11', level: 'Assess' }],
  ],
  [
    'sideway/joi',
    'joi',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/joi',
    [{ month: '2019-04', level: 'Trial' }],
  ],
  [
    'jorgebucaran/hyperapp',
    'Hyperapp',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/hyperapp',
    [{ month: '2018-05', level: 'Assess' }],
  ],
  [
    'formium/formik',
    'Formik',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/formik',
    [{ month: '2019-04', level: 'Trial' }],
  ],
  [
    'flowtype/flow-bin',
    'Flow',
    'https://www.thoughtworks.com/radar/tools/flow',
    [
      { month: '2017-11', level: 'Assess' },
      { month: '2018-05', level: 'Assess' },
    ],
  ],
  [
    '11ty/eleventy',
    'Eleventy',
    'https://www.thoughtworks.com/radar/tools/eleventy',
    [{ month: '2020-10', level: 'Assess' }],
  ],
  [
    'eslint/eslint',
    'ESLint',
    'https://www.thoughtworks.com/radar/tools/eslint',
    [{ month: '2019-11', level: 'Adopt' }],
  ],
  [
    'clinicjs/node-clinic-bubbleprof-examples',
    'Clinic.js Bubbleprof',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/clinic-js-bubbleprof',
    [{ month: '2020-05', level: 'Assess' }],
  ],
  [
    'commitizen/cz-cli',
    'Commitizen',
    'https://www.thoughtworks.com/radar/tools/commitizen',
    [{ month: '2019-11', level: 'Adopt' }],
  ],
  [
    'avajs/ava',
    'AVA',
    'https://www.thoughtworks.com/radar/tools/ava',
    [{ month: '2019-04', level: 'Trial' }],
  ],
  [
    'vercel/next.js',
    'Next.js',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/next-js',
    [
      { month: '2019-04', level: 'Assess' },
      { month: '2021-04', level: 'Trial' },
    ],
  ],
  [
    'backstage/backstage',
    'Backstage',
    'https://www.thoughtworks.com/radar/platforms/backstage',
    [
      { month: '2020-10', level: 'Assess' },
      { month: '2021-04', level: 'Trial' },
    ],
  ],
  [
    'MaterializeInc/materialize',
    'Materialize',
    'https://www.thoughtworks.com/radar/platforms/materialize',
    [
      { month: '2020-10', level: 'Assess' },
      { month: '2021-04', level: 'Trial' },
    ],
  ],
  [
    'apache/incubator-pinot',
    'Apache Pinot',
    'https://www.thoughtworks.com/radar/platforms/apache-pinot',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'teambit/bit',
    'Bit.dev',
    'https://www.thoughtworks.com/radar/platforms/bit-dev',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'linkedin/datahub',
    'DataHub',
    'https://www.thoughtworks.com/radar/platforms/datahub',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'juicedata/juicefs',
    'JuiceFS',
    'https://www.thoughtworks.com/radar/platforms/juicefs',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'opstrace/opstrace',
    'Opstrace',
    'https://www.thoughtworks.com/radar/platforms/opstrace',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'pulumi/pulumi',
    'Pulumi',
    'https://www.thoughtworks.com/radar/platforms/pulumi',
    [
      { month: '2018-11', level: 'Assess' },
      { month: '2020-10', level: 'Assess' },
      { month: '2021-04', level: 'Assess' },
    ],
  ],
  [
    'vectorizedio/redpanda',
    'Redpanda',
    'https://www.thoughtworks.com/radar/platforms/redpanda',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'dequelabs/axe-core',
    'axe-core',
    'https://www.thoughtworks.com/radar/tools/axe-core',
    [{ month: '2021-04', level: 'Trial' }],
  ],
  [
    'evanw/esbuild',
    'esbuild',
    'https://www.thoughtworks.com/radar/tools/esbuild',
    [{ month: '2021-04', level: 'Trial' }],
  ],
  [
    'facebook/flipper',
    'Flipper',
    'https://www.thoughtworks.com/radar/tools/flipper',
    [{ month: '2021-04', level: 'Trial' }],
  ],
  [
    'k6io/k6',
    'k6',
    'https://www.thoughtworks.com/radar/tools/k6',
    [
      { month: '2020-10', level: 'Assess' },
      { month: '2021-04', level: 'Trial' },
    ],
  ],
  [
    'mlflow/mlflow',
    'MLflow',
    'https://www.thoughtworks.com/radar/tools/mlflow',
    [
      { month: '2020-10', level: 'Trial' },
      { month: '2021-04', level: 'Trial' },
    ],
  ],
  [
    'google/or-tools',
    'OR-Tools',
    'https://www.thoughtworks.com/radar/tools/or-tools',
    [{ month: '2021-04', level: 'Trial' }],
  ],
  [
    'toniblyx/prowler',
    'Prowler',
    'https://www.thoughtworks.com/radar/tools/prowler',
    [{ month: '2021-04', level: 'Trial' }],
  ],
  [
    'Microsoft/pyright',
    'Pyright',
    'https://www.thoughtworks.com/radar/tools/pyright',
    [{ month: '2021-04', level: 'Trial' }],
  ],
  [
    'getredash/redash',
    'Redash',
    'https://www.thoughtworks.com/radar/tools/redash',
    [{ month: '2021-04', level: 'Trial' }],
  ],
  [
    'gruntwork-io/terratest',
    'Terratest',
    'https://www.thoughtworks.com/radar/tools/terratest',
    [
      { month: '2019-11', level: 'Assess' },
      { month: '2021-04', level: 'Trial' },
    ],
  ],
  [
    'welldone-software/why-did-you-render',
    'Why Did You Render',
    'https://www.thoughtworks.com/radar/tools/why-did-you-render',
    [{ month: '2021-04', level: 'Trial' }],
  ],
  [
    'oracle/graal',
    'Graal Native Image',
    'https://www.thoughtworks.com/radar/tools/graal-native-image',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'hashicorp/boundary',
    'HashiCorp Boundary',
    'https://www.thoughtworks.com/radar/tools/hashicorp-boundary',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'imgcook/imgcook',
    'imgcook',
    'https://www.thoughtworks.com/radar/tools/imgcook',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'longhorn/longhorn',
    'Longhorn',
    'https://www.thoughtworks.com/radar/tools/longhorn',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'stoplightio/spectral',
    'Spectral',
    'https://www.thoughtworks.com/radar/tools/spectral',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'Yelp/detect-secrets',
    'Yelp detect-secrets',
    'https://www.thoughtworks.com/radar/tools/yelp-detect-secrets',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'zalando/zally',
    'Zally',
    'https://www.thoughtworks.com/radar/tools/zally',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'square/leakcanary',
    'LeakCanary',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/leakcanary',
    [
      { month: '2017-11', level: 'Assess' },
      { month: '2021-04', level: 'Adopt' },
    ],
  ],
  [
    'testing-library/angular-testing-library',
    'Angular Testing Library',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/angular-testing-library',
    [{ month: '2021-04', level: 'Trial' }],
  ],
  [
    'awslabs/aws-data-wrangler',
    'AWS Data Wrangler',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/aws-data-wrangler',
    [{ month: '2021-04', level: 'Trial' }],
  ],
  [
    'tiangolo/fastapi',
    'FastAPI',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/fastapi',
    [{ month: '2021-04', level: 'Trial' }],
  ],
  [
    'streamlit/streamlit',
    'Streamlit',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/streamlit',
    [{ month: '2021-04', level: 'Trial' }],
  ],
  [
    'egil/bUnit',
    'bUnit',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/bunit',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'dagster-io/dagster',
    'Dagster',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/dagster',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'flutter/flutter',
    'Flutter',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/flutter',
    [
      { month: '2018-05', level: 'Assess' },
      { month: '2018-11', level: 'Assess' },
      { month: '2019-11', level: 'Trial' },
    ],
  ],
  [
    'pmndrs/jotai',
    'Jotai',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/jotai-and-zustand',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'pmndrs/zustand',
    'Zustand',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/jotai-and-zustand',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'lvgl/lvgl',
    'LVGL',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/lvgl',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'react-hook-form/react-hook-form',
    'React Hook Form',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/react-hook-form',
    [{ month: '2021-04', level: 'Assess' }],
  ],
  [
    'online-ml/river',
    'River',
    'https://www.thoughtworks.com/radar/languages-and-frameworks/river',
    [{ month: '2021-04', level: 'Assess' }],
  ],
];

export const repoToTechRadarMap = libs.reduce(
  (accum, [repo, alias, link, entries]) => {
    accum[repo.toLowerCase()] = { repo, alias, link, entries };
    return accum;
  },
  {} as Record<string, TechRadarT>
);
