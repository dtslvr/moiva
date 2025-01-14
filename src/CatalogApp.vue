<template>
  <div class="w-full mx-auto lg:w-9/12 xl:w-2/4">
    <!-- Catalog Header -->
    <div class="flex items-center justify-start">
      <img
        src="/images/moiva-head.png"
        alt="Moiva.io logo"
        width="100"
        height="100"
        class="mr-4"
      />
      <h1 class="w-auto m-0 text-5xl">
        <a href="/" title="Home">Moiva.io</a>
        Catalog
      </h1>
    </div>

    <!-- Catalog Body -->
    <div class="mt-8">
      <div v-for="catalogEntry in catalogEntries" :key="catalogEntry.category">
        <h2 class="mt-4 text-left">
          {{ catalogEntry.category }}
        </h2>

        <div class="flex flex-wrap">
          <a
            v-for="lib in catalogEntry.libraries"
            :key="lib.repoId"
            class="mb-4 mr-4"
            :href="lib.href"
          >
            {{ lib.alias }}
          </a>
        </div>
      </div>
    </div>

    <div class="mt-12 font-light text-center">
      Contributions to Moiva Catalog are very
      <a href="https://github.com/aantipov/moiva-catalog" target="_blank"
        >welcome</a
      >!
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getSeoLibName, getLibraryHref } from '@/utils';
import {
  catalogReposIdsByCategory,
  catalogRepoIdToLib,
} from './libraries-catalog';

const catalogEntries = Object.entries(catalogReposIdsByCategory)
  .map(([category, repoIds]) => ({
    category,
    libraries: repoIds
      .map((repoId) => ({
        repoId,
        alias: getSeoLibName(repoId),
        href: getLibraryHref(catalogRepoIdToLib[repoId]),
      }))
      .sort((a, b) => {
        // @ts-ignore
        if (a.alias > b.alias) {
          return 1;
        } else if (a.alias < b.alias) {
          return -1;
        } else {
          return 0;
        }
      }),
  }))
  .filter((entry) => entry.category !== 'misc')
  .sort((a, b) => {
    if (a.category > b.category) {
      return 1;
    } else if (a.category < b.category) {
      return -1;
    } else {
      return 0;
    }
  });

export default defineComponent({
  name: 'CatalogApp',
  setup() {
    return {
      catalogEntries,
    };
  },
});
</script>
