'use client';

import { useState, useEffect } from 'react';
import { Layout } from '@/components/dashboard/layout';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { RedirectType, redirect } from 'next/navigation';

export default function LogsPage() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://devel-filkomub.site/admin/log', {
                headers: {
                    Authorization: `Bearer ${localStorage['token']}`
                }
            });
            setLogs(response.data);
        }
        fetchData();
    },[]);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'scope', headerName: 'Scope', width: 130 },
        { field: 'summary', headerName: 'Summary', width: 150 },
        { field: 'createdAt', headerName: 'Created At', width: 200 },
    ]

    const rows: any[] = logs;

    return (
        <div>
            {
                localStorage['token'] ? (
                    <div>
                        <Layout></Layout>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            sx={{ backgroundColor: 'white', margin: '20px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10, 15, 20]}
                        />
                    </div>
                ) : redirect('/auth/login', RedirectType.push)
            }
        </div>
    )
}