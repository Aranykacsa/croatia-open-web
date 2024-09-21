import { H as Header } from './Header-CSqmqrIE.js';
import { F as Footer } from './Footer-C-uTM_xw.js';
import './index-B4BdTjBX.js';
import './client-DpIAX_q0.js';
import './exports-BGi7-Rnc.js';

function html(value) {
  var open = "<!---->";
  return `${open}${value}<!---->`;
}
const title = "Croatia open is Croatian's biggest orienteering event";
const email = "risdelnice@gmail.com";
const address = "RAdićeva 1, Delnice, Croatia";
const description = "Lorem ipsum odor amet, <strong>consectetuer adipiscing elit</strong>. Nunc posuere semper volutpat leo sem. Facilisis consequat a rutrum quam integer. Vel a augue primis eros mollis habitasse curabitur facilisi aliquam. Neque lectus porta nam habitant dapibus?<br><br>Congue vestibulum taciti pretium mollis varius phasellus lacinia commodo. Volutpat imperdiet cubilia pretium libero vitae. Sed eget cubilia ipsum sed nostra ullamcorper?<br><br><em>Adipiscing placerat diam fringilla integer est arcu.</em> Blandit praesent dis dictumst dictum luctus id, porta et. Eget tempus libero turpis; fames quisque gravida morbi. Vel eu ex taciti gravida facilisi phasellus ex.<br><br>Metus curae primis elit fermentum a. Ullamcorper erat turpis vitae pretium et ultricies. Per magna quis ligula mollis nisi augue id! Maximus convallis torquent suscipit nostra a iaculis laoreet vehicula porttitor.<br><br>Proin nunc ligula hac tristique imperdiet. Parturient porttitor aptent morbi massa sollicitudin a consectetur. Fringilla egestas cursus aliquet interdum dignissim faucibus? Vestibulum ullamcorper consectetur turpis porttitor class sagittis justo fames. Ipsum nisi risus a aliquam ipsum vestibulum ante.<br><br>Tellus imperdiet placerat vivamus bibendum, sem et ornare. Malesuada viverra ornare consectetur proin curabitur eros.<br><br><strong>Praesent donec etiam magna lacinia aptent nibh mus adipiscing.</strong> Maecenas vestibulum laoreet ex venenatis quam sapien mauris tortor. Mauris suscipit taciti tellus arcu diam? Suspendisse curae elit potenti luctus litora sodales lacinia. Tempor felis nascetur aliquam curae ex. Aptent parturient curae eu; habitasse lectus purus ac. Fermentum mi et vivamus quisque, rhoncus cursus.<br><br>Venenatis integer dui primis dapibus morbi. Commodo ipsum tempus varius aliquam luctus hendrerit malesuada dignissim? Risus mi arcu posuere sit, vitae convallis pharetra quis. Habitasse ex euismod commodo fermentum volutpat. Nullam purus nostra suscipit et nisi habitant. Imperdiet vulputate morbi sed ipsum ridiculus maximus conubia blandit. Mollis metus eget finibus urna nisi. Nostra integer inceptos pharetra a ex ullamcorper lectus nulla augue. Sociosqu amet venenatis platea tellus habitant velit semper.";
const about = {
  title,
  email,
  address,
  description
};
function _page($$payload) {
  let info = about;
  $$payload.out += `<div class="fixed-header svelte-y3re7s">`;
  Header($$payload);
  $$payload.out += `<!----></div> <div class="content svelte-y3re7s">${html(info.title)} ${html(info.description)}</div> <div class="fixed-footer svelte-y3re7s">`;
  Footer($$payload);
  $$payload.out += `<!----></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CIBROTi9.js.map
