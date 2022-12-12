AjxTemplate.register("com_zimbra_signature_zimlet.templates.signatureBase#Main",
function(name, params, data, buffer) {
  var _hasBuffer = Boolean(buffer);
  data = (typeof data == "string" ? { id: data } : data) || {};
  buffer = buffer || [];
  var _i = buffer.length;

  buffer[_i++] = "<div>"
  buffer[_i++] = "<em style=\"background-color: #fbfbfc;\">"
  buffer[_i++] = "<strong>"
  buffer[_i++] = data.name;
  buffer[_i++] = "</strong>"
  buffer[_i++] = "</em>"
  buffer[_i++] = "<br style=\"background-color: #fbfbfc;\">"
  buffer[_i++] = "<strong style=\"background-color: #fbfbfc;\">"
  buffer[_i++] = data.occupation
  buffer[_i++] = "</strong>"
  buffer[_i++] = "<br style=\"background-color: #fbfbfc;\">"
  buffer[_i++] = "<span style=\"background-color: #fbfbfc;\">-"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<br style=\"background-color: #fbfbfc;\">"
  buffer[_i++] = "<span style=\"background-color: #fbfbfc;\">Gaypa Srl"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<br style=\"background-color: #fbfbfc;\">"
  buffer[_i++] = "<span style=\"background-color: #fbfbfc;\">Via Monte Grappa 33"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<br style=\"background-color: #fbfbfc;\">"
  buffer[_i++] = "<span style=\"background-color: #fbfbfc;\">36050 Quinto Vicentino (VI) Italy"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<br style=\"background-color: #fbfbfc;\">"
  buffer[_i++] = "<span style=\"background-color: #fbfbfc;\">Ph: +39 0444 584400"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<br style=\"background-color: #fbfbfc;\">"
  buffer[_i++] = "<span style=\"background-color: #fbfbfc;\">Web:"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<span style=\"background-color: #fbfbfc;\">&nbsp;"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<span class=\"Object\" id=\"OBJ_PREFIX_DWT549_com_zimbra_url\" style=\"color: #336699; cursor: pointer; background-color: #fbfbfc;\">"
  buffer[_i++] = "<a href=\"http://www.gaypa.com/\" target=\"_blank\" style=\"color: #336699; text-decoration-line: none; cursor: pointer;\" rel=\"noopener\">http://www.gaypa.com</a>"
  buffer[_i++] = "</span>"
  buffer[_i++] = "<span>"
  buffer[_i++] = "<img src=\"https://raw.githubusercontent.com/7bridges-eu/zimbra-signature-template/master/images/banner-natale-2022.png\" alt=\"Christmas 2022\">"
  buffer[_i++] = "/<span>"
  buffer[_i++] = "</div>"

  return _hasBuffer ? buffer.length : buffer.join("");
},
{
  "id": "Main"
}, true);
AjxPackage.define("com_zimbra_signature_zimlet.templates.signatureBase");
AjxTemplate.register("com_zimbra_signature_zimlet.templates.signatureBase", AjxTemplate.getTemplate("com_zimbra_signature_zimlet.templates.signatureBase#Main"), AjxTemplate.getParams("com_zimbra_signature_zimlet.templates.signatureBase#Main"));
