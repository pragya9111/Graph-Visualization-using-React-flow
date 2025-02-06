# React Flow Graph Visualization

An interactive graph visualization application built with React Flow, Redux, and TypeScript that allows users to manipulate and customize graph elements with undo/redo functionality.

## Features

- Interactive graph with 10 interconnected nodes
- Node customization:
  - Color modification with color picker
  - Font size adjustment (12px to 24px)
- Drag and drop node positioning
- Undo/redo functionality for all modifications
- Smooth animations and transitions
- Performance optimized state management
- Custom node and edge styling

## Tech Stack

- React 18
- TypeScript
- Redux (for state management)
- React Flow 12
- React Colorful (for color picker)
- Tailwind CSS (for styling)

## Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Live Preview

Check out the live version of the project! [View Live Demo](https://graph-visualization-using-react-flow.vercel.app/)

## Project Structure

```
src/
├── components/          # React components
│   ├── GraphContainer.tsx
│   ├── NodeCustomizationPanel.tsx
│   └── UndoRedoControls.tsx
├── store/              # Redux store
│   ├── actions.ts
│   ├── reducer.ts
│   └── initialState.ts
├── types/              # TypeScript types
│   └── index.ts
└── App.tsx            # Root component
```

## Usage Guide

1. **Graph Navigation**
   - Pan: Drag empty space
   - Zoom: Mouse wheel or pinch gesture
   - Select node: Click on any node

2. **Node Customization**
   - Select a node to customize
   - Use color picker to change node color
   - Adjust font size using the slider
   - Drag nodes to reposition them

3. **History Management**
   - Use undo/redo buttons to navigate through changes
   - All modifications are tracked:
     - Color changes
     - Font size adjustments
     - Node position updates

## Performance Considerations

- Optimized node rendering with memoization
- Efficient state updates using Redux
- Debounced position updates
- Lazy loading of color picker
