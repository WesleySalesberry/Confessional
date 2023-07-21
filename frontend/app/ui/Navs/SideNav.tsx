import NavData from './NavData.json'
import { useSearchContext } from '@/context/SearchContext';



const SideNav: React.FC = () => {
  const { addValue } = useSearchContext();

  return (
    <aside className={`sticky w-3/5 md:w-1/5 border-r-2 border-red-500 bg-slate-500 h-screen md:max-h-screen`}>
      <ul className="py-4">
        {
          NavData.map(itm => (
            <li
              key={itm.value}
              className="px-4 py-2 font-bold cursor-pointer"
              onClick={() => addValue(itm.value)}
            >
              {itm.title}
            </li>
          ))
        }
      </ul>
    </aside>
  );
};

export default SideNav;
