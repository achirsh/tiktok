const TermsOfService = () => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">服务条款 (Terms of Service)</h1>

            <p className="mb-4">
                欢迎使用我们的服务。请在使用本网站或应用之前仔细阅读本条款。一旦使用，即表示您同意遵守本条款。
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. 服务内容</h2>
            <p className="mb-4">
                我们提供 [简述你的服务，例如：TikTok 相关工具或数据管理服务]。我们保留随时修改、更新或终止服务的权利。
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. 用户责任</h2>
            <p className="mb-4">
                用户必须合法使用本服务，不得用于任何违法或侵权行为。用户对自己的账户及密码安全负责。
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. 知识产权</h2>
            <p className="mb-4">
                本网站及应用内容（包括文字、图片、代码、商标等）受法律保护。未经许可，不得复制、转载或用于商业目的。
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. 责任限制</h2>
            <p className="mb-4">
                对于因使用本服务产生的任何直接或间接损失，我们不承担责任。本服务按“现状”提供。
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. 隐私政策</h2>
            <p className="mb-4">
                我们会收集、使用您的信息，请参考我们的 <a href="/privacy-policy" className="text-blue-600 underline">隐私政策</a>。
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. 法律适用</h2>
            <p className="mb-4">
                本条款受 [你的国家/地区] 法律管辖。如有争议，将提交至 [指定法院或仲裁机构] 解决。
            </p>

            <p className="mt-6 text-sm text-gray-500">
                最后更新：2025年11月
            </p>
        </div>
    );
};

export default TermsOfService;