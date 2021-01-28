# iOS Secure Text Input Force QWERTY

I found a React Native bug. When TextInput's testID includes keyword "signup" or "register".

There's a possibility you can't switch to QWERTY keyborad when typing password.

### Reproduce steps (low chance)

1. Build and run RNTextInput (React Native)
2. You have QWERTY keyboard and Japanese-Kana on your iOS device.
3. Tap password field

Result: Japanese keyboard poped up. And you can't change to QWERTY.  
Expected: QWERTY keyboard poped up.

### Reproduce steps (high chance)

1. Build and run RNTextInput (React Native)
2. You have Japanese-Kana on your iOS device and no QWERTY.
3. Tap email field first. Japanese keyboard is poped up.
3. Then tap password field.

Result: Japanese keyboard poped up. And you can't change to QWERTY.  
Expected: QWERTY keyboard poped up.
