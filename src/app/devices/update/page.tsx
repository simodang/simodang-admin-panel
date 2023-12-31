'use client';
import { useState, useEffect } from 'react';
import { Input, FormControl, FormLabel, Switch, Select, MenuItem } from '@mui/material';
import FormComponent from '@/components/forms/FormComponent';
import { Field } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/navigation';


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

export default function UpdateDevicePage({ openModal, setOpenModal, device }: { openModal: boolean, setOpenModal: Function, device: any }) {
    const [users, setUsers] = useState([]);
    const [masters, setMasters] = useState([]);
    const router = useRouter();
    const editableVariable = {
        name: device.name,
        userId: device.userId,
        masterId: device.masterId,
        notificationEnabled: device.notificationEnabled,
        autoWaterEnabled: device.autoWaterEnabled,
        autoFeedEnabled: device.autoFeedEnabled,
        isSaved: device.isSaved,
        tempLow: Number(device.tempLow),
        tempHigh: Number(device.tempHigh),
        phLow: Number(device.phLow),
        phHigh: Number(device.phHigh),
        tdoLow: Number(device.tdoLow),
        tdoHigh: Number(device.tdoHigh),
        tdsLow: Number(device.tdsLow),
        tdsHigh: Number(device.tdsHigh),
        turbiditiesLow: Number(device.turbiditiesLow),
        turbiditiesHigh: Number(device.turbiditiesHigh),
      };

      console.log(editableVariable);
    //   console.log(autoWaterEnabled);

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
            url: `http://devel-filkomub.site/admin/devices/${device.id}`,
            method: 'patch',
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
                <Field name="name">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Name</FormLabel>
                            <Input {...field} placeholder="Name" />
                        </FormControl>
                    )}
                </Field>
                <Field name="notificationEnabled">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Notification Enabled</FormLabel>
                            <Switch {...field} defaultChecked={device.notificationEnabled} />
                        </FormControl>
                    )}
                </Field>
                <Field name="isSaved">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Saved</FormLabel>
                            <Switch {...field} defaultChecked={device.isSaved} />
                        </FormControl>
                    )}
                </Field>
                <Field name="autoWaterEnabled">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Auto Water</FormLabel>
                            <Switch {...field} defaultChecked={device.autoWaterEnabled} />
                        </FormControl>
                    )}
                </Field>
                <Field name="autoFeedEnabled">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Auto Feed</FormLabel>
                            <Switch {...field} defaultChecked={device.autoFeedEnabled}/>
                        </FormControl>
                    )}
                </Field>
                <Field name="tempLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Temp Low</FormLabel>
                            <Input {...field} placeholder="Temp Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tempLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Temp Low</FormLabel>
                            <Input {...field} placeholder="Temp Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tempHigh">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Temp High</FormLabel>
                            <Input {...field} placeholder="Temp High" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="phLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>pH Low</FormLabel>
                            <Input {...field} placeholder="pH Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="phHigh" >
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>pH High</FormLabel>
                            <Input {...field} placeholder="pH High" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tdoLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>TDO Low</FormLabel>
                            <Input {...field} placeholder="TDO Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tdoHigh">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>TDO High</FormLabel>
                            <Input {...field} placeholder="TDO High" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tdsLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>TDS Low</FormLabel>
                            <Input {...field} placeholder="TDS Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="tdsHigh">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>TDS High</FormLabel>
                            <Input {...field} placeholder="TDS High" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="turbiditiesLow">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Turbidities Low</FormLabel>
                            <Input {...field} placeholder="Turbidities Low" type="number" />
                        </FormControl>
                    )}
                </Field>
                <Field name="turbiditiesHigh">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Turbidities High</FormLabel>
                            <Input {...field} placeholder="Turbidities High" type="number" />
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
                                            <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
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
                                            <MenuItem key={master.id} value={master.id}>{master.name}</MenuItem>
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