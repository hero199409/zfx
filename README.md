# ZFX Drawing

`zfx` is a scientific drawing plugin that coordinates Scientific Figure Library and BioRender for reference-guided plots, biological schematics, and hybrid publication figures.

## Installation

The repository includes Scientific Figure Library 0.2.0 under `vendor/scientific-figure-library`, so downloading this repository gives you the ZFX orchestration layer and the quantitative-figure runtime together. ZFX starts the bundled runtime automatically through the launcher in `scripts/`.

If you want to use another compatible Scientific Figure Library installation, set `ZFX_FIGURE_LIBRARY_MCP_PATH` to its `dist/index.js` path before starting a new session. For example:

```powershell
$env:ZFX_FIGURE_LIBRARY_MCP_PATH = "C:\path\to\figure-library\dist\index.js"
```

The BioRender tools still require an active BioRender connector in the host. Connect BioRender when prompted; no API key is stored in this repository.

## What is included

- Plugin metadata under `.codex-plugin/`
- The `zfx-drawing` orchestration skill under `skills/`
- Tool contracts for Scientific Figure Library and BioRender
- Scientific Figure Library 0.2.0, including its runtime, catalog, thumbnails, and licenses, under `vendor/`
- A portable Scientific Figure Library launcher under `scripts/`
- Runtime connector configuration in `.mcp.json` and `.app.json`

The plugin does not include API keys, user data, or generated figures. Vendored runtime assets are accompanied by their license files.

## Licenses

ZFX code is released under the MIT License. The bundled Scientific Figure Library code is also MIT licensed. FigureYa catalog data and thumbnails retain their upstream CC BY-NC-SA 4.0 terms; see `vendor/scientific-figure-library/THIRD_PARTY_NOTICES.md` and its included license files.

## License

Released under the MIT License. See [LICENSE](LICENSE).
