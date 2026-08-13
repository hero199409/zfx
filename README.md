# ZFX Drawing

`zfx` is a scientific drawing plugin that coordinates Scientific Figure Library and BioRender for reference-guided plots, biological schematics, and hybrid publication figures.

## What is included

- Plugin metadata under `.codex-plugin/`
- The `zfx-drawing` orchestration skill under `skills/`
- Tool contracts for Scientific Figure Library and BioRender
- Runtime connector configuration in `.mcp.json` and `.app.json`

## Configuration note

The bundled `.mcp.json` records the local Scientific Figure Library runtime used by this development installation. Adjust its `command`, `args`, and `cwd` values for your own installation before enabling the plugin. The `.app.json` connector identifier likewise depends on the host application's BioRender connection.

The plugin does not include API keys, user data, generated figures, or vendor assets.

## License

Released under the MIT License. See [LICENSE](LICENSE).
