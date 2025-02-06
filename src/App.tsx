import { Provider } from 'react-redux';
import { ReactFlowProvider } from '@xyflow/react';
import { store } from './store';
import GraphContainer from './components/GraphContainer';
import NodeCustomizationPanel from './components/NodeCustomizationPanel';
import UndoRedoControls from './components/UndoRedoControls';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ReactFlowProvider>
          <div className="h-screen flex">
            <div className="flex-1 relative">
              <p style={{ fontSize: '25px', fontWeight: 600, paddingLeft: "10px" }}>Node Graph Visualization</p>
              <GraphContainer />
              <div className="absolute top-4 right-4">
                <UndoRedoControls />
              </div>
            </div>
            <div className="w-80 bg-gray-50 p-4 border-l">
              <NodeCustomizationPanel />
            </div>
          </div>
        </ReactFlowProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;