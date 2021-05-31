import { writable } from "svelte/store";

const experiments = writable([
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
    }
]);

export default experiments;