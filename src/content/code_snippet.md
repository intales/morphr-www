---
order: 2
---

```dart
import 'package:flutter/material.dart';
import 'package:morphr/morphr.dart';

class TodoScreen extends StatelessWidget {
  const TodoScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: FigmaComponent.appBar(
        "app_bar",
        context: context,
        children: [
          FigmaComponent.text(
            "app_bar_title",
            text: "My Tasks",
          ),
        ],
      ),
      body: FigmaComponent.container(
        "main_container",
        child: FigmaComponent.button(
          "add_task_button",
          onPressed: () => print("New task!"),
        ),
      ),
    );
  }
}
```
