
# XC FeatureImages - A Vue Component

This component project was built with Vue CLI 3. For details, including custom configuration, visit [https://cli.vuejs.org/](https://cli.vuejs.org/).

* * *

* [Project setup](#project-setup)
* [Component setup](#component-setup)
* [Component usage](#component-usage)
* [Project board - To do](#project-board---to-do)

* * *

## Project setup

```bash
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build
```

A static build for this project is available for browser preview using `dist/index.html`. This preview method can happen without running a server.

## Component setup

FeatureImages is a self-driven component that doesn't require props to run. It assumes the corresponding Store is available for its data and update methods.

From a parent view, inject the component and use its markup where desired. FeatureImages will conform to its container's dimensions.

```javascript
import FeatureImages from '@/components/feature-images/FeatureImages.vue';

export default Vue.extend({
  components: {
    'feature-images': FeatureImages
  }
});
```

```html
<div>
  <feature-image></feature-image>
</div>
```

## Component usage

FeatureImages uses the Vue.Draggable library, allowing users to drag-sort the images used for each feature*.

Feature and Image data is called separately and then, because of the divisive nature of the drag-sort, combined based on array order. The custom array order determined by the drag-sort is paired with the array order of the features.

> <small>**\*drag-sort** functionality is not available on mobile devices.</small>

<img alt="drag start" src="public/assets/docs/drag-start.png" style="max-width: 300px;" />

<img alt="drag end" src="public/assets/docs/drag-end.png" style="max-width: 300px;" />

## Project board - To do

1. Add `<transition-group>` to improve vuedraggable movements
2. Build a relational system for Feature Images (use ID's instead of relying on array order)
