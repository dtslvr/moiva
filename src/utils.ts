import {
  catalogRepoIdToLib,
  catalogNpmToLib,
  catalogNpmNamesByCategory,
} from './libraries-catalog';
import { LibraryT, NpmPackageT } from '@/libraryApis';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import Swal from 'sweetalert2';

const paramName = 'compare';
const delimiter = ' ';
const encodedDelimiter = '+';

// Update the URL whenever a user selects/deselects a library
// TODO: do we need to update the document title?
export function updateUrl(npmPackagesNames: string[]): void {
  const Url = new URL(window.location.href);

  // Delete the parameter if no valid libs are provided via url
  if (!npmPackagesNames.length) {
    Url.searchParams.delete(paramName);
    window.history.pushState(null, '', Url.href);
    return;
  }

  // Update the url with the npm packages names in the right order
  window.history.pushState(null, '', constructHref(npmPackagesNames));
}

export function getNpmPackagesFromUrl(): string[] {
  const Url = new URL(window.location.href);
  const defaultLibs = Url.searchParams.get(paramName)?.split(delimiter) || [];

  return [...new Set(defaultLibs)];
}

export function constructHref(npmPackagesNames: string[]): string {
  if (!npmPackagesNames.length) {
    return '/';
  }

  return `/?${paramName}=${[...npmPackagesNames]
    .sort()
    .join(encodedDelimiter)}`;
}

export const numbersFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
});

// Do not allow Google to index pages with >3 libraries in comparison
// To avoid spamming Google and the user with useless links
export function setNoFollowTag(): void {
  const Url = new URL(window.location.href);
  const libs = Url.searchParams.get(paramName)?.split(delimiter) || [];
  if (libs.length > 3) {
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex';
    document.head.appendChild(metaRobots);
  }
}

function getSeoLibName(repoId: string): string {
  if (catalogRepoIdToLib[repoId].seoAlias) {
    return catalogRepoIdToLib[repoId].seoAlias as string;
  }

  const [, repoName] = repoId.split('/');

  // Capitalise normal names
  if (
    repoName.length > 2 &&
    !repoName.includes('@') &&
    !repoName.includes('/') &&
    !repoName.includes('-')
  ) {
    return repoName.charAt(0).toUpperCase() + repoName.slice(1);
  }

  return repoName;
}

export function getTitle(reposIds: string[]): string {
  if (!reposIds.length) {
    return 'Moiva.io - Measure and Compare JavaScript libraries side by side';
  }

  const seoNames = [...reposIds].sort().map(getSeoLibName);

  if (seoNames.length === 1) {
    return `${seoNames[0]}: Stats and Trends from NPM, GitHub, Google Search - Moiva.io`;
  }

  return `${seoNames.join(' vs ')}: Which One to Choose? - Moiva.io`;
}

interface LibForDescriptionT {
  npm: string;
  repoId: string;
  description: string;
  starsCount: string;
  age: string;
  dependenciesCount: number;
  license: string;
}

export function getMetaDescription(libraries: LibraryT[]): string {
  const libs = [...libraries].sort(sortLibsByNpmPackageName).map((lib) => {
    const { name, dependencies, license } = lib.npmPackage as NpmPackageT;
    const { description, stars, createdAt, repoId } = lib.repo;

    return {
      npm: name,
      repoId,
      description,
      starsCount: numbersFormatter.format(stars),
      age: formatDistanceToNowStrict(new Date(createdAt)),
      dependenciesCount: dependencies.length,
      license,
    };
  });

  if (!libs.length) {
    return `Which JavaScript library to use? Need to find the best alternatives?
    Compare Stats and Trends over time - Npm Downloads, Google Trends, Contributors, Releases, Commits, Developer usage, Bundle size, Vulnerabilities, Dependencies, Issues, GitHub Stars, License, Age and more`;
  }

  if (libs.length === 1) {
    return getSingleLibDescription(libs[0]);
  }

  if (libs.length === 2) {
    return getTwoLibsDescription(libs[0], libs[1]);
  }

  if (libs.length === 3) {
    return getThreeLibsDescription(libs[0], libs[1], libs[2]);
  }

  const seoNames = libs.map((lib) => getSeoLibName(lib.repoId));
  const seoNamesStr = seoNames.join(', ');

  return `Compare ${seoNamesStr}. Stats and Trends over time - Npm Downloads, Google Trends, Contributors, Releases, Commits, Developer usage, Bundle size, Vulnerabilities, Dependencies, Issues, GitHub Stars, License, Age and more`;
}

function getSingleLibDescription(lib: LibForDescriptionT): string {
  const {
    repoId,
    description,
    starsCount,
    age,
    dependenciesCount,
    license,
  } = lib;
  const seoName = getSeoLibName(repoId);
  const seoDescrIntro = description
    .toLowerCase()
    .startsWith(seoName.toLowerCase())
    ? description
    : `${seoName}. ${description}`;

  const words = seoDescrIntro.split(' ');
  let seoDescrIntroCut =
    words.length <= 11 ? seoDescrIntro : words.slice(0, 11).join(' ') + '...';

  // Make sure there is a dot in the end
  if (seoDescrIntroCut.slice(-1) !== '.') {
    seoDescrIntroCut += '.';
  }

  return `${seoDescrIntroCut} 
    &#9733;${starsCount} stars, ${age} old, ${dependenciesCount} dependencies, license: ${license}...
    Find the best ${seoName} alternatives and compare them side by side`;
}

function getTwoLibsDescription(
  libA: LibForDescriptionT,
  libB: LibForDescriptionT
): string {
  const seoNameA = getSeoLibName(libA.repoId);
  const seoNameB = getSeoLibName(libB.repoId);

  return `Which is better ${seoNameA} or ${seoNameB}? Compare Stats and Trends side by side.
${seoNameA}: &#9733;${libA.starsCount} stars, ${libA.age} old, ${libA.dependenciesCount} dependencies, license: ${libA.license}...
${seoNameB}: &#9733;${libB.starsCount} stars, ${libB.age} old, ${libB.dependenciesCount} dependencies, license: ${libB.license}...
`;
}

function getThreeLibsDescription(
  libA: LibForDescriptionT,
  libB: LibForDescriptionT,
  libC: LibForDescriptionT
): string {
  const seoNameA = getSeoLibName(libA.repoId);
  const seoNameB = getSeoLibName(libB.repoId);
  const seoNameC = getSeoLibName(libC.repoId);

  return `Which is better ${seoNameA}, ${seoNameB}, or ${seoNameC}? Compare Stats and Trends side by side.
${seoNameA}: &#9733;${libA.starsCount} stars, ${libA.age} old, ${libA.dependenciesCount} dependencies, license: ${libA.license}...
${seoNameB}: &#9733;${libB.starsCount} stars, ${libB.age} old, ${libB.dependenciesCount} dependencies, license: ${libB.license}...
${seoNameC}: &#9733;${libC.starsCount} stars, ${libC.age} old, ${libC.dependenciesCount} dependencies, license: ${libC.license}...
`;
}

/**
 * Get NPM suggestions for the selected libs
 * based on the last selected lib
 *
 */
export function getSuggestions(npmPackagesNames: string[]): string[] {
  if (!npmPackagesNames.length) {
    return [];
  }

  // We should not display any suggestions if the number of selected libraries is >=5
  // So that Google Search doesn't discover long urls and display them in search results
  if (npmPackagesNames.length >= 5) {
    return [];
  }

  const lastSelectedLibData =
    catalogNpmToLib[npmPackagesNames[npmPackagesNames.length - 1]];

  if (!lastSelectedLibData || lastSelectedLibData.category === 'misc') {
    return [];
  }

  return catalogNpmNamesByCategory[lastSelectedLibData.category]
    .filter((libName) => !npmPackagesNames.includes(libName))
    .slice(0, 6);
}

export function getBundlephobiaUrl(libName: string): string {
  return `https://bundlephobia.com/result?p=${encodeURIComponent(libName)}`;
}

export function showErrorMsg(msg: string): void {
  Swal.fire({
    title: msg,
    toast: true,
    showConfirmButton: false,
    position: 'top-end',
    showCloseButton: true,
    closeButtonHtml: '<span>×</span>',
    customClass: {
      title: 'toast-error-title',
      popup: 'toast-error-popup',
      closeButton: 'toast-error-close-btn',
    },
  });
}

function sortLibsByNpmPackageName(libA: LibraryT, libB: LibraryT) {
  const nameA = (libA.npmPackage as NpmPackageT).name;
  const nameB = (libB.npmPackage as NpmPackageT).name;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}
