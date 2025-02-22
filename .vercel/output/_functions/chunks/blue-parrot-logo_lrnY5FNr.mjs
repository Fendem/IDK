import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const blue_parrot = new Proxy({ "src": "/_astro/blue-parrot-logo.CmAD9fC2.png", "width": 651, "height": 681, "format": "png" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/home/ferdi/vorrect/src/assets/blue-parrot-logo.png";
    }
    return target[name];
  }
});
export {
  blue_parrot as b,
  cn as c
};
