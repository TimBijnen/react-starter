import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import reducer from "./reducers";
import actions from "./actions";
import types from "./types";
import sagas from "./sagas";

const mock = new MockAdapter( axios );
mock.onGet( "/404" ).reply( 404 );
mock.onGet( "/valid-path" ).reply( 200 );

const sagaMiddleware = createSagaMiddleware();

const store = createStore( ( state = {} ) => state, undefined, applyMiddleware( sagaMiddleware ) );

describe( "team reducer", () => {
    it( "should return the initial state", () => {
        expect( reducer( undefined, {} ) ).toEqual( { errors: [] } );
    } );

    it( "should handle ERROR", () => {
        expect( reducer( {}, actions.createError( { message: "Test" } ) ) ).toEqual( { errors: [ { message: "Test" } ] } );
    } );

    it( "puts errors into array", () => {
        let state = {};
        state = reducer( state, actions.createError( { message: "Test1" } ) );
        state = reducer( state, actions.createError( { message: "Test2" } ) );
        expect( state ).toEqual( { errors: [ { message: "Test1" }, { message: "Test2" } ] } );
    } );

    it( "Should run init", async () => {
        expect.assertions( 2 );
        function* main() {
            yield takeEvery( types.ERROR, () => expect( true ).toBe( true ) );
        }
        sagaMiddleware.run( sagas );
        sagaMiddleware.run( main );
        store.dispatch( actions.init() );
        await axios.get( "/404" );
        await axios.get( "/404" );
        await axios.get( "/valid-path" );
    } );
} );
