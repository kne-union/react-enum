import { LRUCache } from 'lru-cache';
import merge from 'lodash';

export const globalParams = {
  base: {},
  cache: {
    max: 100
  }
};

let cache = new LRUCache(globalParams.cache);

const preset = options => {
  merge(globalParams, options);
  cache = new LRUCache(globalParams.cache);
};

export const getCache = () => {
  return cache;
};

export default preset;
