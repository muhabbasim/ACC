// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';
import { format } from 'date-fns';
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  IconButton,
  Chip,
  Stack,
  Avatar,
  Tooltip,
  TextField,
  Pagination,
  useTheme,
  TableContainer,
  Divider,
} from '@mui/material';
import { IconEye } from '@tabler/icons-react';
import { TicketType } from 'src/types/apps/ticket';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'src/store/Store';
import { SearchRequest, fetchRequests, fetchRequest } from 'src/store/apps/requests/RequeststSlice';

type RequestProps = {
  AgentName: string;
  Date: string;
  Id: number
  Label: string;
  Status: string;
  thumb: string;
  ticketDescription:string;
  ticketTitle: string;
}

type RequestsProps = {
  request: RequestProps[]
}

const RequestListing = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchRequests());
  }, [dispatch]);

  
  
  const getVisibleTickets = (tickets: TicketType[], filter: string, ticketSearch: string) => {
    switch (filter) {
      case 'total_requests':
        return tickets.filter(
          (c) => !c.deleted && c.ticketTitle.toLocaleLowerCase().includes(ticketSearch),
        );

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };

  const requests: RequestsProps | any = useSelector((state) => 
    getVisibleTickets(
      state.requestReducer.requests,
      state.requestReducer.currentFilter,
      state.requestReducer.requestSearch,
  ));
  

  const ticketBadge = (ticket: RequestProps) => {
    return ticket.Status === 'Open'
      ? theme.palette.success.light
      : ticket.Status === 'Closed'
        ? theme.palette.error.light
        : ticket.Status === 'Pending'
          ? theme.palette.warning.light
          : ticket.Status === 'Moderate'
            ? theme.palette.primary.light
            : 'primary';
  };

  return (
    <Box mt={4}>
      <Box sx={{ maxWidth: '260px'}} mb={3}>
        <TextField
          size="small"
          label="Search"
          fullWidth
          onChange={(e) => dispatch(SearchRequest(e.target.value))}
        />
      </Box>
      <Divider style={{marginBottom: 20}}/>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Id</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Ticket</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Assigned To</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Status</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Date</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((ticket: RequestProps) => (
              <TableRow key={ticket.Id} hover>
                <TableCell>{ticket.Id}</TableCell>
                <TableCell>
                  <Box>
                    <Typography variant="h6" fontWeight={600} noWrap>
                      {ticket.ticketTitle}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      noWrap
                      sx={{ maxWidth: '250px' }}
                      variant="subtitle2"
                      fontWeight={400}
                    >
                      {ticket.ticketDescription}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Stack direction="row" gap="10px" alignItems="center">
                    <Avatar
                      src={ticket.thumb}
                      alt={ticket.thumb}
                      sx={{
                        borderRadius: '100%',
                        width: '35',
                      }}
                    />
                    <Typography variant="h6">{ticket.AgentName}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      backgroundColor: ticketBadge(ticket),
                    }}
                    size="small"
                    label={ticket.Status}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">
                    {format(new Date(ticket.Date), 'E, MMM d')}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Request details">
                    <IconButton 
                      component={Link}
                      to={`/requests/req_detail/${ticket.Id}`}
                      onClick={() => dispatch(fetchRequest(ticket.Id))}
                    >
                      <IconEye/>
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box my={3} display="flex" justifyContent={'center'}>
        <Pagination count={5} color="primary" />
      </Box>
    </Box>
  );
};

export default RequestListing;
