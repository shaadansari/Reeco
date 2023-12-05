import Chip from "@mui/material/Chip";


// eslint-disable-next-line react/prop-types
function StatusChips({status, statusText}) {
  return <Chip label={statusText} color={status} />;
}

export default StatusChips;
