import React from "react";
import store from "src/store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { mount } from "enzyme";
import Home from "src/pages/home";
import Login from "src/pages/login";
import { ThemeProvider } from "styled-components";
import themes from "src/theme";
import Router from ".";

describe( __filename, () => {
    const renderComponent = ( initialEntries, children ) => mount( (
        <ThemeProvider theme={ themes.primary }>
            <Provider store={ store }>
                <MemoryRouter initialEntries={ initialEntries }>
                    { children }
                </MemoryRouter>
            </Provider>
        </ThemeProvider>
    ) );

    describe( "test router", () => {
        let wrapper;
        afterAll( () => wrapper.unmount() );

        it( "renders page if authenticated", () => {
            wrapper = renderComponent( [ "/" ], <Router isAuthenticated /> );
            expect( wrapper.find( Home ) ).toHaveLength( 1 );
        } );
        it( "renders login if not authenticated", () => {
            wrapper = renderComponent( [ "/" ], <Router /> );
            expect( wrapper.find( Login ) ).toHaveLength( 1 );
        } );
        it( "renders login if not authenticated", () => {
            wrapper = renderComponent( [ "/login" ], <Router /> );
            expect( wrapper.find( Login ) ).toHaveLength( 1 );
        } );
    } );
} );
