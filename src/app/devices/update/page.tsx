'use client';
import { useState, useEffect } from 'react';
import { Modal, Box, Input, FormControl, FormLabel, Switch, Select, Stack } from '@mui/material';
import FormComponent from '@/components/forms/FormComponent';
import { Field } from 'formik';
import { api } from '@/hooks/hooks-api';

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
    color:'black'
  };

export default function UpdateDevicePage({ openModal, setOpenModal, device }: { openModal: boolean, setOpenModal: Function, device:any }) {
    const [users, setUsers] = useState([]);
    const [masters, setMasters] = useState([]);
    const editableVariable = device;

    const onSubmit = async (values:any) => {
        await api({
            url:`/devices/${device.id}`,
            method: 'patch',
            data: values
        }).then((response) => {
            console.log(response);
        }).catch(err => console.log(err));
    }

    const selectItemUser = () => {
        useEffect(() => {
            const fetchData = async () => {
                const response = await api.get('/users');
                setUsers(response.data);
            }
            fetchData();
        }, []);
    }

    const selectItemMaster = () => {
        useEffect(() => {
            const fetchData = async () => {
                const response = await api.get('/masters');
                setMasters(response.data);
            }
            fetchData();
        }, []);
    }

    const formComponent = () => {
        return(
            <div>
                <Field name="name">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>Name</FormLabel>
                            <Input {...field} placeholder="Name" />
                        </FormControl>
                    )}
                </Field>
                <Field name="notificationEnabled">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>Notification Enabled</FormLabel>
                            <Switch {...field} placeholder="Notification Enabled" onChange={(event) => {
                                console.log(field);
                                if (event.target.checked === true) {
                                    field.value = 1;
                                } else {
                                    field.value = 0;
                                }
                            }} />
                        </FormControl>
                    )}
                </Field>
                {/* <Field name="notificationCount">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Notification Count</FormLabel>
                            <Input {...field} placeholder="Notification Count" />
                        </FormControl>
                    )}
                </Field> */}
                <Field name="isSaved">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>Saved</FormLabel>
                            <Switch {...field} onChange={(event) => {
                                if (event.target.checked === true) {
                                    field.value = 1;
                                } else {
                                    field.value = 0;
                                }
                            }} />
                        </FormControl>
                    )}
                </Field>
                {/* <Field name="isChanged">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Changed</FormLabel>
                            <Switch {...field} onChange={(event) => {
                                if (event.target.checked === true) {
                                    field.value = 1;
                                } else {
                                    field.value= 0;
                                }
                            }} />
                        </FormControl>
                    )}
                </Field> */}
                <Field name="autoWaterEnabled">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>Auto Water</FormLabel>
                            <Switch {...field} onChange={(event) => {
                                if (event.target.checked === true) {
                                    field.value = 1;
                                } else {
                                    field.value = 0;
                                }
                            }} />
                        </FormControl>
                    )}
                </Field>
                <Field name="tempLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>Temp Low</FormLabel>
                            <Input {...field} placeholder="Temp Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tempLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>Temp Low</FormLabel>
                            <Input {...field} placeholder="Temp Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tempHigh">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>Temp High</FormLabel>
                            <Input {...field} placeholder="Temp High" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="phLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>pH Low</FormLabel>
                            <Input {...field} placeholder="pH Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="phHigh" >
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>pH High</FormLabel>
                            <Input {...field} placeholder="pH High" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tdoLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>TDO Low</FormLabel>
                            <Input {...field} placeholder="TDO Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tdoHigh">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>TDO High</FormLabel>
                            <Input {...field} placeholder="TDO High" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tdsLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>TDS Low</FormLabel>
                            <Input {...field} placeholder="TDS Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tdsHigh">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>TDS High</FormLabel>
                            <Input {...field} placeholder="TDS High" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="turbiditiesLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>Turbidities Low</FormLabel>
                            <Input {...field} placeholder="Turbidities Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="turbiditiesHigh">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>Turbidities High</FormLabel>
                            <Input {...field} placeholder="Turbidities High" type="number" />
                        </FormControl>
                    )}
                </Field>
                {/* <Field name="userId">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>User</FormLabel>
                            <Stack {...field} spacing={3} onChange={selectItemUser}>
                                {
                                    users.map((user: any) => {
                                        return (
                                            <Select value={user.id}>{user.name}</Select>
                                        )
                                    })
                                }
                            </Stack>
                        </FormControl>
                    )}
                </Field>
                <Field name="masterId">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl>
                            <FormLabel>Master</FormLabel>
                            <Stack {...field} spacing={3} onChange={selectItemMaster}>
                                {
                                    masters.map((master: any) => {
                                        return (
                                            <Select value={master.id}>{master.name}</Select>
                                        )
                                    })
                                }
                            </Stack>
                        </FormControl>
                    )}
                </Field> */}
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