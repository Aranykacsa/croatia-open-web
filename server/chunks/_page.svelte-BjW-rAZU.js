import { k as ensure_array_like, l as attr } from './index-B4BdTjBX.js';
import { H as Header } from './Header-CSqmqrIE.js';
import { F as Footer } from './Footer-C-uTM_xw.js';
import './client-DpIAX_q0.js';
import './exports-BGi7-Rnc.js';

function Photo($$payload, $$props) {
  let { imgUrl } = $$props;
  $$payload.out += `<div class="masonry-item svelte-fpryyd"><img${attr("src", imgUrl)} alt="Image" loading="lazy" class="svelte-fpryyd"></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
}
function _page($$payload) {
  let images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/400x600",
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/300x400",
    "https://via.placeholder.com/600x300",
    "https://via.placeholder.com/200x300"
  ];
  const each_array = ensure_array_like(images);
  $$payload.out += `<div class="fixed-header svelte-1vvv3lr">`;
  Header($$payload);
  $$payload.out += `<!----></div> <div class="content svelte-1vvv3lr"><div class="masonry svelte-1vvv3lr"><!--[-->`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const image = each_array[$$index];
    Photo($$payload, { imgUrl: image });
  }
  $$payload.out += `<!--]--></div></div> <div class="fixed-footer svelte-1vvv3lr">`;
  Footer($$payload);
  $$payload.out += `<!----></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BjW-rAZU.js.map
