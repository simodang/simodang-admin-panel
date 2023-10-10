'use client';
import { useState, useEffect } from 'react';
import { Input, FormControl, FormLabel, Switch, Select, MenuItem } from '@mui/material';
import FormComponent from '@/components/forms/FormComponent';
import { Field } from 'formik';
import { api } from '@/hooks/hooks-api';

export default function AddArticlePage({openModal, setOpenModal}: {openModal: boolean, setOpenModal:Function}){

    const editableVariable = {
        title: '',
        url: '',
        image: '',
    };

    const onSubmit = async (values:any) => {
        await api({
            url:`/articles`,
            method: 'post',
            data: values
        }).then((response) => {
            console.log(response);
        }).catch(err => console.log(err));
    }

    const formComponent = () => {
        return (
            <div>
                <Field name="title">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>Title</FormLabel>
                            <Input {...field} placeholder="Title" />
                        </FormControl>
                    )}
                </Field>
                <Field name="url">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>URL</FormLabel>
                            <Input {...field} placeholder="URL" />
                        </FormControl>
                    )}
                </Field>
                <Field name="image">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{margin: '10px'}}>
                            <FormLabel>Image</FormLabel>
                            <Input {...field} type='file' accept="image/png, image/jpeg" placeholder="" />
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