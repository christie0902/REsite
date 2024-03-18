import { swatch, fileIcon, ai, logoShirt, stylishShirt, preset, save, order } from "../../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
    label: "Colors"
  },
  {
    name: "filepicker",
    icon: fileIcon,
    label: "Upload"
  },
  // {
  //   name: "aipicker",
  //   icon: ai,
  //   label: "AI"
  // },
  {
    name: "preset",
    icon: preset,
    label: "Presets"
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
    label: "Logo"
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
    label: "Full shirt"
  },
  {
    name: "download",
    icon: save,
    label: "Download"
  },
  {
    name: "order",
    icon: order,
    label: "Order"
  }
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};


