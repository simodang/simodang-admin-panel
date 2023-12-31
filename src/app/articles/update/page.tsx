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

export default function UpdateArticlePage({ openModal, setOpenModal, article }: { openModal: boolean, setOpenModal: Function, article: any }) {
    const editableVariable = article;

    const onSubmit = async (values: any) => {
        console.log(values);
        await axios({
            url: `http://devel-filkomub.site/admin/articles/${article.id}`,
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
                <Field name="title">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Title</FormLabel>
                            <Input {...field} placeholder="Title" />
                        </FormControl>
                    )}
                </Field>
                <Field name="url">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>URL</FormLabel>
                            <Input {...field} placeholder="URL" />
                        </FormControl>
                    )}
                </Field>
                <Field name="image">
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Image</FormLabel>
                            <Input {...field} placeholder="Image URL" />
                        </FormControl>
                    )}
                </Field>
                <Field name="published" components={Switch}>
                    {({ field, form }: { field: any, form: any }) => (
                        <FormControl sx={{ margin: '10px' }}>
                            <FormLabel>Published</FormLabel>
                            <Switch {...field} defaultChecked={article.published} />
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