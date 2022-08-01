import {MarkerType} from 'react-flow-renderer';
import {
  CustomDefaultNode,
  DoubleInputNode,
  DoubleOutputNode
} from './components';

const nodeStyle = { width: 200, height: 100, paddingTop: 35, fontSize: 20, color: 'white', backgroundColor: 'black', border:'1px solid white', textAling: "center" };

export const nodeTypes = {
  customDefault: CustomDefaultNode,
  doubleInput: DoubleInputNode,
  doubleOutput: DoubleOutputNode
}

export const initialNodes = [
  {
    id: '1',
    type: 'doubleInput',
    data: { label: 'Element A' },
    position: { x: 150, y: 50 },
    style: nodeStyle
  },
  {
    id: '2',
    type: 'customDefault',
    data: { label: 'Element B'},
    position: { x: 450, y: 50 },
    style: nodeStyle
  },
  {
    id: '3',
    type: 'doubleOutput',
    data: { label: 'Element C'},
    position: { x: 300, y: 300 },
    style: nodeStyle
  },
];

export const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', sourceHandle: 'a', type: 'straight', style: {strokeWidth: 3}, markerEnd: {type: MarkerType.Arrow} },
  { id: 'e1-3', source: '1', target: '3', sourceHandle: 'b', type: 'straight', style: {strokeWidth: 3}, markerEnd: {type: MarkerType.Arrow} },
  { id: 'e2-3', source: '2', target: '3', targetHandle: 'b', type: 'straight', style: {strokeWidth: 3}, markerEnd: {type: MarkerType.Arrow} }
];
