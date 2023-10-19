'use client';

import { useState, useEffect } from 'react';
import { api } from "@/hooks/hooks-api";
import { Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import UpdateDevicePage from './update/page';
import AddDevicePage from './add/page';
import MetricDevicePage from './detail/page';
import axios from 'axios';
import { Layout } from '@/components/dashboard/layout';

export default function DevicePage(props: { toggleTheme: React.MouseEventHandler<HTMLAnchorElement> }) {
    const [data, setData] = useState([]);
    const [openModalAdd, setOpenModalAdd] = useState(false);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);
    const [openModalDetail, setOpenModalDetail] = useState(false);
    const [deviceUpdate, setDeviceUpdate] = useState({});
    const [deviceDetail, setDeviceDetail] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://devel-filkomub.site/admin/devices', {
                headers: {
                    Authorization: `Bearer ${localStorage['token']}`
                }
            });
            setData(response.data);
        }
        fetchData();
    }, []);

    console.log(data);

    const handleOpenModalUpdate = (params: Object) => {
        setDeviceUpdate(params);
        setOpenModalUpdate(true);
    }
    const handleOpenModalDetail = (params: any) => {
        setDeviceDetail(params.id);
        setOpenModalDetail(true);
    }

    const columns: GridColDef[] = [
        { field: 'userId', headerName: 'User ID', width: 130 },
        { field: 'masterId', headerName: 'Master ID', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'notificationEnabled', type: 'boolean', headerName: 'Notification Enabled', width: 150 },
        { field: 'isSaved', type: 'boolean', headerName: 'Saved', width: 130 },
        { field: 'autoWaterEnabled', type: 'boolean', headerName: 'Auto Water Enabled', width: 150 },
        { field: 'autoFeedEnabled', type: 'boolean', headerName: 'Auto Feed Enabled', width: 150 },
        { field: 'tempLow', type: 'number', headerName: 'Temperature Low', width: 130 },
        { field: 'tempHigh', type: 'number', headerName: 'Temperature High', width: 130 },
        { field: 'phLow', type: 'number', headerName: 'pH Low', width: 130 },
        { field: 'phHigh', type: 'number', headerName: 'pH High', width: 130 },
        { field: 'tdoLow', type: 'number', headerName: 'TDO Low', width: 130 },
        { field: 'tdoHigh', type: 'number', headerName: 'TDO High', width: 130 },
        { field: 'tdsLow', type: 'number', headerName: 'TDS Low', width: 130 },
        { field: 'tdsHigh', type: 'number', headerName: 'TDS High', width: 130 },
        { field: 'turbiditiesLow', type: 'number', headerName: 'Turbidities Low', width: 130 },
        { field: 'turbiditiesHigh', type: 'number', headerName: 'Turbidities High', width: 130 },
        {
            field: "update",
            headerName: "Update",
            sortable: false,
            renderCell: (params) => {
                const onClick = () => {
                    // console.log(params.row);
                    handleOpenModalUpdate(params.row);
                };
                return <Button onClick={onClick}>Update</Button>;
            }
        },
        {
            field: "detail",
            headerName: "Detail",
            sortable: false,
            renderCell: (params) => {
                const onClick = () => {
                    // console.log(params.row);
                    handleOpenModalDetail(params.row);
                };
                return <Button onClick={onClick}>Detail</Button>;
            }
        },
    ];

    const addDevice = () => {
        setOpenModalAdd(true);
    };

    const rows: any[] = data;

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <Layout></Layout>
            <Button onClick={addDevice} sx={{ backgroundColor: 'white', margin: '10px' }}>
                Add Device
            </Button>
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
            <UpdateDevicePage openModal={openModalUpdate} setOpenModal={setOpenModalUpdate} device={deviceUpdate} />
            <AddDevicePage openModal={openModalAdd} setOpenModal={setOpenModalAdd} />
            <MetricDevicePage openModal={openModalDetail} setOpenModal={setOpenModalDetail} deviceId={deviceDetail} />
        </div>
    )
}