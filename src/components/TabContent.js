import Hotel from './Hotel'
import Restaurant from './Restaurant'
import Cafe from './Cafe'
import Pub from './Pub'
import Site from './Site'

// function TabContent({tab}) {
//     if (tab === 0) {
//         return <Hotel />;
//     } else if (tab === 1) {
//         return <Restaurant />;
//     } else if (tab === 2) {
//         return <Cafe />;
//     } else if (tab === 3) {
//         return <Pub />;
//     } else if (tab === 4) {
//         return <Site />;
//     } else {
//         return <div>데이터가 없습니다.</div>;
//     }
// }

function TabContent({tab}) {
    return [
        <Hotel />, <Restaurant />, <Cafe />, <Pub />, <Site />
    ][tab]
}



export default TabContent