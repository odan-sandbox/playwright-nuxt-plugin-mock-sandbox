import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  const text1 = page.locator('[data-testid="text"]')
  await expect(text1).toHaveText('init')

  const button = page.locator('[data-testid="button"]')
  await button.click()

  const text2 = page.locator('[data-testid="text"]')
  await expect(text2).toHaveText('hello')
})
