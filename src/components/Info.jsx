import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useTheme } from "@emotion/react";

const data = [
  { title: "Supplier", description: "East cost fruits and suppliers" },
  { title: "Shipping Date", description: "Thu, Feb 10" },
  { title: "Total", description: "$ 15,0552.3" },
  { title: "Category", description: "Fruits" },
  { title: "Department", description: "300-444-678" },
  { title: "Status", description: "Awaiting your approval" },
];

export default function Info() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <Card
        elevation={1}
        sx={{
          minWidth: 275,
          border: `1px solid ${theme.palette.grey[300]}`,
          width: { xs: "100%", md: "80%" },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            overflow: { xs: "scroll", md: "hidden" },
          }}
        >
          {data.map((d, i, a) => {
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <Box sx={{ marginRight: "15px" }}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {d?.title}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {d?.description}
                  </Typography>
                </Box>

                {i !== a.length - 1 && (
                  <Divider orientation="vertical" flexItem />
                )}
              </Box>
            );
          })}
        </CardContent>
      </Card>
    </Box>
  );
}
