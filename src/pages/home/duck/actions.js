import types from "./types";

const test = payload => ( { type: types.TEST, payload } );

export default {
    test,
};
