'use client';

import { useState, useEffect } from 'react';
import { Box, Button, Modal } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { api } from '@/hooks/hooks-api';
import moment from 'moment-timezone';
import axios from 'axios';

dayjs.extend(utc);
dayjs.extend(timezone);

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '55%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'black',
    overflow: 'scroll'
};

export default function MetricDevicePage({ deviceId, openModal, setOpenModal }: { deviceId: String, openModal: boolean, setOpenModal: Function }) {
    const [date, setDate] = useState('');
    const [data, setData] = useState([]);
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'temperature', headerName: 'Temperature', type: 'number', width: 80 },
        { field: 'ph', headerName: 'pH', type: 'number', width: 70 },
        { field: 'tdo', headerName: 'TDO', type: 'number', width: 70 },
        { field: 'tds', headerName: 'TDS', type: 'number', width: 70 },
        { field: 'turbidity', headerName: 'Turbidity', type: 'number', width: 80 },
        { field: 'deviceId', headerName: 'Device ID', width: 80 },
    ]
    const onSubmit = async () => {
        await axios.get(`http://devel-filkomub.site/admin/metrics/device/${deviceId}`, {
            params: {
                timeString: date,
                hours: 1
            },
            headers: {
                Authorization: `Bearer ${localStorage['token']}`
            }
        }).then(response => { console.log(response); setData(response.data) }).catch(err => console.log(err));
    }
    const rows: any[] = data;

    // console.log(date.toISOString());

    return (
        <div>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Box sx={style}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker sx={{ margin: '10px' }} onChange={(event: any) => { setDate(moment.utc(event.$d, 'Asia/Bangkok').format()) }} />
                    </LocalizationProvider>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        sx={{ backgroundColor: 'white' }}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10, 15, 20]}
                    />
                    <Button onClick={onSubmit}>Get Data</Button>
                </Box>
            </Modal>
        </div>
    )
}
