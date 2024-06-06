import assert from 'node:assert';
import { describe, it } from 'node:test';

import ffmpegPath from './index.js';

describe(
  'Path loading test',
  () => {
    it(
      'Should get the path of the installed binaries',
      () => {
        assert.ok(ffmpegPath);
        assert.ok(typeof ffmpegPath === 'string');
      },
    );
  },
);
