import types from "./types";

const init = payload => ( { type: types.INIT, payload } );

export default {
    init,
};
