import{defineOperationApp as e}from"@directus/extensions-sdk";const a=[],t=[],l=[],i=[],n=[],s=[{id:"dall-e-operation",name:"DALL-E Image Generator",icon:"image",description:"DALL-E Image Generator!",overview:({text:e,save_assets:a=!0})=>[{label:"Prompt",text:e},{label:"Save To File Library",text:a?"Yes":"No"}],options:[{field:"text",name:"Prompt",type:"string",meta:{width:"full",interface:"input"}},{field:"save_assets",name:"Save To File Library",type:"boolean",schema:{default_value:!0},meta:{field:"save_assets",special:["cast-boolean"],interface:"boolean",options:null}},{field:"amount",name:"# of pictures",type:"integer",schema:{default_value:1},meta:{field:"amount",special:null,interface:"slider",options:{minValue:1,maxValue:10,stepInterval:1,alwaysShowValue:!0},width:"half",group:"advanced"}},{field:"size",name:"Image Size",type:"string",schema:{default_value:"1024x1024"},meta:{field:"size",special:null,interface:"select-dropdown",options:{choices:[{text:"256x256",value:"256x256"},{text:"512x512",value:"512x512"},{text:"1024x1024",value:"1024x1024"}]},width:"half",group:"advanced"}},{field:"api_key",name:"OpenAI API Key Override",type:"string",meta:{width:"full",interface:"input",special:null,options:{masked:!0,placeholder:"Use globally set key..."},group:"advanced"}},{field:"advanced",name:"Advanced Settings",type:"alias",meta:{field:"advanced",special:["alias","no-data","group"],interface:"group-detail",options:{start:"closed"},width:"full"}}]},e({id:"stable-diffusion-operation",name:"Stable Diffusion Image Generator",icon:"image",description:"Stable Diffusion Image Generator",overview:({prompt:e,engine:a="stable-diffusion-512-v2-1"})=>[{label:"Prompt",text:e},{label:"Engine",text:a}],options:[{field:"prompt",name:"Prompt",type:"string",meta:{width:"full",interface:"input"}},{field:"width",name:"Width",type:"integer",meta:{width:"half",interface:"slider",options:{minValue:512,maxValue:1024,stepInterval:64,alwaysShowValue:!0},group:"advanced"},schema:{default_value:512}},{field:"height",name:"Height",type:"integer",meta:{width:"half",interface:"slider",options:{minValue:512,maxValue:1024,stepInterval:64,alwaysShowValue:!0},group:"advanced"},schema:{default_value:512}},{field:"cfg_scale",name:"CFG Scale",type:"integer",meta:{width:"half",interface:"slider",options:{minValue:0,maxValue:20,stepInterval:1,alwaysShowValue:!0},group:"advanced"},schema:{default_value:7}},{field:"steps",name:"Steps",type:"integer",meta:{width:"half",interface:"slider",options:{minValue:10,maxValue:150,stepInterval:1,alwaysShowValue:!0},group:"advanced"},schema:{default_value:50}},{field:"engine",name:"Engine",type:"string",schema:{default_value:"stable-diffusion-512-v2-1"},meta:{width:"full",interface:"select-dropdown",options:{choices:[{value:"stable-diffusion-768-v2-1",text:"Stable Diffusion v2.1-768"},{value:"stable-diffusion-512-v2-1",text:"Stable Diffusion v2.1"},{value:"stable-diffusion-768-v2-0",text:"Stable Diffusion v2.0-768"},{value:"stable-diffusion-512-v2-0",text:"Stable Diffusion v2.0"},{value:"stable-diffusion-v1-5",text:"Stable Diffusion v1.5"},{value:"stable-diffusion-v1",text:"Stable Diffusion v1.4"},{value:"stable-inpainting-v1-0",text:"Stable Inpainting v1.0"},{value:"stable-inpainting-512-v2-0",text:"Stable Inpainting v2.0"}]},group:"advanced"}},{field:"api_key",name:"OpenAI API Key Override",type:"string",meta:{width:"full",interface:"input",special:null,options:{masked:!0,placeholder:"Use globally set key..."},group:"advanced"}},{field:"advanced",name:"Advanced Settings",type:"alias",meta:{field:"advanced",special:["alias","no-data","group"],interface:"group-detail",options:{start:"closed"},width:"full"}}]}),e({id:"davinci-operation",name:"Davinci Text Generator",icon:"textsms",description:"Davinci Text Generator!",overview:({text:e})=>[{label:"Prompt",text:e}],options:[{field:"text",name:"Prompt",type:"string",meta:{width:"full",interface:"input"}},{field:"temperature",name:"Temperature",type:"float",schema:{default_value:.5},meta:{field:"temperature",special:null,interface:"slider",options:{minValue:0,maxValue:0,stepInterval:.01,alwaysShowValue:!0},width:"half",group:"advanced"}},{field:"max_tokens",name:"Maximum Length",type:"integer",schema:{default_value:2048},meta:{field:"max_tokens",special:null,interface:"slider",options:{minValue:1,maxValue:4e3,stepInterval:1,alwaysShowValue:!0},width:"half",group:"advanced"}},{field:"top_p",name:"Top P",type:"float",schema:{default_value:1},meta:{field:"top_p",special:null,interface:"slider",options:{minValue:0,maxValue:1,stepInterval:.01,alwaysShowValue:!0},width:"half",group:"advanced"}},{field:"frequency_penalty",name:"Frequency Penalty",type:"float",schema:{default_value:0},meta:{field:"frequency_penalty",special:null,interface:"slider",options:{minValue:0,maxValue:2,stepInterval:.01,alwaysShowValue:!0},width:"half",group:"advanced"}},{field:"presence_penalty",name:"Presence Penalty",type:"float",schema:{default_value:0},meta:{field:"presence_penalty",special:null,interface:"slider",options:{minValue:0,maxValue:2,stepInterval:.01,alwaysShowValue:!0},width:"half",group:"advanced"}},{field:"api_key",name:"OpenAI API Key",type:"string",meta:{width:"full",interface:"input",special:null,options:{masked:!0,placeholder:"Use globally set key..."},group:"advanced"}},{field:"advanced",name:"Advanced Settings",type:"alias",meta:{field:"advanced",special:["alias","no-data","group"],interface:"group-detail",options:{start:"closed"},width:"full"}}]}),e({id:"chatgpt-operation",name:"ChatGPT Text Generator",icon:"forum",description:"ChatGPT Text Generator!",overview:({messages:e})=>[{label:"Messages",messages:e}],options:[{field:"messages",name:"Messages",type:"string",meta:{field:"messages",width:"full",interface:"input-code",options:{language:"json",placeholder:JSON.stringify([{role:"system",content:"The system message helps set the behavior of the assistant."},{role:"user",content:"The user messages help instruct the assistant. They can be generated by the end users of an application, or set by a developer as an instruction."},{role:"assistant",content:"The assistant messages help store prior responses. They can also be written by a developer to help give examples of desired behavior."}],null,2),template:JSON.stringify([{role:"system",content:"The system message."},{role:"user",content:"The user messages."},{role:"assistant",content:"The assistant messages."}],null,2)}}},{field:"temperature",name:"Temperature",type:"float",schema:{default_value:.5},meta:{field:"temperature",special:null,interface:"slider",options:{minValue:0,maxValue:1,stepInterval:.01,alwaysShowValue:!0},width:"half",group:"advanced"}},{field:"max_tokens",name:"Maximum Length",type:"integer",schema:{default_value:null},meta:{field:"max_tokens",special:null,interface:"input",options:{minValue:1,maxValue:4e3,stepInterval:1,placeholder:"Calculated automatically..."},width:"half",group:"advanced"}},{field:"top_p",name:"Top P",type:"float",schema:{default_value:1},meta:{field:"top_p",special:null,interface:"slider",options:{minValue:0,maxValue:1,stepInterval:.01,alwaysShowValue:!0},width:"half",group:"advanced"}},{field:"frequency_penalty",name:"Frequency Penalty",type:"float",schema:{default_value:0},meta:{field:"frequency_penalty",special:null,interface:"slider",options:{minValue:0,maxValue:2,stepInterval:.01,alwaysShowValue:!0},width:"half",group:"advanced"}},{field:"presence_penalty",name:"Presence Penalty",type:"float",schema:{default_value:0},meta:{field:"presence_penalty",special:null,interface:"slider",options:{minValue:0,maxValue:2,stepInterval:.01,alwaysShowValue:!0},width:"half",group:"advanced"}},{field:"api_key",name:"OpenAI API Key",type:"string",meta:{width:"full",interface:"input",special:null,options:{masked:!0,placeholder:"Use globally set key..."},group:"advanced"}},{field:"advanced",name:"Advanced Settings",type:"alias",meta:{field:"advanced",special:["alias","no-data","group"],interface:"group-detail",options:{start:"closed"},width:"full"}}]})];export{t as displays,a as interfaces,l as layouts,i as modules,s as operations,n as panels};
