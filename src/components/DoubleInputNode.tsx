import { Handle, Position } from 'react-flow-renderer';
const handleStyleB = { left: 150 };

interface Props {
  data: {
    label: string
  }
}

const DoubleInputNode = ({data}: Props) => (
  <div>
    <Handle type="source" position={Position.Right} id="a" />
    <Handle type="source" position={Position.Bottom} id="b" style={handleStyleB} />
    <div style={{textAlign: "center"}}>{`${data?.label}`}</div>
  </div>
);

export default DoubleInputNode;
