import React, { useState, useEffect } from 'react';

// 你的 TikTok 客户端 ID 和回调 URL
const CLIENT_ID = 'YOUR_TIKTOK_CLIENT_ID';
const REDIRECT_URI = 'https://yourapp.azurewebsites.net/callback'; // 替换为你 Azure 上的回调地址

function Home() {
  const [accessToken, setAccessToken] = useState(null);

  // 点击登录按钮时，重定向到 TikTok 授权页面
  const handleLogin = () => {
    const authUrl = `https://www.tiktok.com/auth/authorize/?client_key=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=user_info`;
    window.location.href = authUrl;
  };

  // 获取授权码并获取 access_token
  const handleCallback = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code'); // 获取授权码

    if (code) {
      fetchAccessToken(code);
    }
  };

  // 获取 Access Token
  const fetchAccessToken = async (code) => {
    try {
      const response = await fetch('/get-access-token', {  // 后端 API 用于交换 token
        method: 'POST',
        body: JSON.stringify({ code }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      if (data.access_token) {
        setAccessToken(data.access_token);
      } else {
        console.error('Failed to get access token');
      }
    } catch (error) {
      console.error('Error fetching access token', error);
    }
  };

  // 检查回调 URL 中是否包含授权码
  useEffect(() => {
    if (window.location.search.includes('code')) {
      handleCallback();
    }
  }, []);

  return ( 
    <div className="App">
      {accessToken ? (
        <div>
          <h1>Access Token: {accessToken}</h1>
          {/* 在这里展示 TikTok 达人的数据 */}
        </div>
      ) : (
        <button onClick={handleLogin}>Login with TikTok</button>
      )}
    </div>
  );
}

export default Home;