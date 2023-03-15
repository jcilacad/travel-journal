import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import * as React from "react";

export default function InteractiveCard(props) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: "31.25rem",
        gap: 2,
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
        my: "3rem",
        mx: "2rem",
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 1000 }}>
        <img src={props.data.image} loading="lazy" alt="" />
      </AspectRatio>
      <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          {props.data.title}
        </Typography>

        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href={props.data.googleMapsUrl}
            sx={{ color: "text.tertiary" }}
          >
            {props.data.location}
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: "none" }}
        >
          {props.data.startDate} - {props.data.endDate}
        </Chip>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href={props.data.googleMapsUrl}
            sx={{ color: "text.tertiary" }}
          >
            {props.data.description}
          </Link>
        </Typography>
      </div>
    </Card>
  );
}
