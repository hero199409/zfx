# ZFX Drawing

`zfx` is a scientific drawing plugin that coordinates Scientific Figure Library and BioRender for reference-guided plots, biological schematics, and hybrid publication figures.

## Installation

Install and enable Scientific Figure Library 0.2.0 in the same host before using the quantitative-figure tools. ZFX automatically looks for the standard Wisp plugin location on Windows, macOS, and Linux, and starts the installed `dist/index.js` through the launcher in `scripts/`.

If the library is installed somewhere else, set `ZFX_FIGURE_LIBRARY_MCP_PATH` to its `dist/index.js` path before starting a new session. For example:

```powershell
$env:ZFX_FIGURE_LIBRARY_MCP_PATH = "C:\path\to\figure-library\dist\index.js"
```

The BioRender tools require an active BioRender connector in the host. Connect BioRender when prompted; no API key is stored in this repository.

## What is included

- Plugin metadata under `.codex-plugin/`
- The `zfx-drawing` orchestration skill under `skills/`
- Tool contracts for Scientific Figure Library and BioRender
- A portable Scientific Figure Library launcher under `scripts/`
- Runtime connector configuration in `.mcp.json` and `.app.json`

The plugin does not include API keys, user data, generated figures, or vendor assets.

## License

Released under the MIT License. See [LICENSE](LICENSE).
