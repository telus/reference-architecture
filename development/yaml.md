# YAML

## Why

We need an object serialization format that is:

- Human readable
- Human writeable
- Able to construct complex objects

---

JSON, while excellent for communication between APIs, lacks a few key features:

- Comments!!
- Block literals
- Human writeable (missing commas, quotes, brackets, etc.)

## What

YAML (recursive abbreviation for: YAML is not a markup language) is a superset of JSON. Anything that can be encoded in JSON can be encoded in YAML.

YAML is more writeable than JSON. It relies on indentation and nesting, based on skeumorphic conventions, to represent object structure.

## How

*DO*:
- Use YAML for configuration files, or anything that should be editable by humans
- Prefer using YAML wherever possible (the primary case we cannot support is for `package.json`)
- Use IDE plugins and linting to make sure your YAML structure is valid
- Use the `js-yaml` library for parsing YAML

*DON'T*:
- Do NOT use YAML for inter-API communication