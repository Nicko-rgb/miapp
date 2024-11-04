import React, { useEffect, useState } from "react";
import './home.css';
import Navegador from "../Navegador/Navegador";
import logo from '../IMG/logo.png';
import { FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";

const HomeComponent = () => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const title = "WELCOME TO THE HOME PAGE";

    const [displayParagraph, setDisplayParagraph] = useState('');
    const [paragraphIndex, setParagraphIndex] = useState(0);
    const paragraph = `La programación no es solo un trabajo; <br /> es una forma de crear el futuro. <br />  Cada línea de código que <br />  escribes tiene el potencial<br /> de cambiar de cambiar<br /> el mundo.`;

    const [displayCode, setDisplayCode] = useState('')
    const [codeIndex, setCodeIndex] = useState(0)
    const code = `function max(arr) {
    let maxNum = arr[0];
    for (let num of arr) {
        if (num > maxNum) {
            maxNum = num;
        }
    }
    return maxNum;
}

// Ejemplos de prueba
console.log(max([3, 9, 6]));
console.log(max([67, 35,]));`;

    const numeros = `1
2
3
4
5
6
7
8
9
19
11
12
13`

    // Lógica para escritura de título
    useEffect(() => {
        if (index < title.length) {
            const interval = setInterval(() => {
                setDisplayText(prev => prev + title[index]);
                setIndex(prevIndex => prevIndex + 1);
            }, 50);

            return () => clearInterval(interval);
        }
    }, [index, title]);

    // Lógica para escritura de párrafo
    useEffect(() => {
        if (paragraphIndex < paragraph.length) {
            const intervalo = setInterval(() => {
                setDisplayParagraph(prev => prev + paragraph[paragraphIndex]);
                setParagraphIndex(prevIndex => prevIndex + 1);
            }, 20);
            return () => clearInterval(intervalo)
        }
    }, [paragraphIndex, paragraph])

    // Lógica para escritura de código
    useEffect(() => {
        if (codeIndex < code.length) {
            const intervalo = setInterval(() => {
                setDisplayCode(prev => prev + code[codeIndex]);
                setCodeIndex(prevIndex => prevIndex + 1);
            }, 60)
            return () => clearInterval(intervalo)
        }
    }, [codeIndex, code])

    return (
        <div className="home">
            <Navegador />
            <h1>{displayText}</h1>
            <div className="home-content">
                <div className="div1">
                    <h2>DESARROLLO DE SISTEMAS DE INFORMACION</h2>
                    <p dangerouslySetInnerHTML={{ __html: displayParagraph }} />
                    <div className="icons">
                        <FaFacebook className="ico fb" />
                        <FaWhatsapp className="ico wt" />
                        <FaGithub className="ico gh" />
                    </div>
                </div>
                <section></section>
                <div className="diag"></div>
                <div className="diag"></div>
                <img src={logo} alt="" />
                <div className="div2">
                    <h2>CODIGO EN ESCRITURA</h2>
                    <pre className="code">
                        <p className="num">{numeros} </p>
                        <p>{displayCode}<span>|</span></p>
                    </pre>
                </div>
            </div>
            <div className="imgs">
                <img src="https://images4.alphacoders.com/135/thumb-1920-1351760.png" alt="" />
                <img src="https://wallpaperaccess.com/full/796839.jpg" alt="" />
            </div>
        </div>
    );
}

export default HomeComponent;