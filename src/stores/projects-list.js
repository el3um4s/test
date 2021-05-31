import { writable } from "svelte/store";

const experiments = writable([
    {
        category: "mini-template",
        project: "001-execute-a-function-from-separate-event-sheet",
        title: "FUNCTION SEPARATE",
        description: "description FUNCTION SEPARATE"
    },
    {
        category: "mini-template",
        project: "002-straight-lasso",
        title: "STRAIGHT LASSO",
        description: "description STRAIGHT LASSO"
    },
    {
        category: "mini-template",
        project: "003-leaflet",
        title: "LEAFLET",
        description: "description LEAFLET"
    },
    {
        category: "mini-template",
        project: "004-openlayers",
        title: "OPEN LAYERS",
        description: "description OPEN LAYERS"
    },
    {
        category: "mini-template",
        project: "005-keycode-info",
        title: "KEYCODE INFO",
        description: "description KEYCODE INFO"
    },
    {
        category: "mini-template",
        project: "006-iss-tracker",
        title: "ISS Tracker",
        description: "description ISS Tracker"
    },
    {
        category: "testing-template",
        project: "001-a",
        title: "A",
        description: "description A"
    },
    {
        category: "testing-template",
        project: "001-B",
        title: "B",
        description: "description B"
    },
]);

export default experiments;