'use client';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal, Box, FormControl, FormLabel, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'black',
    overflow: 'scroll'
};
export default function FormComponent(props: any) {
    const {
        editableVariable,
        FormComponent,
        setOpenModal,
        openModal,
        onSubmit
    } = props;

    const handleClose = () => {
        setOpenModal(false);
    }

    return (
        <div>
            <Modal
            open={openModal}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Formik initialValues={
                    editableVariable
                }
                    onSubmit={onSubmit}
                >
                    {(props) => (
                        <Form>
                            <FormComponent />
                            <Button type='submit'>Submit</Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Modal>
        </div>
    )
}

FormComponent.propTypes = {
    editableVariable: PropTypes.object,
    FormComponent: PropTypes.func,
    onSubmit: PropTypes.func,
    openModal: PropTypes.bool,
    setOpenModal: PropTypes.any
}