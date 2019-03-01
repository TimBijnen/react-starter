import { put } from "redux-saga/effects";
import { actions as authenticationActions } from "common/authentication/duck";
import reducers from "./reducers";
import actions from "./actions";

const { showError, hideError } = actions;

const { invalidateSession } = authenticationActions;

describe( __filename, () => {
    describe( "REDUCERS", () => {
        let state;

        it( "can show and clear errors", () => {
            state = {};
            state = reducers( state, showError( { message: "TEST" } ) );
            expect( state.errors.length ).toBe( 1 );
            state = reducers( state, hideError( state.errors[ 0 ] ) );
            expect( state.errors.length ).toBe( 0 );
            state = reducers( state, showError( { message: "TEST__1" } ) );
            state = reducers( state, showError( { message: "TEST__2" } ) );
            expect( state.errors.length ).toBe( 2 );
            state = reducers( state, showError( { message: "TEST__3" } ) );
            expect( state.errors.length ).toBe( 3 );
            state = reducers( state, hideError( state.errors[ 1 ] ) );
            expect( state.errors.length ).toBe( 2 );
            expect( state.errors[ 0 ].message ).toBe( "TEST__1" );
            expect( state.errors[ 1 ].message ).toBe( "TEST__3" );
        } );
    } );

    describe( "SAGA", () => {
        it( "'regular' errors result in a showError action", () => {
            const error = { message: "TEST" };
            expect( onError( { error } ).next().value ).toEqual( put( showError( error ) ) );
        } );

        it.skip( "error with a status of 401 or 403 will result in a invalidatesession action", () => {
            // TODO: fix this test
            // it's broken since the invalidatesession action is disabled in test env
            let error = { response: { status: 401 } };
            expect( onError( { error } ).next().value ).toEqual( put( invalidateSession() ) );

            error = { response: { status: 403 } };
            expect( onError( { error } ).next().value ).toEqual( put( invalidateSession() ) );
        } );

        it( "TypeErrors will be thrown", () => {
            const error = new TypeError();
            try {
                onError( { error } );
            } catch ( e ) {
                expect( e ).toEqual( error );
            }
        } );
    } );
} );
