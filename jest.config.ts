import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  collectCoverageFrom: [
    'test/*.{ts}',
  ],
};

export default config;