import types from "./types";

const AUTHENTICATE = payload => ( { type: types.AUTHENTICATE, payload } );

export default {
    AUTHENTICATE,
};
