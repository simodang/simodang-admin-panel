'use client';
import { useState, useEffect } from 'react';
import { Modal, Box, Input, FormControl, FormLabel, Switch, Select, MenuItem } from '@mui/material';
import FormComponent from '@/components/forms/FormComponent';
import { Field } from 'formik';
import { api } from '@/hooks/hooks-api';
import axios from 'axios';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'black'
};

export default function UpdateMasterPage({ openModal, setOpenModal, master }: { openModal: boolean, setOpenModal: Function, master: any }) {
    const [users, setUsers] = useState([]);
    const editableVariable = master;

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('http://devel-filkomub.site/admin/users', {
                headers: {
                    Authorization: `Bearer ${localStorage['token']}`
                }
            }).then((response) => {
                setUsers(response.data);
            }).catch(err => console.log(err));
        }
        fetchData();
    }, []);

    const onSubmit = async (values: any) => {
        await api({
            url: `http://devel-filkomub.site/admin/masters/${master.id}`,
            method: 'patch',
            data: values,
            headers: {
                Authorization: `Bearer ${localStorage['token']}`
            }
        }).then((response) => {
            console.log(response);
        }).catch(err => console.log(err));
    }

    const formComponent = () => {
        return (
            <div>
                {/* <Field name="name">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>Name</FormLabel>
                            <Input {...field} placeholder="Name" />
                        </FormControl>
                    )}
                </Field> */}
                <Field name="userId">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>User</FormLabel>
                            <Select {...field} spacing={3}>
                                {
                                    users.map((user: any) => {
                                        return (
                                            <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
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
            openModal={openModal}
            setOpenModal={setOpenModal}
            onSubmit={onSubmit}
            editableVariable={editableVariable}
            FormComponent={formComponent}
        />
    )
}