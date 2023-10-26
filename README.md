# rtap

An implementation of Rubys `#tap` for TypeScript

## Usage

Use on any object:

```typescript
import { tap } from "rtap";

const user: User = tap(new User(), (u: User) => {
  u.name = "Foo";
});
```

Added as a mixin to a class:

```typescript
import { tappify } from "rtap";

const User = tappify(BaseUser);

const user = new User().tap((u: User) => {
  u.name = "Foo";
})
```
