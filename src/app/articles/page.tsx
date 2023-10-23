'use client';
import { useState, useEffect } from 'react';
import { api } from "@/hooks/hooks-api";
import { Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import UpdateArticlePage from './update/page';
import AddArticlePage from './add/page';
import axios from 'axios';
import { Layout } from '@/components/dashboard/layout';
import { redirect } from 'next/navigation';

export default function MasterPage(props: { toggleTheme: React.MouseEventHandler<HTMLAnchorElement> }) {
    const [data, setData] = useState([]);
    const [openModalAdd, setOpenModalAdd] = useState(false);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);
    const [articleUpdate, setArticleUpdate] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://devel-filkomub.site/admin/articles', {
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
        setArticleUpdate(params);
        setOpenModalUpdate(true);
    }

    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'url', headerName: 'URL', width: 300 },
        { field: 'image', headerName: 'Image', width: 130, renderCell: (params) => <img src={params.value} /> },
        { field: 'published', headerName: 'Published', type: 'boolean', width: 130 },
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
    ];

    const addArticle = () => {
        setOpenModalAdd(true);
    };

    const rows: any[] = data;

    return (
        <div style={{ height: '100%', width: '100%' }}>
            {
                localStorage['token'] ? (
                    <div>
                        <Layout></Layout>
                        <Button onClick={addArticle} sx={{ backgroundColor: 'white', margin: '10px 20px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            Add Article
                        </Button>
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
                        <UpdateArticlePage openModal={openModalUpdate} setOpenModal={setOpenModalUpdate} article={articleUpdate} />
                        <AddArticlePage openModal={openModalAdd} setOpenModal={setOpenModalAdd} />
                    </div>
                ) : (
                    redirect('/auth/login')
                )
            }
        </div>
    )
}