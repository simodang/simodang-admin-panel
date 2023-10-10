'use client';

import { useState, useEffect } from 'react';
import { api } from "@/hooks/hooks-api";
import { Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import UpdateDevicePage from './update/page';
import AddDevicePage from './add/page';
import MetricDevicePage from './detail/page';

export default function MasterPage(props: { toggleTheme: React.MouseEventHandler<HTMLAnchorElement> }) {
    const [data, setData] = useState([]);
    const [openModalAdd, setOpenModalAdd] = useState(false);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);
    const [openModalDetail, setOpenModalDetail] = useState(false);
    const [masterUpdate, setMasterUpdate] = useState({});
    const [deviceDetail, setDeviceDetail] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/masters');
            setData(response.data);
        }
        fetchData();
    }, []);

    console.log(data);

    const handleOpenModalUpdate = (params: Object) => {
        setMasterUpdate(params);
        setOpenModalUpdate(true);
    }
    const handleOpenModalDetail = (params: any) => {
        setDeviceDetail(params.id);
        setOpenModalDetail(true);
    }

    const columns: GridColDef[] = [
        { field: 'userId', headerName: 'User ID', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'simNumber', headerName: 'Sim Number', width: 130},
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
            <Button onClick={addDevice} sx={{backgroundColor:'white', margin: '10px'}}>
                Add Master
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
            <UpdateDevicePage openModal={openModalUpdate} setOpenModal={setOpenModalUpdate} master={masterUpdate}/>
            <AddDevicePage openModal={openModalAdd} setOpenModal={setOpenModalAdd}/>
            <MetricDevicePage openModal={openModalDetail} setOpenModal={setOpenModalDetail} deviceId={deviceDetail}/>
        </div>
    )
}