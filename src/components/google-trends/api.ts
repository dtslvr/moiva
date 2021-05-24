import axios from 'axios';
import { reportSentry } from '@/apis';
import { reactive } from 'vue';

interface GTrendPointT {
  time: string;
  value: number[];
}

export interface GTrendsResponseT {
  averages: number[];
  timelineData: GTrendPointT[];
}

export interface LibGTrendsT {
  average: number;
  timeline: {
    time: string;
    value: number;
  }[];
}

export const cacheR = reactive(new Map<string, LibGTrendsT>());

const gTrendsCache = new Map<string, GTrendsResponseT>();

export function fetchGTrendsData(
  reposIds: string[]
): Promise<GTrendsResponseT> {
  const libsStr = reposIds.join(',');

  if (gTrendsCache.get(libsStr)) {
    const data = gTrendsCache.get(libsStr) as GTrendsResponseT;
    // Populate the reactive cache
    cacheR.clear();
    reposIds.forEach((repoId, index) => {
      const average = data.averages[index];
      const timeline = data.timelineData.map(({ time, value }) => ({
        time,
        value: value[index],
      }));
      cacheR.set(repoId.toLowerCase(), { average, timeline });
    });

    return Promise.resolve(data);
  }

  return axios
    .get<GTrendsResponseT>(
      `https://google-trends.moiva.workers.dev/?libs=${libsStr}`
    )
    .then(({ data }) => {
      gTrendsCache.set(libsStr, data);
      cacheR.clear();
      reposIds.forEach((repoId, index) => {
        const average = data.averages[index];
        const timeline = data.timelineData.map(({ time, value }) => ({
          time,
          value: value[index],
        }));
        cacheR.set(repoId.toLowerCase(), { average, timeline });
      });
      return data;
    })
    .catch((err) => {
      reportSentry(err, 'fetchGTrendsData');
      return Promise.reject(err);
    });
}
