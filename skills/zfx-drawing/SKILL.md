---
name: zfx-drawing
description: Orchestrate Scientific Figure Library v0.2.0 and BioRender to retrieve and visually review scientific references, create biological schematics, adapt quantitative plots, and assemble publication-ready hybrid figures. Use whenever the ZFX plugin is mentioned, or for ZFX绘图, 科研绘图, 机制图, 通路图, graphical abstracts, scientific figures, FigureYa references, BioRender drafts, and combined data-plus-mechanism panels.
---

# ZFX绘图

Use Scientific Figure Library for reference retrieval, visual comparison, data compatibility, and source materialization. Use BioRender for biological templates, the user's BioRender files, and editable schematic drafts. Use both for hybrid figures.

Read [references/tool-contracts.md](references/tool-contracts.md) before calling either system.

## Intake

1. Identify the scientific message, target venue, dimensions, output type, labels, and inputs.
2. Inspect supplied images with `view_image`. Record panels, axes, encodings, labels, annotations, and style.
3. Profile supplied data locally: shape, columns and types, semantic roles, missingness, and suitable charts. Never send raw data values to retrieval services.
4. Preserve user terminology. Flag uncertain biology, causal claims, units, statistics, and species details rather than inventing them.
5. If the user only opens or mentions ZFX without a concrete intent, call `figure_library_open`; do not invent a search.

## Route the work

- Data/statistical figures: use Scientific Figure Library first. Keep quantitative panels code-generated.
- Biological mechanisms, pathways, cell interactions, workflows, anatomy, and graphical abstracts: use BioRender first.
- Hybrid figures: use Scientific Figure Library to establish layout and quantitative encodings, then BioRender for the biological component. Reconcile typography, palette, stroke weight, labels, panel letters, and narrative flow.

## Scientific Figure Library review

1. Search with 2–6 discriminative keywords and compact `dataProfile`/`visualProfile` fields.
2. Treat retrieval score only as rank, never as confidence or visual similarity.
3. Preview candidate 1 and inspect it. Score 0–2 each for chart family, layout, axes/geometry, encodings, and labels/style.
4. Require at least 8/10, the correct chart family, and compatible data verified with `figure_library_describe`.
5. If rejected, inspect candidates 2 and 3. Stop after three and explain the gap.
6. Materialize only after user selection or explicit permission for the Agent to choose. Any materialization error is a hard stop: report it without retries, manual download, or silent substitution.
7. Keep upstream/reference files unchanged and untrusted. Never run imported code or dependency installers automatically. Adapt code separately and preserve license, attribution, citation, and lock files.

## BioRender review and generation

1. Search both the user's files and public templates by default using a concise query and unique non-sensitive search-session ID.
2. Inspect previews before recommending. Distinguish a user file from a public template and assess biological relevance, completeness, spatial logic, labels, and editability.
3. Create a custom session from the user's prompt. Pass a selected BioRender template/figure as canvas context; pass a reference image only when real bytes or a valid URL exist.
4. Poll until the job completes or fails. Fetch completed previews with images and inspect them against the specification.
5. Confirm preview delivery only after previews were actually returned. Share the BioRender editor URL when available.

## Cross-system handoff and export

1. Treat the reviewed library reference as a layout contract and the BioRender result as an editable biological asset. A preview is not permission to copy protected artwork.
2. If a library preview cannot be passed as real image context, translate the inspected layout into a structured BioRender prompt; never claim an image was transferred.
3. Export quantitative panels as SVG or PDF. Treat BioRender previews as review artifacts, not publication masters.
4. Require an actual BioRender-exported vector or high-resolution transparent asset before final local assembly. If it is unavailable, deliver the editor link and quantitative panel separately and state that final assembly is pending.
5. Preserve an editable master and verify dimensions, resolution, color space, fonts, attribution, and the target venue's format rules.

Report the chosen route, reviewed IDs, pass/reject decisions, decisive findings, data compatibility, unresolved scientific uncertainty, generated files, and BioRender editor link.
