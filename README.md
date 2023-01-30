# incdecbutton

Usage:

Add the incdecbtn.modules.css to your style folder 

(make sure of the rigth link to import in incdecbutton.js)

Create a stateValue to get back the current value

Bsp.
~~~js
import { useState, useEffect } from "react";


const [mtbutvalue, setmtbutvalue] = useState()
~~~

create an array of values you want to change with the button:
~~~js
const mtsafelist = ["eins", "zwei", "drei", "fünundzwanzig", "dreißig", "einhundertachtundneunzig"]
~~~

in your page import the IncDecButton
~~~js
import Listbutton from "../components/listbtn";
~~~

also you can import the createIncDecBtnValue function
~~~js
import Listbutton, {createIncDecBtnValue} from "../components/listbtn";
~~~

Values:
- buttonid -> each IncDecBtn needs a unique id !! Importand - it makes it possible to create more then one button per page
- button list -> the array of possible values to set
- default value -> the number of the default value of the buton list (begin at 0 not at 1 see the Example below)
- Button Title -> the shown Title of the Button
- Visibility -> true shows the selected value in the button - false don´t show the value in the button


usage of the IncDecButton:
~~~js
import Listbutton, { createIncDecBtnValue } from "../components/listbtn";
import { useState, useEffect } from "react";

export default function IncDecBtnTest() {

    const [btn1_value, set_btn1_value] = useState()
    const [btn2_value, set_btn2_value] = useState()

    const btn_1_list = ["one", "two", "four", "ten", "eleven"]
    const btn_2_list = ["1", "2", "4", "10", "11"]

    const btn1_data = createIncDecBtnValue("btn1", btn_1_list, 2, "Button 1 Title", true)
    const btn2_data = createIncDecBtnValue("btn2", btn_2_list, 3, "Button 2 Title", false)

    return (
        <>
            <div>
                IncDecBtnTest
            </div>
            <div>
                <Listbutton {...btn1_data} onChange={set_btn1_value} />
                <Listbutton {...btn2_data} onChange={set_btn2_value} />
            </div>
            <div>
                <p>Button 1 - {btn1_value}</p>
                <p>Button 2 - {btn2_value}</p>
            </div>
        </>
    )
}
~~~
