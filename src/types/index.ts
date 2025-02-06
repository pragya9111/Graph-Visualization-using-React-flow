import { Node as ReactFlowNode, Edge as ReactFlowEdge } from '@xyflow/react';

export interface Node extends ReactFlowNode {
  data: {
    label: string;
    color: string;
    fontSize: number;
  };
}

export interface Edge extends ReactFlowEdge { }

export interface State {
  nodes: Node[];
  edges: Edge[];
  selectedNode: string | null;
}

export interface HistoryState {
  past: State[];
  present: State;
  future: State[];
}

export interface RootState {
  graph: HistoryState;
}

export type Action =
  | { type: 'UPDATE_NODE_COLOR'; payload: { nodeId: string; color: string } }
  | { type: 'UPDATE_NODE_FONT_SIZE'; payload: { nodeId: string; fontSize: number } }
  | { type: 'UPDATE_NODE_POSITION'; payload: { nodeId: string; position: { x: number; y: number } } }
  | { type: 'SELECT_NODE'; payload: string }
  | { type: 'UNDO' }
  | { type: 'REDO' };