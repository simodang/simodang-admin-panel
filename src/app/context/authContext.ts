import { createContext, useContext, useEffect, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';

const HANDLERS = {
    INITIALIZE: 'INITIALIZE',
    SIGN_IN: 'SIGN_IN',
    SIGN_OUT: 'SIGN_OUT',
}

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null
}

const handlers = {
    [HANDLERS.INITIALIZE]: ({state, action}:{state: any, action: any}) => {
        const user = action.load;

        return{
            ...state,
            ...(
                user
                ? ({
                    isAuthenticated: true,
                    isLoading: false,
                    user
                })
                : ({
                    isLoading: false
                })
            )
        }
    },
    [HANDLERS.SIGN_IN]: ({state, action}:{state: any, action: any}) => {
        const user = action.payload;

        return {
            ...state,
            isAuthenticate: true,
            user
        };
    },
    [HANDLERS.SIGN_OUT]:  ({state}:{state: any}) => {
        return {
            ...state,
            isAuthenticated: false,
            user: null
        };
    }
}

const reducer = ({state, action}:{state: any, action: any}) => {
    handlers[action.type] ? handlers[action.type](action) : (state);
}