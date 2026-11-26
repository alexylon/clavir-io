// Renders public/images/og.png, the image shown when clavir.io is shared: the 1200 by 630 layout
// of the banner page, scripts/banner.html (the same page as assets/banner.html in clavirio), with
// headless Chrome. JetBrains Mono comes from Google Fonts, so it needs an internet connection.
//
//   npm run og-image        (CHROME=/path/to/chrome for another browser)
import { execFileSync } from 'child_process'
import { copyFileSync, mkdtempSync, rmSync } from 'fs'
import { tmpdir } from 'os'
import { dirname, join, resolve } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const CHROME = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const WIDTH = 1200
const HEIGHT = 630
// Long enough for the font to load before Chrome takes the picture
const LOAD_MS = 5000
const PAGE = 'scripts/banner.html'
const ICON = 'public/images/png/icon_gunmetal_scanlines_512.png'
const OUT = 'public/images/og.png'

const dir = mkdtempSync(join(tmpdir(), 'og-image-'))
try {
  const page = join(dir, 'banner.html')
  copyFileSync(resolve(root, PAGE), page)
  copyFileSync(resolve(root, ICON), join(dir, 'icon.png'))

  execFileSync(
    CHROME,
    [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--allow-file-access-from-files',
      `--user-data-dir=${join(dir, 'profile')}`,
      '--force-device-scale-factor=1',
      `--window-size=${WIDTH},${HEIGHT}`,
      `--virtual-time-budget=${LOAD_MS}`,
      `--screenshot=${resolve(root, OUT)}`,
      `${pathToFileURL(page)}#og`,
    ],
    { stdio: 'ignore' },
  )
} finally {
  rmSync(dir, { recursive: true, force: true })
}

console.log(`${OUT} written`)
