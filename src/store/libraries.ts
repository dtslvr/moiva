import { reactive, computed, readonly } from 'vue';
import {
  RepoT,
  fetchLibraryByRepo,
  fetchLibraryByNpm,
  NpmPackageT,
} from '@/libraryApis';
import { LibraryT } from '@/getLibrary';
import { catalogRepoIdToLib } from '@/libraries-catalog';

// ====== STATE ======
const librariesR = reactive<LibraryT[]>([]);
// Track Npm packages and Repos currently being loaded to avoid duplicates
const npmPackagesLoading = reactive<string[]>([]);
const reposLoading = reactive<string[]>([]);

// ====== COMPUTED ======
// deprecated in favor of librariesRR to make the value clear - reactive readonly
export const libraries = readonly(librariesR);
export const librariesRR = libraries;
export const isLoading = computed(
  () => !!npmPackagesLoading.length || !!reposLoading.length
);
export const librariesIds = computed<string[]>(() =>
  librariesR.map((lib) => lib.id)
);
const reposIdsWithDuplicates = computed<string[]>(() =>
  libraries.map((lib) => lib.repo.repoId.toLowerCase())
);
export const reposIds = computed<string[]>(() => [
  ...new Set(reposIdsWithDuplicates.value),
]);
export const npmPackagesNames = computed<string[]>(() =>
  libraries
    .filter((lib) => !!lib.npmPackage)
    .map((lib) => (lib.npmPackage as NpmPackageT).name)
);

/**
 * Selected libs category
 */
export const categoryRef = computed<string | null>(() => {
  if (!librariesR.length) {
    return null;
  }

  const categories = librariesR
    .map((lib) => catalogRepoIdToLib[lib.repo.repoId.toLowerCase()])
    .map((catalogLib) => (catalogLib ? catalogLib.category : null));

  const category = categories[0];

  if (category && categories.every((cat) => cat === category)) {
    return category;
  }

  return null;
});

/**
 * There can be libraries with duplicate repos potentially,
 * e.g. two npm packages with the same repo.
 * We take only the first repo.
 */
export const repoToLibraryIdMap = computed<Record<string, string>>(() => {
  return reposIds.value.reduce((acc, repoId) => {
    if (!acc[repoId]) {
      acc[repoId] = (librariesR.find(
        (lib) => lib.repo.repoId.toLowerCase() === repoId
      ) as LibraryT).id;
    }

    return acc;
  }, {} as Record<string, string>);
});

export const repoIdToRepoMap = computed<Record<string, RepoT>>(() => {
  return librariesR.reduce((acc, library) => {
    const repoId = library.repo.repoId.toLowerCase();
    if (!acc[repoId]) {
      acc[repoId] = library.repo;
    }

    return acc;
  }, {} as Record<string, RepoT>);
});

export const npmPackageToLibraryIdMap = computed<Record<string, string>>(() => {
  return libraries
    .filter((lib) => !!lib.npmPackage)
    .reduce((acc, lib) => {
      acc[(lib.npmPackage as NpmPackageT).name] = lib.id;

      return acc;
    }, {} as Record<string, string>);
});

function hasLibraryADuplicate(library: LibraryT): boolean {
  return librariesR.some(
    ({ repo, npmPackage }) =>
      repo.repoId === library.repo.repoId &&
      npmPackage?.name === library.npmPackage?.name
  );
}

/**
 * Add a library via a Github repository
 */
export function addLibraryByRepo(repoId: string): Promise<void> {
  repoId = repoId.toLowerCase();
  if (!repoId || reposLoading.includes(repoId)) {
    return Promise.resolve();
  }

  reposLoading.push(repoId);

  return fetchLibraryByRepo(repoId)
    .then((lib) => {
      if (!hasLibraryADuplicate(lib)) {
        librariesR.push(lib);
      }
    })
    .finally(() => reposLoading.splice(reposLoading.indexOf(repoId), 1));
}

/**
 * Add a library via a Npm package
 */
export function addLibraryByNpmPackage(pkgName: string): Promise<void> {
  if (
    !pkgName ||
    npmPackagesNames.value.includes(pkgName) ||
    npmPackagesLoading.includes(pkgName)
  ) {
    return Promise.resolve();
  }

  npmPackagesLoading.push(pkgName);

  return fetchLibraryByNpm(pkgName)
    .then((lib) => {
      if (!hasLibraryADuplicate(lib)) {
        librariesR.push(lib);
      }
    })
    .finally(() =>
      npmPackagesLoading.splice(npmPackagesLoading.indexOf(pkgName), 1)
    );
}

export function removeLibrary(libraryId: string): void {
  librariesR.splice(librariesIds.value.indexOf(libraryId), 1);
}

export function removeAllLibraries(): void {
  librariesR.length = 0;
}
