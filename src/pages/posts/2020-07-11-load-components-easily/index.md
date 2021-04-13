---
title: Load React component lazily
author: Shubham Pandey
type: post
date: 2020-07-11
path: /load-component-lazily/
category: React
tags:
  - bite-size
---

```jsx
const AddAReview = React.lazy(() => import('./add_a_review'));
```

* Import the component file lazily by using React.lazy .
* Now you can use AddAReview with JSX syntax.
* But if you try to use it anywhere in the current component it will first reload the component and then load it again with the new component. For ... this you can use another React component Suspence that can be used for showing the loading state of the component.
* What i think is that the React fallback to reloading the component if you don't pass any fallback or something.

* Example use:

```jsx
<Suspense fallback={<div>Loading...</div>}>
    <AddAReview />
</Suspense>
```

> Just putting it in the web because i fear the publish button.

---
Originally posted in [dailycommit.dev](https://dailycommit.dev)