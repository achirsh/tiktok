const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">隐私政策 (Privacy Policy)</h1>

      <p className="mb-4">
        我们非常重视您的隐私。请仔细阅读本隐私政策，了解我们如何收集、使用和保护您的信息。
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. 信息收集</h2>
      <p className="mb-4">
        我们可能收集您在使用本网站或应用时提供的信息，包括：
        <ul className="list-disc ml-6">
          <li>账户注册信息（如邮箱、用户名）</li>
          <li>使用行为数据（如访问页面、操作记录）</li>
          <li>设备信息（如浏览器类型、IP 地址）</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. 信息使用</h2>
      <p className="mb-4">
        我们收集的信息可能用于：
        <ul className="list-disc ml-6">
          <li>提供和维护服务</li>
          <li>优化用户体验</li>
          <li>分析访问数据</li>
          <li>遵守法律法规要求</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. 信息保护</h2>
      <p className="mb-4">
        我们采取合理的技术和管理措施保护您的信息安全，但无法保证信息在互联网上绝对安全。
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. 第三方服务</h2>
      <p className="mb-4">
        我们可能使用第三方服务（如分析工具、支付服务），这些第三方可能收集您的部分信息。请参考其隐私政策。
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. 儿童隐私</h2>
      <p className="mb-4">
        本服务不针对 13 岁以下儿童。如发现收集了儿童信息，将及时删除。
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. 政策更新</h2>
      <p className="mb-4">
        我们可能随时更新本隐私政策，最新版本会在本页面公布，并注明更新日期。
      </p>

      <p className="mt-6 text-sm text-gray-500">
        最后更新：2025年11月
      </p>
    </div>
  );
};

export default PrivacyPolicy;