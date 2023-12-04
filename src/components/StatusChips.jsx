import Chip from "@mui/material/Chip";

const statusText = {success:"Approved", warning:"Missing - Urgent", info:"Missing"}

// eslint-disable-next-line react/prop-types
function StatusChips({status}) {
  return <Chip label={statusText[status]} color={status} />;
}

export default StatusChips;
