import { test, expect } from '@playwright/test';
import { PlaywrightTestConfig } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto("http://bracket-frontend:3000");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Bracket/);
});


