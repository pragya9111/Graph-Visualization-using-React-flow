import { Action, State, HistoryState } from '../types';
import { initialState } from './initialState';

const initialHistoryState: HistoryState = {
  past: [],
  present: initialState,
  future: []
};

const updateState = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_NODE_COLOR':
      return {
        ...state,
        nodes: state.nodes.map(node =>
          node.id === action.payload.nodeId
            ? {
              ...node,
              data: { ...node.data, color: action.payload.color },
              style: { ...node.style, background: action.payload.color }
            }
            : node
        )
      };

    case 'UPDATE_NODE_FONT_SIZE':
      return {
        ...state,
        nodes: state.nodes.map(node =>
          node.id === action.payload.nodeId
            ? {
              ...node,
              data: { ...node.data, fontSize: action.payload.fontSize },
              style: { ...node.style, fontSize: `${action.payload.fontSize}px` }
            }
            : node
        )
      };

    case 'UPDATE_NODE_POSITION':
      return {
        ...state,
        nodes: state.nodes.map(node =>
          node.id === action.payload.nodeId
            ? { ...node, position: action.payload.position }
            : node
        )
      };

    case 'SELECT_NODE':
      return {
        ...state,
        selectedNode: action.payload
      };

    default:
      return state;
  }
};

export const reducer = (state: HistoryState = initialHistoryState, action: Action): HistoryState => {
  switch (action.type) {
    case 'UNDO':
      if (state.past.length === 0) return state;
      const previous = state.past[state.past.length - 1];
      const newPast = state.past.slice(0, -1);
      return {
        past: newPast,
        present: previous,
        future: [state.present, ...state.future]
      };

    case 'REDO':
      if (state.future.length === 0) return state;
      const next = state.future[0];
      const newFuture = state.future.slice(1);
      return {
        past: [...state.past, state.present],
        present: next,
        future: newFuture
      };

    default:
      const newPresent = updateState(state.present, action);
      if (newPresent === state.present) return state;
      return {
        past: [...state.past, state.present],
        present: newPresent,
        future: []
      };
  }
};