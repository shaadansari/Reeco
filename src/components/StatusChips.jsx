import Chip from "@mui/material/Chip";

// eslint-disable-next-line react/prop-types
function StatusChips({status}) {
  return <Chip label="primary" color={status} />;
}

export default StatusChips;
