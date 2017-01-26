# Delorean
An intuitive, in-app MobX + React developer tool employing time travel debugging and (soon to be implemented) rich application state visualization. Quickly and easily debug any MobX-React project, with just two lines of code.

# Features
- Flexible time travel functionality
- Persistent log of every observable action and state change, including individual diffs and complete application state
- Easy undo/redo of actions without unwanted side effects
- Configurable visualization of relevant observables, observers, actions, computed values, and stores (coming soon)

# Installation

### NPM Module
Delorean is easily installed through npm as a developer dependency using your terminal.

```javascript
npm install mobx-delorean --save-dev
```

# Getting Started
Import `DeloreanTools` and `delorean` from the mobx-delorean module.

```javascript
// in top level React component file
import { DeloreanTools } from 'mobx-delorean';

...

  render() {
    return (
      <div>
        <DeloreanTools />
        <YourComponent />
      <div>
    )
  }
```

```javascript
// in MobX store files(s)
import { delorean } from 'mobx-delorean';

...

export default delorean(YourStore);
```

__Note__: Delorean relies on wrapping your MobX store export in order to track its obersvables and parse its dependency tree at runtime. If you are using multiple stores, you can wrap them separately and Delorean will track them individually.

Open your MobX app in the browser and notice the Delorean toolbar at the top of your app. In order from left to right:

1) Time Travel Slider - Click to toggle the time travel slider's visibility. Drag and drop the position marker to traverse through the log of previous application states.
2) Undo/Redo Actions - Step forward and back through your application's state one action at a time with specific details about each change.
3) Store Structure Visualizer - Open a new tab with a rich heirarchy visualization of your MobX store's dependency tree. (coming soon)