let headers = $response.headers; // 获取响应头

// 修改 X-Emby-Authorization
if (headers['X-Emby-Authorization']) {
    headers['X-Emby-Authorization'] = headers['X-Emby-Authorization'].replace(/Client="Forward"/, 'Client="Fileball"');
}

// 修改 User-Agent 或 user-agent
if (headers['User-Agent'] || headers['user-agent']) {
    headers['User-Agent'] = (headers['User-Agent'] || headers['user-agent']).replace(
        /Forward\/160 CFNetwork\/3826.400.110 Darwin\/24.3.0/,
        'Fileball/1.3.30'
    );
    headers['user-agent'] = headers['User-Agent']; // 确保两种写法一致
}

// 返回修改后的响应
$done({ headers });
