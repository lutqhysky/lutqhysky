/*
app下载地址：商店搜索：语文趣配音
^https?:\/\/cnapi\.qupeiyin\.com\/(user\/memberData|member) url script-response-body seqpy.js
MITM = *.qupeiyin.com
作者：清清情  时间2022年6月6日
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/user/memberData?';
const svip = '/member';

if (url.indexOf(vip) != -1) {
    obj.data.is_svip = "1";
    obj.data.is_vip = "1";
    obj.data.svip_endtime = "999999999";
    obj.data.vip_endtime = "9999999999";
    body = JSON.stringify(obj);
    
}
if (url.indexOf(svip) != -1) {
    obj.data.is_svip = "1";
    obj.data.is_vip = "1";
    obj.data.svip_endtime = "999999999";
    obj.data.vip_endtime = "999999999";
    body = JSON.stringify(obj);
 }
$done({body});
