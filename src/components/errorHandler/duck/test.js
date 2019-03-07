import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import reducer from "./reducers";
import types from "./types";
import { errorWatcher } from "./sagas";

const mock = new MockAdapter( axios );
mock.onGet( "/404" ).reply( 404 );

describe( "team reducer", () => {
    it( "should return the initial state", () => {
        expect( reducer( undefined, {} ) ).toEqual( { errors: [] } );
    } );

    it( "should handle ERROR", () => {
        expect( reducer( {}, { type: types.ERROR, payload: { message: "Test" } } ) ).toEqual( { errors: [ { message: "Test" } ] } );
    } );

    it( "should catch network errors", async () => {
        const channel = errorWatcher();
        await axios.get( "/404" );
        channel.take( result => expect( result.error.message ).toEqual( "Request failed with status code 404" ) );
    } );
} );
