import { e as pop, k as ensure_array_like, l as attr, m as stringify, g as escape_html, p as push } from './index-B4BdTjBX.js';
import { g as goto } from './client-DpIAX_q0.js';

function Hamburger($$payload, $$props) {
  let { pages } = $$props;
  const each_array = ensure_array_like(pages);
  $$payload.out += `<div class="hamburger-menu svelte-2upmti"><div${attr("class", `bar svelte-2upmti ${stringify([""].filter(Boolean).join(" "))}`)}></div> <div${attr("class", `bar svelte-2upmti ${stringify([""].filter(Boolean).join(" "))}`)}></div> <div${attr("class", `bar svelte-2upmti ${stringify([""].filter(Boolean).join(" "))}`)}></div></div> <div${attr("class", `${stringify(`mobile-menu ${""}`)} svelte-2upmti`)}><!--[-->`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const page = each_array[$$index];
    $$payload.out += `<div class="mobile-menu-item svelte-2upmti">${escape_html(page.name)}</div>`;
  }
  $$payload.out += `<!--]--></div>`;
}
function Header($$payload, $$props) {
  push();
  let pages = [
    {
      name: "About",
      onClick: async () => await goto()
    },
    {
      name: "Organizers",
      onClick: async () => await goto()
    },
    {
      name: "Registration",
      onClick: async () => window.open("https://www.orienteeringonline.net/CompetitionBasicInfo.aspx?CompetitionID=13445")
    },
    {
      name: "Gallery",
      onClick: async () => await goto()
    }
  ];
  $$payload.out += `<div class="header svelte-1yq8hgb"><div class="title-container svelte-1yq8hgb"><div class="title svelte-1yq8hgb"><label for="title" class="svelte-1yq8hgb">Croatia Open</label></div> <div class="subtitle svelte-1yq8hgb"><label for="subtitle" class="svelte-1yq8hgb">2025 aug. 01 - 03</label></div></div> <div class="nav-container svelte-1yq8hgb"><div class="nav-item svelte-1yq8hgb"><label class="label-style svelte-1yq8hgb">About</label></div> <div class="separator svelte-1yq8hgb"></div> <div class="nav-item svelte-1yq8hgb"><label class="label-style svelte-1yq8hgb">Organizers</label></div> <div class="separator svelte-1yq8hgb"></div> <div class="nav-item svelte-1yq8hgb"><label class="label-style svelte-1yq8hgb">Registration</label></div> `;
  Hamburger($$payload, { pages });
  $$payload.out += `<!----></div> <img src="../../mik-logo.png" alt="" class="svelte-1yq8hgb"></div>`;
  pop();
}

export { Header as H };
//# sourceMappingURL=Header-CSqmqrIE.js.map
