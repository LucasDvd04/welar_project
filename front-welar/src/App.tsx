import './App.css'
import ButtonShopee from './components/_button'

import logo from './assets/logo.png'

function App() {

  return (
    <>
     <div className="h-full w-full bg-page ">
        {/* Header */}
        <div className="w-full flex justify-between items-center bg-[#bce8db] p-2">
          <div></div>
          <h1 className='text-2xl text-text-main cursor-pointer'>WeLar</h1>
          <img src={'/search-line.svg'} alt="search" className='w-10 h-10 cursor-pointer p-2 rounded-full hover:bg-action-primary'/>
        </div>

        {/* Hero */}
        <div className='w-full mx-auto text-center px-4 py-20 bg-[url("./assets/hero.jpg")] bg-cover bg-center'>
              <div className='flex flex-col gap-8 max-w-6xl mx-auto '>
                <h1 className='text-5xl text-center text-text-main flex-wrap'>Transforme <br></br>sua casa</h1>
                  <ButtonShopee/>
            </div>
        </div>

        {/*body */}
        <div className='w-full h-full p-2'>


          <div id='cards' className='w-full flex flex-wrap justify-center gap-2 py-6'>
            <div className='max-w-50 h-60 md:w-1/4 lg:w-1/6'>
              <div className='py-18 bg-[url("https://images.tcdn.com.br/img/img_prod/752045/sofa_4_lugares_dubai_3_40_com_chaise_direito_linho_10003065_2_d057cca0a727d73cad6c351a3db1c158.jpg")] bg-cover bg-center rounded-md'></div>
              <div className='flex flex-col gap-2'>
                <p className=' font-bold'>Sofá de Queijo com Ovo</p>
                <div className='text-center'><ButtonShopee/></div>
              </div>
            </div>

            <div className='max-w-50 h-60 md:w-1/4 lg:w-1/6'>
              <div className='py-18 bg-[url("https://images.tcdn.com.br/img/img_prod/752045/sofa_4_lugares_dubai_3_40_com_chaise_direito_linho_10003065_2_d057cca0a727d73cad6c351a3db1c158.jpg")] bg-cover bg-center rounded-md'></div>
              <div className='flex flex-col gap-2'>
                <p className=' font-bold'>Sofá de Queijo com Ovo</p>
                <div className='text-center'><ButtonShopee/></div>
              </div>
            </div>

            <div className='max-w-50 h-60 md:w-1/4 lg:w-1/6'>
              <div className='py-18 bg-[url("https://images.tcdn.com.br/img/img_prod/752045/sofa_4_lugares_dubai_3_40_com_chaise_direito_linho_10003065_2_d057cca0a727d73cad6c351a3db1c158.jpg")] bg-cover bg-center rounded-md'></div>
              <div className='flex flex-col gap-2'>
                <p className=' font-bold'>Sofá de Queijo com Ovo</p>
                <div className='text-center'><ButtonShopee/></div>
              </div>
            </div>

            <div className='max-w-50 h-60 md:w-1/4 lg:w-1/6'>
              <div className='py-18 bg-[url("https://images.tcdn.com.br/img/img_prod/752045/sofa_4_lugares_dubai_3_40_com_chaise_direito_linho_10003065_2_d057cca0a727d73cad6c351a3db1c158.jpg")] bg-cover bg-center rounded-md'></div>
              <div className='flex flex-col gap-2'>
                <p className=' font-bold'>Sofá de Queijo com Ovo</p>
                <div className='text-center'><ButtonShopee/></div>
              </div>
            </div>

            <div className='max-w-50 h-60 md:w-1/4 lg:w-1/6'>
              <div className='py-18 bg-[url("https://images.tcdn.com.br/img/img_prod/752045/sofa_4_lugares_dubai_3_40_com_chaise_direito_linho_10003065_2_d057cca0a727d73cad6c351a3db1c158.jpg")] bg-cover bg-center rounded-md'></div>
              <div className='flex flex-col gap-2'>
                <p className=' font-bold'>Sofá de Queijo com Ovo</p>
                <div className='text-center'><ButtonShopee/></div>
              </div>
            </div>

            <div className='max-w-50 h-60 md:w-1/4 lg:w-1/6'>
              <div className='py-18 bg-[url("https://images.tcdn.com.br/img/img_prod/752045/sofa_4_lugares_dubai_3_40_com_chaise_direito_linho_10003065_2_d057cca0a727d73cad6c351a3db1c158.jpg")] bg-cover bg-center rounded-md'></div>
              <div className='flex flex-col gap-2'>
                <p className=' font-bold'>Sofá de Queijo com Ovo</p>
                <div className='text-center'><ButtonShopee/></div>
              </div>
            </div>

            <div className='max-w-50 h-60 md:w-1/4 lg:w-1/6'>
              <div className='py-18 bg-[url("https://images.tcdn.com.br/img/img_prod/752045/sofa_4_lugares_dubai_3_40_com_chaise_direito_linho_10003065_2_d057cca0a727d73cad6c351a3db1c158.jpg")] bg-cover bg-center rounded-md'></div>
              <div className='flex flex-col gap-2'>
                <p className=' font-bold'>Sofá de Queijo com Ovo</p>
                <div className='text-center'><ButtonShopee/></div>
              </div>
            </div>

            <div className='max-w-50 h-60 md:w-1/4 lg:w-1/6'>
              <div className='py-18 bg-[url("https://images.tcdn.com.br/img/img_prod/752045/sofa_4_lugares_dubai_3_40_com_chaise_direito_linho_10003065_2_d057cca0a727d73cad6c351a3db1c158.jpg")] bg-cover bg-center rounded-md'></div>
              <div className='flex flex-col gap-2'>
                <p className=' font-bold'>Sofá de Queijo com Ovo</p>
                <div className='text-center'><ButtonShopee/></div>
              </div>
            </div>

            <div className='max-w-50 h-60 md:w-1/4 lg:w-1/6'>
              <div className='py-18 bg-[url("https://images.tcdn.com.br/img/img_prod/752045/sofa_4_lugares_dubai_3_40_com_chaise_direito_linho_10003065_2_d057cca0a727d73cad6c351a3db1c158.jpg")] bg-cover bg-center rounded-md'></div>
              <div className='flex flex-col gap-2'>
                <p className=' font-bold'>Sofá de Queijo com Ovo</p>
                <div className='text-center'><ButtonShopee/></div>
              </div>
            </div>

          
          
        </div>

        </div>

      <footer className="w-full bg-action-primary text-white mt-16 pt-12 pb-6 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/15">
    
    {/* Coluna 1: Marca & Sobre */}
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <img src={logo} alt="WeLar Logo" className="w-8 h-8 object-contain bg-white rounded-full p-1" />
        <span className="text-2xl font-bold tracking-wide">WeLar</span>
      </div>
      <p className="text-sm text-slate-200 max-w-sm leading-relaxed">
        Sua casa, seus sonhos. Curadoria exclusiva de itens de decoração, organização e aconchego para o seu lar.
      </p>
    </div>

    {/* Coluna 2: Diferenciais e Confiança */}
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-[#bce8db]">Por que WeLar?</h3>
      <ul className="text-sm text-slate-200 space-y-2">
        <li className="flex items-center gap-2">
          <span>🛍️</span> Compra 100% Segura via Shopee
        </li>
        <li className="flex items-center gap-2">
          <span>✨</span> Curadoria Especializada de Produtos
        </li>
        <li className="flex items-center gap-2">
          <span>🚚</span> Aproveite os Cupons de Frete Grátis
        </li>
      </ul>
    </div>

    {/* Coluna 3: Chamada para a Shopee */}
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-[#bce8db]">Loja Oficial</h3>
      <p className="text-sm text-slate-200">
        Acesse nosso catálogo completo com os melhores preços direto na plataforma.
      </p>
      <div className="pt-2">
        <ButtonShopee />
      </div>
    </div>

  </div>

  {/* Sub-footer / Copyright */}
  <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-300 gap-3">
    <p>© {new Date().getFullYear()} WeLar. Todos os direitos reservados.</p>
    <p className="flex items-center gap-1">
      Redirecionamento oficial para a Shopee 🧡
    </p>
  </div>
</footer>
     </div>
    </>
  )
}

export default App
