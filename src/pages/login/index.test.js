import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import sinon from "sinon";
import store from "src/store";
import Component from ".";

describe( __filename, () => {
    it( "renders", () => {
        shallow( <Component /> );
        expect( true ).toBe( true );
    } );

    describe( "rendering", () => {
        let wrapper;
        let push;
        let props;

        beforeEach( () => {
            props = {
                location: { search: {} },
                history: { push: () => {} },
            };
            push = sinon.stub( props.history, "push" );
        } );

        afterEach( () => {
            push.reset();
            wrapper.unmount();
        } );

        it( "can login with querystring", () => {
            props.location.search = "?token=test";
            wrapper = mount( (
                <Provider store={ store }>
                    <MemoryRouter initialEntries={ [ "/login" ] }>
                        <Component { ...props } />
                    </MemoryRouter>
                </Provider>
            ) );
            expect( push.calledWith( { search: "" } ) ).toBe( true );
            expect( store.getState().app.token ).toBe( "test" );
        } );

        // TODO: For some reason this test never finishes.. figure it out and fix it
        xit( "ComponentDidMount", () => {
            props.location.search = "?logout=true";
            wrapper = mount( (
                <Provider store={ store }>
                    <MemoryRouter initialEntries={ [ "/login" ] }>
                        <Component { ...props } />
                    </MemoryRouter>
                </Provider>
            ) );
            expect( push.calledWith( { search: "" } ) ).toBe( true );
            expect( store.getState().app.token ).toBe( false );
        } );
    } );
} );
