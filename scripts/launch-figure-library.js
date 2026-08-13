"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");

function asServerPath(value) {
  if (!value || typeof value !== "string") return null;
  const expanded = value.replace(/^~(?=$|[\\/])/, os.homedir());
  const absolute = path.resolve(expanded);
  if (absolute.toLowerCase().endsWith(".js")) return absolute;
  return path.join(absolute, "dist", "index.js");
}

function addCandidate(candidates, value) {
  const serverPath = asServerPath(value);
  if (serverPath && !candidates.includes(serverPath)) candidates.push(serverPath);
}

function addPluginCandidates(candidates, root) {
  if (!root) return;
  addCandidate(candidates, root);
  addCandidate(candidates, path.join(root, "plugins", "figure-library"));
  addCandidate(candidates, path.join(path.dirname(root), "figure-library"));
}

function candidatePaths() {
  const candidates = [];

  addCandidate(candidates, path.join(__dirname, "..", "vendor", "scientific-figure-library"));

  for (const key of [
    "ZFX_FIGURE_LIBRARY_MCP_PATH",
    "ZFX_FIGURE_LIBRARY_ROOT",
    "FIGURE_LIBRARY_MCP_PATH",
  ]) {
    addCandidate(candidates, process.env[key]);
  }

  addPluginCandidates(candidates, process.env.WISP_PLUGIN_ROOT);
  addPluginCandidates(candidates, process.env.CODEX_PLUGIN_ROOT);

  const appData = process.env.APPDATA;
  if (appData) {
    addCandidate(
      candidates,
      path.join(appData, "science.wisp-science", "wisp-science", "plugins", "figure-library"),
    );
  }

  const home = os.homedir();
  addCandidate(candidates, path.join(home, ".agents", "plugins", "figure-library"));
  addCandidate(
    candidates,
    path.join(home, ".config", "science.wisp-science", "wisp-science", "plugins", "figure-library"),
  );
  addCandidate(
    candidates,
    path.join(home, ".local", "share", "science.wisp-science", "wisp-science", "plugins", "figure-library"),
  );

  return candidates;
}

const serverPath = candidatePaths().find((candidate) => fs.existsSync(candidate));

if (!serverPath) {
  console.error("ZFX: the bundled Scientific Figure Library runtime was not found.");
  console.error(
    "Download the complete ZFX package, or set ZFX_FIGURE_LIBRARY_MCP_PATH to a compatible dist/index.js file.",
  );
  process.exit(1);
}

const child = spawn(process.execPath, [serverPath], {
  cwd: path.dirname(path.dirname(serverPath)),
  env: process.env,
  stdio: "inherit",
});

child.on("error", (error) => {
  console.error(`ZFX: failed to start Scientific Figure Library: ${error.message}`);
  process.exit(1);
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code === null ? 1 : code);
  }
});
