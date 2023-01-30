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