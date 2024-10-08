
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow h-16 lg:h-[74px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold font-montserrat">birge</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-10">
          <Link href={{ pathname: '/events', query: { category: 'эко' } }}>
              <span className="text-[#18191F] font-normal text-[15px] leading-[22px] font-montserrat cursor-pointer">
                Эко
              </span>
            </Link>
            <Link href={{ pathname: '/events', query: { category: 'книга' } }}>
              <span className="text-[#18191F] font-normal text-[15px] leading-[22px] font-montserrat cursor-pointer">
                Книги
              </span>
            </Link>
            <Link href={{ pathname: '/events', query: { category: 'животные' } }}>
              <span className="text-[#18191F] font-normal text-[15px] leading-[22px] font-montserrat cursor-pointer">
                Животные
              </span>
            </Link>
            <Link href={{ pathname: '/events', query: { category: 'наставничество' } }}>
              <span className="text-[#18191F] font-normal text-[15px] leading-[22px] font-montserrat cursor-pointer">
                Менторства
              </span>
            </Link>
            <Link href={{ pathname: '/events', query: { category: 'другое' } }}>
              <span className="text-[#18191F] font-normal text-[15px] leading-[22px] font-montserrat cursor-pointer">
                Другое
              </span>
            </Link>
          </nav>

          <div className="flex overflow-hidden gap-3 items-start text-xs font-medium leading-none text-center">
            <button className=" font-montserrat font-bold gap-2.5 self-stretch px-5 py-3 text-[14px] text-indigo-500 whitespace-nowrap rounded-md bg-slate-100">
                Авторизация
            </button>

            <Link href="/events">
            <button className=" font-montserrat font-bold gap-2.5 self-stretch px-5 py-3 text-[14px] text-white bg-indigo-500 rounded-md ">
                Поиск Мероприятий
            </button>
            </Link>
            </div>
            
        </div>
      </div>
    </header>
  );
};

export default Header;