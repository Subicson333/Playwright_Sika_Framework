import { test } from '@playwright/test';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./login.feature');

defineFeature(feature, test => {
  // Step definitions are implemented in separate files.
});
