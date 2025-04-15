---
order: 2
---

```dart
import 'package:flutter/material.dart';
import 'package:morphr/morphr.dart';

class ProductScreen extends StatelessWidget {
  final Product product;

  const ProductScreen({
    required this.product,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return FigmaComponent.widget(
      "product_screen",
      transformers: [
        TextTransformer.byName(
          "product_name",
          text: product.name,
        ),
        TextTransformer.byName(
          "product_price",
          text: "\$${product.price.toStringAsFixed(2)}",
        ),
        TextTransformer.byName(
          "product_description",
          text: product.description,
        ),
        WidgetTransformer.byName(
          "product_image",
          builder: (_) => Image.network(product.imageUrl),
        ),
      ],
    );
  }
}
```
