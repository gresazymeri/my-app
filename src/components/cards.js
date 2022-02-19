import React from "react"
import "./index.css"
import Button from "./btn"
import "./images/girl-smiling.jpg"

function Cards(){
const Cardss=[
    {
        title:"3.3.0(14/05/2018)", mybtn:<Button>Now</Button>, img:"girl-smiling.jpg", name:"Kevin Joe",text:"Reference site about Lo Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with agiving information on its origins, as well as a random Lipsum generator."
    },
    {
        title:"3.1.0(20/05/2015)", mybtn:<Button>Fix</Button>, name:"Kevin Joe", text:"Reference sitesite about Lorem Ipsum about Lorem Ipsum, m generators on the Ieat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a on its origins.",
    },
    {
        title:"3.1.0(20/05/2015)", mybtn:<Button>Important</Button>,name:"Kevin Joe",text:"Lorem Ipsum is simply dumm textm generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with athe 1500s, when an unknown "
    },
    {
        title:"3.3.0(14/05/2018)", mybtn:<Button>Now</Button> ,name:"Kevin Joe",text:"Lorem Ipsum is simpmredefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a the printing and typesetting industry." 
    },
    {
        title:"3.1.0(20/05/2015)", mybtn:<Button>Fix</Button>,name:"Kevin Joe", text:"nnjjjMany desktop publishing kages and web s ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).jj"
    },
    {
        title:"3.1.0(20/05/2015)", mybtn:<Button>Important</Button> ,name:"Kevin Joe",text:"There are many variatrm, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    },
    {
        title:"3.3.0(14/05/2018)", mybtn:<Button>Now</Button> ,name:"Kevin Joe",text:"Lorem Ipsum comes from sections 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips, comes from a line in section 1.10.32." 
    },
    {
        title:"3.1.0(20/05/2015)", mybtn:<Button>Fix</Button>,name:"Kevin Joe", text:"There are many  randomisef   simpmredefined chunks as necessary, making hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. "
    },
    {
        title:"3.1.0(20/05/2015)", mybtn:<Button>Important</Button>,name:"Kevin Joe", text:"Contrapi ney Collis simpmredefined chunks as necessary, making looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "
    }
];



const mycards=Cardss.map(word =>
  
        <div className="card">
        <div className=" title">{word.title}</div>
        <div className="btn-n">{word.mybtn}</div>
        <div className="name">{word.name}{word.img}</div>
        <div className="text">{word.text}</div>
        <div><button className="second-btn">Download</button></div>
        

    </div>
    
    
)
return <div className='cardss'>{mycards}</div>
}

export default Cards