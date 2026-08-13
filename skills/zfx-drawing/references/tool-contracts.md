# ZFX tool contracts

## Scientific Figure Library v0.2.0

- `figure_library_open`: open the workbench when no concrete intent exists.
- `figure_library_search`: retrieve FigureYa/user candidates from a compact query and derived profiles.
- `figure_library_preview`: obtain the actual preview for visual inspection.
- `figure_library_describe`: verify source, license, dependencies, and data compatibility.
- `figure_library_import`: copy inspected user references without executing code.
- `figure_library_source_status`: inspect local source-pack coverage.
- `figure_library_materialize`: materialize only after selection and review; any error is a hard stop.

Report each reviewed candidate as:

```text
Template: <id>
Decision: pass | reject
Visual score: <0-10>
Decisive matches/differences: <summary>
Data compatibility: compatible | incompatible | uncertain
```

## BioRender

- `search_biorender`: search public templates and the user's own/shared files together.
- `custom_figure_create_session`: create a draft with optional template, figure, image URL, or image bytes as context.
- `custom_figure_get_preview_job`: poll asynchronous generation and report failed/moderation states.
- `custom_figure_get_session`: retrieve images and an editor URL.
- `custom_figure_confirm_preview`: confirm only after previews have been delivered.

Preferred sequence:

```text
search → select → create session → poll → fetch images
→ inspect → confirm delivery → share editor URL
```

The current BioRender interface exposes drafts and editor links, not a production-export operation. Require a real exported asset before claiming final assembly.
