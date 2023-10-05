import { useState, useEffect } from 'react';
import { api } from "@/hooks/hooks-api";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export default function DevicePage(){
    const [data, setData] = useState<{}[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            await api({
                method: 'get',
                url: '/devices'
            }).then((response) => {
                setData(response.data);
            }).catch(err => console.log(err));
        }
        fetchData();
    })

    return (
        <div>

        </div>
    )
}