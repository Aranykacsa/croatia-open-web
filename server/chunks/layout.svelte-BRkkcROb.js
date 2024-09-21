import { f as slot } from './index-B4BdTjBX.js';

function default_slot($$props) {
  var children = $$props.$$slots?.default;
  if (children === true) {
    return $$props.children;
  } else {
    return children;
  }
}
function Layout($$payload, $$props) {
  $$payload.out += `<!---->`;
  slot($$payload, default_slot($$props), {});
  $$payload.out += `<!---->`;
}

export { Layout as default };
//# sourceMappingURL=layout.svelte-BRkkcROb.js.map
