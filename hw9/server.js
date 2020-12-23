const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080
app.use(express.json());
app.use(cors())
let thoughts = [
    {
        key: 0,
        value: "You should care about people",
        liked: false,
        favorite: true,
        lastEditted: Date.now()
    }
]

app.get('/thoughts', (req, res) => {
    res.json({
        success: true,
        thoughts: thoughts
    });
})

app.get('/thoughts/:thoughtId', (req, res) => {
    const { thoughtId } = req.params;
    const thought = thoughts.find(thought => thought.key == thoughtId)

    res.json({
        success: true,
        thought: thought
    });
})

app.post('/thoughts', (req, res) => {
    const body = req.body;
    const newId = thoughts.length !==0 ? thoughts[thoughts.length-1].key : 0
    thoughts.push({
        key: newId + 1,
        value:body.value,
        liked:false,
        favorite:false,
        lastEditted: Date.now()
    })

    res.json({
        success: true,
        data: body
    })

});

app.put('/thoughts/:thoughtId', (req, res) => {
    const { thoughtId } = req.params;
    const body = req.body;
    thoughts.map(thought => {

        if(thought.key == thoughtId){
            if(body.liked != null) thought.liked = body.liked === "true" ? true : false
            if(body.favorite != null) thought.favorite = body.favorite === "true" ? true : false
            if(body.value != null) {
                thought.lastEditted = Date.now()
                thought.value = body.value
            }
            return thought
        }
    })

    res.json({
        success: true,
        data: body
    })
});


app.delete('/thoughts/:thoughtId', (req, res) => {
    const { thoughtId } = req.params;
    thoughts = thoughts.filter(el => el.key != thoughtId)

    res.json({
        success: true
    })

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})