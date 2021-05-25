const body =  [
	{
		"serialNumber": "12345",
		"partName": "SunBell",
		"location": {
			"name":"oslo, norway",
			"type": "Point",
		},
		"parts": [
			{
				"partNumber": "1",
				"partName": "PCB"
			}
		]
	}
];




function randomize(){
    Math.floor(Math.random() * 10)
}


const serialInput = () =>{
    return `"serialNumber":  "${randomize}${randomize}${randomize}${randomize}"`
}

//Partname


const parts =  [
	"Lamp",
	"12V charger",
	"Battery",
	"Power button",
	"Light bulb",
	"Screen",
	"Socket charger",
	"Solar panel"
]

const randPart = () => {
	const index = Math.floor(Math.random() * parts.length);

	return `"partName" : "${parts[index]}"`
}


//TODO sometime there are no serialnumber




