import { test, expect } from '@playwright/test';

test.describe("node tests", () => {

  test('workers not available', async () => {
    expect(typeof Worker !== "undefined").toBe(false);
  });

})
