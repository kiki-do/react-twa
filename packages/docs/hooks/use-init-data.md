---
title: useInitData
---

# useInitData

Access Telegram WebApp initialization data including user information and authentication details.

## Usage

```tsx
import { useInitData } from 'react-twa'

function UserProfile() {
  const initData = useInitData()

  return (
    <div>
      {initData?.unsafe.user ? (
        <h1>Hello, {initData.unsafe.user.first_name}!</h1>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  )
}