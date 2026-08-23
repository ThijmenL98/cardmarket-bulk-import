cardmarket-bulk-import (Pokémon fork)
===

A fork of [PedroPerpetua/cardmarket-bulk-import](https://github.com/PedroPerpetua/cardmarket-bulk-import) that adds Pokémon reverse holo support.

**Everything about what the extension is and how to use it lives in the [original README](https://github.com/PedroPerpetua/cardmarket-bulk-import#readme) - usage, the demo, the FAQ, and the roadmap. This file only covers what's different here.**

This fork is not published to the Chrome Web Store or Firefox Add-ons; it's meant to be built and loaded locally. Install the upstream version from the stores if you don't need the changes below.


## What's different

Cardmarket's bulk listing form renders a per-row "Reverse Holo" checkbox for Pokémon, and nothing filled it in - Magic's manager only handles `isFoil`, and Pokémon fell through to the generic manager, which ignored reverse holo entirely. Since a reverse holo and a normal printing are the same product at very different prices, every reverse copy was silently listed as a normal one.

- A new optional **Reverse Holo** column in the import form, mapped from your CSV like any other field.
- Accepted values: `reverse`, `reverse holo`, `reverseholo`, `reverse_holo`, `rh`, plus the usual `true` / `yes` / `1`. Plain `holo` is deliberately **not** accepted, since a non-reverse holo would then be listed as a reverse.
- The column shows up in the confirmation table, so you can check it before the form is filled.
- Games whose rows don't render the checkbox are unaffected - the fill is skipped when it's absent.


## Building and loading it

You'll need [Node.js](https://nodejs.org) and Yarn; the versions this project expects are pinned under `engines` in `package.json`. Yarn 4 ships through Corepack, so `corepack enable` is usually enough.

```bash
git clone https://github.com/ThijmenL98/cardmarket-bulk-import
cd cardmarket-bulk-import
yarn install
yarn build
```

Then open `chrome://extensions`, turn on **Developer mode**, click **Load unpacked**, and select the `.output/chrome-mv3` folder. Open any Cardmarket bulk listing page and the import button is injected into the form.

For Firefox, `yarn build:firefox` writes to `.output/firefox-mv2`; load its `manifest.json` through `about:debugging` > **This Firefox** > **Load Temporary Add-on**.

A few things worth knowing about unpacked extensions: `yarn dev` launches a browser with the extension loaded and reloads on edit, which beats rebuilding by hand; after a plain `yarn build` you have to hit the reload icon on the extension's card yourself; they don't auto-update, and Chrome warns about developer mode extensions on startup. `yarn zip` packages a build to move to another machine - unpack it before loading, Chrome can't install a zip directly.
