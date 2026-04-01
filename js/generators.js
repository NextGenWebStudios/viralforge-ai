function generateHooks(){

const topic=document.getElementById("topic").value;

const hooks=[

`Nobody talks about ${topic} like this...`,
`This ${topic} trick will shock you`,
`The biggest mistake in ${topic}`,
`Why ${topic} is secretly powerful`,
`This ${topic} method changed everything`,
`99% people fail at ${topic}`,
`You won't believe this ${topic} hack`,
`The dark truth about ${topic}`,
`Stop doing this in ${topic}`,
`This ${topic} strategy is underrated`

];

let result="";

hooks.forEach(h=>{

result+="<p>"+h+"</p>";

});

document.getElementById("result").innerHTML=result;

}
