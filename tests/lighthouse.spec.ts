import { playAudit } from 'playwright-lighthouse'
import playwright from 'playwright'
import { test } from '@playwright/test'

test('open browser', async () => {
  const browser = await playwright['chromium'].launch({
    args: ['--remote-debugging-port=9222'],
  })
  const page = await browser.newPage()
  await page.goto('/')

  await playAudit({
    page: page,
    port: 9222,
    thresholds: {
      performance: 90,
      accessibility: 100,
      'best-practices': 100,
      seo: 100,
    },
  })

  await browser.close()
})
