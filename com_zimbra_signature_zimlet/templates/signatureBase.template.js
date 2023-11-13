AjxTemplate.register("com_zimbra_signature_zimlet.templates.signatureBase#Main",
function(name, params, data, buffer) {
  var _hasBuffer = Boolean(buffer);
  data = (typeof data == "string" ? { id: data } : data) || {};
  buffer = buffer || [];
  var _i = buffer.length;

  buffer[_i++] = "<div>"
  buffer[_i++] = "<em>"
  buffer[_i++] = "<strong>"
  buffer[_i++] = data.name;
  buffer[_i++] = "</strong>"
  buffer[_i++] = "</em>"
  buffer[_i++] = "<br>"
  buffer[_i++] = "<strong>"
  buffer[_i++] = data.occupation
  buffer[_i++] = "</strong>"
  buffer[_i++] = "<br>"
  buffer[_i++] = "<span>-"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<br>"
  buffer[_i++] = "<span>Gaypa Srl"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<br>"
  buffer[_i++] = "<span>Via Monte Grappa 33"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<br>"
  buffer[_i++] = "<span>36050 Quinto Vicentino (VI) Italy"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<br>"
  buffer[_i++] = "<span>Ph: +39 0444 584400"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<br>"
  buffer[_i++] = "<span>Web:"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<span>&nbsp;"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<span class=\"Object\" id=\"OBJ_PREFIX_DWT549_com_zimbra_url\" style=\"color: #336699; cursor: pointer;\">"
  buffer[_i++] = "<a href=\"http://www.gaypa.com/\" target=\"_blank\" style=\"color: #336699; text-decoration-line: none; cursor: pointer;\" rel=\"noopener\">http://www.gaypa.com</a>"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<div style=\"padding: 15px;\">"
  buffer[_i++] = "<a href=\"http://www.gaypa.com/\" target=\"_blank\" style=\"color: #336699; text-decoration-line: none; cursor: pointer;\" rel=\"noopener\">"
  buffer[_i++] = "<img src=\"https://raw.githubusercontent.com/7bridges-eu/zimbra-signature-template/master/images/banner.png\" alt=\"Visita il nostro sito\">"
  buffer[_i++] = "</a>"
  buffer[_i++] = "</span>"
  buffer[_i++] = "</div>"

  return _hasBuffer ? buffer.length : buffer.join("");
},
{
  "id": "Main"
}, true);
AjxPackage.define("com_zimbra_signature_zimlet.templates.signatureBase");
AjxTemplate.register("com_zimbra_signature_zimlet.templates.signatureBase", AjxTemplate.getTemplate("com_zimbra_signature_zimlet.templates.signatureBase#Main"), AjxTemplate.getParams("com_zimbra_signature_zimlet.templates.signatureBase#Main"));
