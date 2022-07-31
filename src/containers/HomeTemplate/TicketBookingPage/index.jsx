import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Material UI
import { Box, Container, Grid } from "@mui/material";

// Components
import TicketBookingCard from "./TicketBookingCard";
import SeatSelector from "./SeatSelector";

// Redux actions
import actGetTicketBookingDetails from "@/store/actions/ticketBooking";

// Scss
import "./style.scss";

const TicketBookingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetTicketBookingDetails(40324));
  }, []);

  return (
    <Box className="ticket-booking-page" component="section">
      <Container maxWidth={false} sx={{ maxWidth: "90%" }}>
        <Grid container spacing={7} columns={12}>
          <Grid item md={8} xs={12}>
            <SeatSelector />
          </Grid>
          <Grid item md={4} xs={12}>
            <TicketBookingCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TicketBookingPage;
