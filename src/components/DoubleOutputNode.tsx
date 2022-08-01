import { Handle, Position } from 'react-flow-renderer';
const handleStyleA = { left: 50 };
const handleStyleB = { left: 150 };

interface Props {
  data: {
    label: string
  }
}

const DoubleOutputNode = ({data}: Props) => (
  <div>
    <Handle type="target" position={Position.Top} id="a" style={handleStyleA} />
    <Handle type="target" position={Position.Top} id="b" style={handleStyleB} />
    <div style={{textAlign: "center"}}>{`${data?.label}`}</div>
  </div>
)

export default DoubleOutputNode;