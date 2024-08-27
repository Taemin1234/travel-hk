import { ReactComponent as Map } from '../assets/img/honkong_map.svg'; // SVG 파일을 ReactComponent로 가져옴

function TravelInfo() {

    const cEvent = (e) => {
        if (e.target.tagName === 'path') {
            console.log(`클릭 : ${e.target.id}`)
          }
    }

    return (
        <div>
            <Map onClick={cEvent} style={{width:'100%'}}/>
        </div>
    )    
}

export default TravelInfo