import GlobalStyle from "./globalStyle";

import {
    main as colorsMain,
    secondary as colorsSecondary,
} from "./colors/index";

import {
    main as navigationMain,
    secondary as navigationSecondary,
} from "./navigation";

export default {
    primary: {
        appFlexDirection: "row",
        ...colorsMain,
        ...navigationMain,
    },
    secondary: {
        appFlexDirection: "column",
        ...colorsSecondary,
        ...navigationSecondary,
    },
};
export { GlobalStyle };
