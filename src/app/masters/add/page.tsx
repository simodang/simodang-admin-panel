'use client';
import { useState, useEffect } from 'react';
import { Input, FormControl, FormLabel, Switch, Select, MenuItem } from '@mui/material';
import FormComponent from '@/components/forms/FormComponent';
import { Field } from 'formik';
import { api } from '@/hooks/hooks-api';

export default function AddMasterPage({openModal, setOpenModal}: {openModal: boolean, setOpenModal:Function}){

    const [users, setUsers] = useState([]);
    const [masters, setMasters] = useState([]);
    const editableVariable = {
        id: '',
        name: '',
        userId: '',
        simNumber: '',
    };

    useEffect(() => {
        const fetchData = async () => {
            await api.get('/users').then((response) => {
                setUsers(response.data);
            }).catch(err => console.log(err));
        }
        fetchData();
    },[]);

    const onSubmit = async (values:any) => {
        await api({
            url:`/masters`,
            method: 'post',
            data: values
        }).then((response) => {
            console.log(response);
        }).catch(err => console.log(err));
    }

    const formComponent = () => {
        return (
            <div>
                <Field name="id">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>ID</FormLabel>
                            <Input {...field} placeholder="ID" />
                        </FormControl>
                    )}
                </Field>
                <Field name="name">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>Name</FormLabel>
                            <Input {...field} placeholder="Name" />
                        </FormControl>
                    )}
                </Field>
                <Field name="userId">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>User</FormLabel>
                            <Select {...field} spacing={3}>
                                {
                                    users.map((user: any) => {
                                        return (
                                            <MenuItem value={user.id}>{user.name}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    )}
                </Field>
                <Field name="simNumber">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>Name</FormLabel>
                            <Input {...field} placeholder="Sim Number" />
                        </FormControl>
                    )}
                </Field>
            </div>
        )
    }
    return(
        <FormComponent
            editableVariable={editableVariable}
            onSubmit={onSubmit}
            openModal={openModal}
            setOpenModal={setOpenModal}
            FormComponent={formComponent}
        />
    )
}