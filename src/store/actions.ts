import { Action } from '../types';

export const updateNodeColor = (nodeId: string, color: string): Action => ({
  type: 'UPDATE_NODE_COLOR',
  payload: { nodeId, color }
});

export const updateNodeFontSize = (nodeId: string, fontSize: number): Action => ({
  type: 'UPDATE_NODE_FONT_SIZE',
  payload: { nodeId, fontSize }
});

export const updateNodePosition = (
  nodeId: string,
  position: { x: number; y: number }
)
  : Action => ({
    type: 'UPDATE_NODE_POSITION',
    payload: { nodeId, position }
  });

export const selectNode = (nodeId: string): Action => ({
  type: 'SELECT_NODE',
  payload: nodeId
});

export const undo = (): Action => ({
  type: 'UNDO'
});

export const redo = (): Action => ({
  type: 'REDO'
});