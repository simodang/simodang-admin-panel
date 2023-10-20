'use client';
import { useState, useEffect } from 'react';
import { Input, FormControl, FormLabel, Switch, Select, MenuItem } from '@mui/material';
import FormComponent from '@/components/forms/FormComponent';
import { Field } from 'formik';
import { api } from '@/hooks/hooks-api';
import axios from 'axios';

export default function AddDevicePage({ openModal, setOpenModal }: { openModal: boolean, setOpenModal: Function }) {

    const [users, setUsers] = useState([]);
    const [masters, setMasters] = useState([]);
    const editableVariable = {
        id: '',
        name: '',
        userId: '',
        masterId: '',
    };

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('http://devel-filkomub.site/admin/users', {
                headers: {
                    Authorization: `Bearer ${localStorage['token']}`
                }
            }).then((response) => {
                setUsers(response.data);
            }).catch(err => console.log(err));
            await axios.get('http://devel-filkomub.site/admin/masters', {
                headers: {
                    Authorization: `Bearer ${localStorage['token']}`
                }
            }).then((response) => {
                setMasters(response.data);
            }).catch(err => console.log(err));
        }
        fetchData();
    }, []);

    const onSubmit = async (values: any) => {
        await axios({
            url: `http://devel-filkomub.site/admin/devices`,
            method: 'post',
            data: values,
            headers: {
                Authorization: `Bearer ${localStorage['token']}`
            }
        }).then((response) => {
            console.log(response);
            location.reload();
        }).catch(err => console.log(err));
    }

    const formComponent = () => {
        return (
            <div>
                <Field name="id">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>ID</FormLabel>
                            <Input {...field} placeholder="ID" />
                        </FormControl>
                    )}
                </Field>
                <Field name="name">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Name</FormLabel>
                            <Input {...field} placeholder="Name" />
                        </FormControl>
                    )}
                </Field>
                <Field name="userId">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
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
                <Field name="masterId">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Master</FormLabel>
                            <Select {...field} spacing={3}>
                                {
                                    masters.map((master: any) => {
                                        return (
                                            <MenuItem value={master.id}>{master.name}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    )}
                </Field>
            </div>
        )
    }
    return (
        <FormComponent
            editableVariable={editableVariable}
            onSubmit={onSubmit}
            openModal={openModal}
            setOpenModal={setOpenModal}
            FormComponent={formComponent}
        />
    )
}