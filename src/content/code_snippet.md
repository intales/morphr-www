---
order: 2
---

```dart
import 'package:flutter/material.dart';
import 'package:morphr/morphr.dart';

class MyButton extends StatelessWidget {
  const MyButton({super.key});

  @override
  Widget build(BuildContext context) {
    return FigmaComponent(
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
    );
  }
}
```
