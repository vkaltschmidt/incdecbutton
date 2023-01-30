import React, { useState, useEffect } from "react";
import style from "../styles/incdecbtn.module.css"

export default function Listbutton(props) {

    const [visiblestate, setvisiblestate] = useState("visible")

    const btnlist = props.attributes.list
    const maxvalue = btnlist.length - 1
    const defaultval = props.attributes.defaultvalue
    const btntitle = props.attributes.btntitle
    const btnid = props.id
    const valueshow = props.attributes.valueshow


    const but_dec_id = btnid + "_dec"
    const but_inc_id = btnid + "_inc"

    const [showvalue, setshowvalue] = useState(btnlist.at(defaultval))

    //console.log("btn get : ", btnid, " Attributes : ", btnlist, maxvalue, defaultval, btntitle, valueshow)


    const decml = (evt) => {
        const indof = btnlist.indexOf(showvalue)
        const newindx = indof - 1
        if (indof <= maxvalue) {
            document.getElementById(but_inc_id).disabled = false
        }
        if (indof <= 1) {
            document.getElementById(but_dec_id).disabled = true
        }
        const newvalue = btnlist.at(newindx)
        setshowvalue(newvalue)
    }

    const incml = (evt) => {
        const indof = btnlist.indexOf(showvalue)
        const newindx = indof + 1
        if (newindx >= maxvalue) {
            document.getElementById(but_inc_id).disabled = true
        }
        if (indof >= 0) {
            document.getElementById(but_dec_id).disabled = false
        }
        const newvalue = btnlist.at(newindx)
        setshowvalue(newvalue)
    }

    useEffect(() => {
        props.onChange(showvalue);
    }, [showvalue])

    useEffect(() => {
        if (valueshow == true) {
            //setvisiblestate("visible")
            document.getElementById(btnid).style.visibility = "visible"; 
        }
        if (valueshow == false) {
            //setvisiblestate("hidden")
            document.getElementById(btnid).style.visibility = "hidden"; 
        }
    }, [])

    const btnstyle = `m-0.5 rounded-lg h-8 w-8 border text-center text-black font-bold border-white hover:enabled:bg-lime-500
                      enabled:bg-lime-500/60 hover:disabled:bg-red-500 disabled:bg-red-500/60`
    //const showstyle = `${visiblestate}  p-0.5`

    return (
        <div className={style.main}>
            <fieldset >
                <div className={style.field}>
                    <div className={style.title}>{btntitle}</div>
                    <div className={style.btndiv}>
                        <button className={style.btnstyle} name="ml" id={but_dec_id} onClick={decml}>-</button>
                        <button className={style.btnstyle} name="ml" id={but_inc_id} onClick={incml}>+</button>
                    </div>
                    <div>
                        <p id={btnid} className={style.showstyle}>{showvalue}</p>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}

export function createIncDecBtnValue(btnid, safelist, defvalue, btntitle, visibleshow) {
    return {
        id: btnid,
        attributes: {
            list: safelist,
            defaultvalue: defvalue,
            btntitle: btntitle,
            valueshow: visibleshow
        }
    }
}
