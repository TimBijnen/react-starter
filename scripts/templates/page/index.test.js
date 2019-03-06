import React from "react";
import { shallow } from "enzyme";
import Component from ".";

describe( __filename, () => {
    it( "renders", () => {
        shallow( <Component /> );
    } );
} );
