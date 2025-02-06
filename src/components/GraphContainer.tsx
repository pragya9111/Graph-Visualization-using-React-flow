import React, { useCallback, useMemo } from 'react';
import {
  Background,
  Controls,
  Panel,
  BackgroundVariant,
  NodeChange,
  ReactFlow,
  useReactFlow,
} from '@xyflow/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types';
import { selectNode, updateNodePosition } from '../store/actions';
import '@xyflow/react/dist/style.css';

const GraphContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { nodes, edges } = useSelector((state: RootState) => state.graph.present);
  const { fitView } = useReactFlow();

  // Memoize nodes and edges to prevent unnecessary re-renders
  const memoizedNodes = useMemo(() => nodes, [nodes]);
  const memoizedEdges = useMemo(() => edges, [edges]);

  // Debounce node position updates
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      const positionChange: any = changes.find(change =>
        change.type === 'position' && change.position && change.dragging === false
      );
      if (positionChange && positionChange.position) {
        // Use requestAnimationFrame for smooth updates
        requestAnimationFrame(() => {
          dispatch(updateNodePosition(positionChange.id, positionChange.position!));
        });
      }
    },
    [dispatch]
  );

  const onNodeClick = useCallback(
    (_: any, node: { id: string; }) => {
      dispatch(selectNode(node.id));
    },
    [dispatch]
  );

  React.useEffect(() => {
    fitView({ duration: 800, padding: 0.2 });
  }, [fitView]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={memoizedNodes}
        edges={memoizedEdges}
        onNodesChange={onNodesChange}
        onNodeClick={onNodeClick}
        fitView
        proOptions={{ hideAttribution: true }}
        deleteKeyCode={null} // Disable delete key to prevent accidental node deletion
        multiSelectionKeyCode={null} // Disable multi-selection
      >
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        <Controls />
        <Panel position="bottom-left" className="bg-white p-2 rounded shadow-md">
          <p className="text-sm text-gray-600">
            Drag nodes to reposition • Click to customize
          </p>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default GraphContainer