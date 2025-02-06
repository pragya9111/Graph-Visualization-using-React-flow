import React, { memo } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types';
import { updateNodeColor, updateNodeFontSize } from '../store/actions';

const NodeCustomizationPanel: React.FC = memo(() => {
  const dispatch = useDispatch();
  const selectedNode = useSelector((state: RootState) => state.graph.present.selectedNode);
  const nodes = useSelector((state: RootState) => state.graph.present.nodes);
  const selectedNodeData = nodes.find(node => node.id === selectedNode)?.data;

  if (!selectedNode || !selectedNodeData) {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <p className="text-gray-600">Select a node to customize its appearance</p>
        <div className="mt-4 p-4 bg-gray-50 rounded border border-gray-200">
          <ul className="text-sm text-gray-500 space-y-2">
            <li>• Click any node to select it</li>
            <li>• Modify colors and font size</li>
            <li>• Use undo/redo for changes</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Node Customization</h3>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Color</label>
        <HexColorPicker
          color={selectedNodeData.color}
          onChange={(color) => dispatch(updateNodeColor(selectedNode, color))}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Font Size: {selectedNodeData.fontSize}px
        </label>
        <input
          type="range"
          min="12"
          max="24"
          value={selectedNodeData.fontSize}
          onChange={(e) => dispatch(updateNodeFontSize(selectedNode, parseInt(e.target.value)))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>12px</span>
          <span>24px</span>
        </div>
      </div>

      <div className="pt-4 border-t">
        <p className="text-xs text-gray-500">
          Node ID: {selectedNode}
        </p>
      </div>
    </div>
  );
});

NodeCustomizationPanel.displayName = 'NodeCustomizationPanel';

export default NodeCustomizationPanel;