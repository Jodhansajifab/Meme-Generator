import "./Main.css"
import React from "react"


export default function Main(){

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res =>res.json())
        .then(data => setmemes(data.data.memes))
    },[])

    let [newmemes,setnewmemes] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    let [memes ,setmemes] = React.useState([])
    

    function generateNew(){

        let RandomNum = Math.floor(Math.random()*memes.length)
        let RandomUrl = memes[RandomNum].url
        
        setnewmemes((prevarr)=>({
            ...prevarr,
            randomImage : RandomUrl
        }))
    }
    function handleText(event){
        const{name, value}=event.target;
        setnewmemes((prevarr)=>({
            ...prevarr,
            [name]:value
        }))
    }
     
    return(

        <div className="main-full">

            {/* <h1>Your text goes here:</h1> */}


            <form action="" className="main-form">
                
                <input 
                    type="text" 
                    placeholder="First Text" 
                    className="main-input"
                    name="topText"
                    value={newmemes.topText}
                    onChange={handleText}
                />

                <input 
                    type="text" 
                    placeholder="Second Text"
                    className="main-input"
                    name="bottomText"
                    value={newmemes.bottomText}
                    onChange={handleText}
                />

            </form>


                <div className="main-btn">
                    <button type="button" className="main-btn-btn" onClick={generateNew}><b>Get new meme image</b> 🖼</button>
                </div>


            <div className="meme-img-div">

                <img src={newmemes.randomImage} className="meme-img" />

                <h1 className="meme-top">{newmemes.topText}</h1>
            
                <h1 className="meme-bottom">{newmemes.bottomText}</h1>

            </div>
        </div>
    )
} 