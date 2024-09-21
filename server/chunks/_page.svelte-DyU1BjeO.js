import { k as ensure_array_like, e as pop, g as escape_html, l as attr, p as push } from './index-B4BdTjBX.js';
import { H as Header } from './Header-CSqmqrIE.js';
import './client-DpIAX_q0.js';
import './exports-BGi7-Rnc.js';

function News($$payload, $$props) {
  push();
  let { news: news2 } = $$props;
  $$payload.out += `<div class="card svelte-jjrzlk"><h2 class="svelte-jjrzlk">${escape_html(news2.title)}</h2> <div class="card-img svelte-jjrzlk">`;
  if (news2.imgUrl) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img${attr("src", news2.imgUrl)}${attr("alt", news2.title)} class="card-image svelte-jjrzlk">`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="card-date svelte-jjrzlk"><p class="svelte-jjrzlk">${escape_html(news2.date)}</p></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
const news = [
  {
    title: "Livelox",
    description: '🔴🔵 Check <strong><a href="https://www.livelox.com/?tab=allEvents&timePeriod=pastWeek&q=OK%2BRis&sorting=relevance" target="_blank" style="color: #007bff; text-decoration: underline;">Livelox</a></strong> for variants👍',
    date: "2024.08.16.",
    imgUrl: "./content/Livelox.png"
  },
  {
    title: "Croatia Open 2025",
    description: "🔴🔵 The next edition of <strong>Croatia Open</strong> is scheduled for <strong>August 1st -3th, 2025</strong>.\nAs before, our small organizational team works for you! \nSee you next summer in Croatia.",
    date: "2024.08.16.",
    imgUrl: "./content/content1.jpg"
  }
];
const descriptions = {
  news
};
function _page($$payload, $$props) {
  push();
  const newsList = descriptions.news;
  const each_array = ensure_array_like(newsList);
  Header($$payload);
  $$payload.out += `<!----> <div class="content svelte-1aj9g02"><!--[-->`;
  for (let i = 0; i < each_array.length; i++) {
    const news2 = each_array[i];
    News($$payload, { news: news2 });
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DyU1BjeO.js.map
