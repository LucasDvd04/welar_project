function ButtonShopee({ url }) {
    const path = url?.url || 'lucasdavidli';

    const webUrl = `https://shopee.com.br/${path}`;

    const handleClick = (e) => {
        e.preventDefault();

        // Considera celular por largura da viewport
        const isMobile = window.innerWidth <= 768;

        if (!isMobile) {
            window.location.href = webUrl;
            return;
        }

        // Tenta abrir o app da Shopee
        const intentUrl =
            `intent://${path}` +
            `#Intent;` +
            `scheme=https;` +
            `package=com.shopee.br;` +
            `S.browser_fallback_url=${encodeURIComponent(webUrl)};` +
            `end`;

        window.location.href = intentUrl;
    };

    return (
        <a
            href={webUrl}
            onClick={handleClick}
            className="max-w-sm mx-auto bg-action-primary rounded-lg py-2 text-[#b7efed] cursor-pointer hover:bg-action-hover px-6"
        >
            Ver na Shopee
        </a>
    );
}

export default ButtonShopee;
