import React from "react";
import App from "app";
import { Provider } from "react-redux";
import store from "store";
import { MemoryRouter, Route } from "react-router";
import { mount, shallow } from "enzyme";
import Helper from "__tests__/helpers";
import LoginContainer from "./index";

Helper.runTests( __filename, ( ) => {
    // TODO: rewrite test -> it should not render the app component
    it( "L_001 | renders login", () => {
        expect.assertions( 1 );
        const component = (
            <MemoryRouter initialEntries={ [ "/login" ] }>
                <Provider store={ store }>
                    <App />
                </Provider>
            </MemoryRouter>
        );

        const wrapper = mount( component );
        expect( wrapper.find( LoginContainer ) ).toHaveLength( 1 );
    } );

    // TODO: rewrite test -> it should not render the app component
    it( "L_002 | renders login", () => {
        expect.assertions( 1 );
        const component = (
            <MemoryRouter initialEntries={ [ "/biasiuehr" ] }>
                <Provider store={ store }>
                    <App />
                </Provider>
            </MemoryRouter>
        );
        const wrapper = mount( component );
        expect( wrapper.find( LoginContainer ) ).toHaveLength( 1 );
    } );

    it( "L_003 | can set authtoken", async () => {
        expect.assertions( 1 );
        const entry = "L_003";
        const component = (
            <MemoryRouter initialEntries={ [ `/login?authToken=${ entry }` ] }>
                <Provider store={ store }>
                    <Route
                        exact
                        path="/login"
                        component={ props => <LoginContainer { ...props } /> }
                    />
                </Provider>
            </MemoryRouter>
        );
        mount( component );
        await new Promise( resolve => setTimeout( resolve, 2000 ) );

        const { token: result } = store.getState().authentication;
        expect( result ).toEqual( entry );
    } );

    it( "L_004 | can render login", () => {
        expect.assertions( 1 );
        const component = (
            <MemoryRouter initialEntries={ [ "/login" ] }>
                <Provider store={ store }>
                    <Route
                        exact
                        path="/login"
                        component={ props => <LoginContainer { ...props } /> }
                    />
                </Provider>
            </MemoryRouter>
        );

        const wrapper = mount( component );
        expect( wrapper.find( LoginContainer ) ).toHaveLength( 1 );
    } );

    it.skip( "L_005 | can successfully set token via function", async () => {
        expect.assertions( 2 );
        const entry = "L_005";
        const wrapper = shallow( <LoginContainer location={ {} } store={ store } /> );

        wrapper.dive().instance().onSuccess( { tokenId: entry } );
        await new Promise( resolve => setTimeout( resolve, 2000 ) );
        const { token: resultSuccess } = await store.getState().authentication;
        expect( resultSuccess ).toEqual( entry );

        wrapper.dive().instance().onFailure();
        await new Promise( resolve => setTimeout( resolve, 2000 ) );
        const { token: resultFailure } = store.getState().authentication;
        await expect( resultFailure ).toEqual( false );
    } );
} );
