# Caption Reading Speed

Flag subtitle cues that exceed a user-specified characters-per-second limit.

Open `index.html` in a modern browser. Edit the sample inputs to update the result, then print or download it. Processing stays in the tab.

## Example

Input:

```text
18
2 | Thank you
1 | This is a long caption
```

Expected output includes:

```text
22.0 CPS · Review
```

## Limitations

Use the input format shown in the worked example. The transformation runs in browser memory; export the result before closing the tab.

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup and test commands, and the [changelog](CHANGELOG.md) for project history.

## License

[MIT License](LICENSE). Copyright (c) 2026 caption-reading-speed contributors.
