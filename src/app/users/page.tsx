'use client';

import { useState, useEffect } from 'react';
import { api } from "@/hooks/hooks-api";
import { Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export default function MasterPage(props: { toggleTheme: React.MouseEventHandler<HTMLAnchorElement> }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/users');
            setData(response.data);
        }
        fetchData();
    }, []);

    console.log(data);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'email', headerName: 'Email', width: 130},
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'phoneNum', headerName: 'Phone Number', width: 130},
        { field: 'address', headerName: 'Address', width: 130},
        { field: 'photo', headerName: 'Image', width: 130, renderCell: (params) => <img src={params.value}/>},
    ];

    const rows: any[] = data;

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                // sx={{ backgroundColor: 'white' }}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10, 15, 20]}
            />
        </div>
    )
}