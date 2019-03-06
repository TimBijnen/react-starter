import types from "./types";

const authenticate = payload => ( { type: types.AUTHENTICATE, payload } );

const init = payload => ( { type: types.INIT, payload } );

export default {
    authenticate,
    init,
};
