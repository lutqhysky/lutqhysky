const forbiddenApps = ['Fileball', 'APTV', 'Forward', 'Forward/50', 'Forward/65'];
const forbiddenAppFound = forbiddenApps.find(appName => (ua && ua.includes(appName)) || ($request.body && $request.body.includes(appName)));

if (forbiddenAppFound) {
  if (['Fileball', 'APTV', 'Forward'].includes(forbiddenAppFound)) {
    console.log(`发现禁止MITM的APP: ${forbiddenAppFound}，已停止运行脚本！\n叮当猫の分享频道: https://t.me/chxm1023`); 
    $done({});
  } else {
    // 继续进行MITM并执行相应的修改
    // 这里是你需要的URL和头部修改逻辑
    $request.url = $request.url.replace(/^https:\/\/(api\.revenuecat|isi\.csan\.goodnotes)\.com\/.+\/(receipts$|subscribers\/[^/]+$|offers$)/, 'https://api.langkhach89.workers.dev');
    // 添加头部修改逻辑（如果有需要的话）
    // $request.headers['Your-Header-Name'] = 'Your-Header-Value';
    console.log(`已修改请求URL并继续MITM处理。`);
  }
} else {
  console.log(`未发现禁止的APP，继续执行脚本。`);
}
