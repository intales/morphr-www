---
order: 2
---

```dart
FigmaComponent(
  componentId: "button",
  overrides: [
    FigmaOverride(
      properties: {
        FigmaProperties.onTap: () => print(
          "Hello, World!",
        ),
      },
    ),
  ],
)
```
