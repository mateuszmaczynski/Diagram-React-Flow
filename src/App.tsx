import React from 'react';
import ReactFlow from 'react-flow-renderer';
import {initialEdges, initialNodes, nodeTypes} from './utils';
import './App.css';

function App() {
  // const [nodes, setNodes] = useState(initialNodes);
  // const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="App">
      <div className="App-diagram">
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          onNodeClick={(event, node) =>  alert(`Click node with label: ${node?.data?.label}`)}
          fitView
        />
      </div>
    </div>
  );
}

export default App;
