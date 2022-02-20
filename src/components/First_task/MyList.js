import { FaAward,FaPercent,FaRuler,FaSearch,FaBullhorn,FaRegLightbulb,FaAt} from 'react-icons/fa';
import { AiOutlineFontSize,AiOutlineGlobal } from "react-icons/ai";
import "./firstTask.css"
function MyList (){

    const Data=[
    
        {icon:<FaAt className="icons" />,title:'The TLD', text:'Does the domain extension math the language of the domain name?'},
        {icon:<FaRuler className="icons" />, title:'International recognition', text:'Can the domain name be used on an international scale?'},
        {icon:<AiOutlineGlobal className="icons" />, title:'Sales Opportunities', text:'Can the domain name be used on an international scale?'},
        {icon:<FaAward className="icons" />, title:'Domain Length', text:'Is the domain short enought to remember?'},
        {icon:<FaSearch className="icons" />, title:'Search engine', text:'Does the domain search engine guidelines?'},
        {icon:<FaBullhorn className="icons" />, title:'Typo susceptibility', text:'How high is the risk of mistyping the domain name?'},
        {icon:<FaPercent className="icons" />,title:'Language', text:'How complex is the actuall domain name?'},
        {icon:<AiOutlineFontSize className='icons'/>,title:'Advertising Potential', text:'Could the domain be used for advertising campaigns?'},
        {icon:<FaRegLightbulb className="icons" />,title:'Business potential', text:'Can the domain be used as your company address?'},
];

const personList=Data.map(word=>

<div>
<div className='rrethi'>{word.icon}</div>
<div className='title text'>{word.title}</div>
<div className='text'>{word.text}</div> 

</div>
)
   return <div className="wrapper box">{personList}</div>
}
export default MyList;