# Fieldkit

A static, dependency-free packing planner: six sample items, packed weights, filters,
custom items, JSON export, and cross-tab updates. IndexedDB stores each item separately;
an atomic transaction enforces the 30-item limit. All data stays in the browser.

The service worker caches a fixed application shell after the first successful online
visit. Explicit update activation replaces that shell while retaining IndexedDB data.
Only same-origin shell paths are cached. Unknown routes retain the host's behavior.
There is no account, cloud sync, backend, or durable server-data promise. Browser storage
can be cleared or evicted; export a copy to keep it elsewhere. Synthetic demo only.

Serve this directory at an origin root, using HTTPS or localhost. For example:

    python3 -m http.server 8250 --bind 127.0.0.1

Acceptance covers actual Chromium service workers, offline reload and editing,
cross-tab persistence, JSON export, limits, mobile layout, and v1 → v2 activation
without losing the saved list. A local result does not establish Dev support.

Release 1 is the initial shell. Release 2 changes the visible packing tip and both
version identifiers, leaving the data schema and sample records unchanged.
