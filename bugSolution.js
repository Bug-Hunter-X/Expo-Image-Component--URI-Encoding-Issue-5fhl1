The solution is to properly encode the URI before passing it to the `Image` component using the `encodeURIComponent` function.  This ensures that special characters are correctly handled by the image loading library.

```javascript
import {Image} from 'expo-image';

const MyComponent = () => {
  const imageUrl = 'https://example.com/image with spaces.jpg';
  const encodedImageUrl = encodeURIComponent(imageUrl);

  return (
    <Image
      source={{ uri: encodedImageUrl }}
      style={{ width: 200, height: 200 }}
    />
  );
};
```