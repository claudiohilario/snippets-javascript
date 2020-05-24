# Snippets JavaScript

# Menu Structure data model
## Example 1
```js
[
  { uuid: 'be9d28e9-7551-4daa-ac2a-9dd8044bf5cc', name: 'Dashboard', icon: 'ti-home', href:'/dashboard', parent: null, order: 0 },
  { uuid: '55a19db7-e72a-42e8-ab0d-fa20333df857', name: 'Multi Level', icon: 'ti-angle-right', href:'/multilevel', parent: null, order: 1 },
  { uuid: 'add6e035-98e4-4880-9aff-84816a0d0240', name: 'Multi Level 1', icon: '', href:'/multilevel1', parent: '55a19db7-e72a-42e8-ab0d-fa20333df857', order: 0 },
  { uuid: '9d4cfba8-4179-4d79-8c4a-b27561f4cfe7', name: 'Multi Level 2', icon: '', href:'/multilevel2', parent: '55a19db7-e72a-42e8-ab0d-fa20333df857', order: 1 },
  { uuid: '9d4cfba8-4179-4d79-8c4a-b27561f4cfe7', name: 'Multi Level 2.1', icon: '', href:'/multilevel2-1', parent: '9d4cfba8-4179-4d79-8c4a-b27561f4cfe7', order: 0 },
]
```
