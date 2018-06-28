---
to: src/components/<%= name %>/index.js
unless_exists: true
---
import <%= name %> from './<%= name %>';

export { <%= name %> };
