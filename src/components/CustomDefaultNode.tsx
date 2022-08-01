import { Handle, Position } from 'react-flow-renderer';
const handleStyleA = { left: 50 };

interface Props {
  data: {
    label: string
  }
}

const CustomDefaultNode = ({data}: Props) => (
  <div>
    <Handle type="target" position={Position.Left} />
    <Handle type="source" position={Position.Bottom} id="a" style={handleStyleA} />
    <div style={{textAlign: "center"}}>{`${data?.label}`}</div>
  </div>
);

export default CustomDefaultNode;
