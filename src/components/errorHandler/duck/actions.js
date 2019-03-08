import types from "./types";

const init = payload => ( { type: types.INIT, payload } );
const createError = payload => ( { type: types.ERROR, payload } );

export default {
    init,
    createError,
};
