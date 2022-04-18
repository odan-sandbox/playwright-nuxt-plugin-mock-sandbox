import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  const title = page.locator('[data-testid="title"]')
  console.log(title)
  await expect(title).toHaveText('Welcome to your Nuxt Application')
})
