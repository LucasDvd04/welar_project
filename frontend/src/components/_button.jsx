
function ButtonShopee(url){
    let path = ''
    if(!url.url){
        path = 'lucasdavidli'
    }else{
        path = url.url;
    }

    return(
        <a href={`https://shopee.com.br/${path}`} className='max-w-sm mx-auto bg-action-primary rounded-lg py-2 text-[#b7efed] cursor-pointer hover:bg-action-hover px-6'>
            Ver na Shopee
        </a>
    )
}

export default ButtonShopee