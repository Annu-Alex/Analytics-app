import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

function App(){

const [sales,setSales] = useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/sales")
.then((res)=>{
setSales(res.data);
});

},[]);


return(
<div>

<h1>Analytics Dashboard</h1>

<BarChart width={500} height={300} data={sales}>

<XAxis dataKey="product"/>

<YAxis/>

<Bar dataKey="amount"/>

</BarChart>


</div>
)

}

export default App;