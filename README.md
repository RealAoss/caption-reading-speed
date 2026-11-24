# Caption Reading Speed

Flag subtitle cues that exceed a user-specified characters-per-second limit.

## Run

Use Node.js 20+. Run `node cli.mjs example.txt`, or pipe UTF-8 text into `node cli.mjs -`. Redirect stdout to keep the result. Other Node.js projects can import `transform` from `./transform.mjs`.

## Example

First line: CPS limit. Then duration in seconds | caption per line.. The bundled sample produces output including:

```text
22.0 CPS · Review
```

## Limitations

Input is processed in memory. Use the format shown in the example file.

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for checks and [CHANGELOG.md](CHANGELOG.md) for changes.

## License

[MIT License](LICENSE). Copyright (c) 2026 caption-reading-speed contributors.
