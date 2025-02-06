import { Node, Edge, State } from '../types';

const generateInitialNodes = (): Node[] => {
  const nodes: Node[] = [];
  for (let i = 0; i < 10; i++) {
    nodes.push({
      id: `node-${i}`,
      type: 'default',
      position: { x: Math.random() * 500, y: Math.random() * 500 },
      data: {
        label: `Node ${i}`,
        color: '#ffffff',
        fontSize: 14
      },
      style: {
        background: '#ffffff',
        fontSize: '14px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
      }
    });
  }
  return nodes;
};

const generateInitialEdges = (): Edge[] => {
  const edges: Edge[] = [];
  for (let i = 0; i < 9; i++) {
    edges.push({
      id: `edge-${i}`,
      source: `node-${i}`,
      target: `node-${i + 1}`,
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#555' }
    });
  }
  return edges;
};

export const initialState: State = {
  nodes: generateInitialNodes(),
  edges: generateInitialEdges(),
  selectedNode: null
};