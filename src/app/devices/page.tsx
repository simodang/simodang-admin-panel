'use client';

import { useState, useEffect } from 'react';
import { api } from "@/hooks/hooks-api";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export default function DevicePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/devices');
            setData(response.data);
        }
        fetchData();
    }, []);

    console.log(data);

    const columns: GridColDef[] = [
        // {field: 'id', headerName: 'ID', width: 130},
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'notificationEnabled', type: 'boolean', headerName: 'Notification Enabled', width: 130 },
        // {field: 'notificationCount', type: 'boolean', headerName: 'Notification Count', width: 70},
        { field: 'isSaved', type: 'boolean', headerName: 'Saved', width: 130 },
        // {field: 'isChanged', type: 'boolean', headerName: 'Changed', width: 70},
        { field: 'autoWaterEnabled', type: 'boolean', headerName: 'Auto Water Enabled', width: 130 },
        { field: 'autoFeedEnabled', type: 'boolean', headerName: 'Auto Feed Enabled', width: 130 },
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
        { field: 'userId', headerName: 'User ID', width: 130 },
        { field: 'masterId', headerName: 'Master ID', width: 130 },
    ]

    const rows: any[] = data;

    return (
        <div style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
    )
}