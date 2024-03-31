import { atom } from "recoil";

export const userAtom = atom({
    key:"userAtom",
    default: localStorage.getItem("curr-user") ? JSON.parse(localStorage.getItem("curr-user")!) : null,
})