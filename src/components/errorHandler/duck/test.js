import reducer from "./reducers";
import types from "./types";

describe( "team reducer", () => {
    it( "should return the initial state", () => {
        expect( reducer( undefined, {} ) ).toEqual( { errors: [] } );
    } );

    it( "should handle ERROR", () => {
        expect( reducer( {}, { type: types.ERROR, payload: { message: "Test" } } ) ).toEqual( { errors: [ { message: "Test" } ]} );
    } );

    it( "should catch network errors", () => {
        // TEST SAGA
        expect( reducer( {}, { type: types.ERROR, payload: { message: "Test" } } ) ).toEqual( { errors: [ { message: "Test" } ]} );
    } );
} );
