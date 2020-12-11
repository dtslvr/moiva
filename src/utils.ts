import libsConfigs, { appsConfigsMap } from '../apps-config';

const paramName = 'compare';
const oldParamName = 'apps';
const delimiter = ' ';

// Validate URL's 'compare' parameter and remove wrong libs
export function cleanupUrl(): void {
  const Url = new URL(window.location.href);
  const libsFromUrl = Url.searchParams.get(paramName)?.split(delimiter) || [];
  const libsFromUrlValidated = libsFromUrl
    .filter((libFromUrl) => !!appsConfigsMap[libFromUrl])
    .sort();

  // Make sure the old parameter is not licked
  Url.searchParams.delete(oldParamName);

  // Make sure the url is valid - update it if not empty
  if (!libsFromUrlValidated.length) {
    Url.searchParams.delete(paramName);
    window.history.replaceState(null, '', Url.href);
    return;
  }

  Url.searchParams.set(paramName, libsFromUrlValidated.join(delimiter));
  window.history.replaceState(null, '', Url.href);
}

// Update URL whenever a user selects/deselects a library
// TODO: do we need to update the document title?
export function updateUrl(selectedLibs: string[]): void {
  const Url = new URL(window.location.href);

  if (!selectedLibs.length) {
    Url.searchParams.delete(paramName);
    window.history.pushState(null, '', Url.href);
    return;
  }

  const selectedLibsUrlnames = selectedLibs
    .map((lib) => appsConfigsMap[lib].name)
    .sort();

  Url.searchParams.set(paramName, selectedLibsUrlnames.join(delimiter));
  window.history.pushState(null, '', Url.href);
}

/**
 * Should be used after cleanupUrl
 */
export function getDefaultLibs(): string[] {
  const Url = new URL(window.location.href);
  const libsFromUrl = Url.searchParams.get(paramName)?.split(delimiter) || [];

  return libsFromUrl.length
    ? libsFromUrl
    : libsConfigs
        .filter((libConfig) => libConfig.selected)
        .map((libConfig) => libConfig.name);
}
