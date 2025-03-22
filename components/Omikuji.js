"use client";

import { useState } from 'react';

export default function Omikuji() {
    const [fortune, setFortune] = useState(null);
    
    const fortunes = ['大吉', '中吉', '小吉', '吉', '末吉', '凶'];

    const drawFortune = async () => {
        const response = await fetch('/api/fortune');
        const data = await response.json();
        setFortune(data.fortune);
    };

    return (
        <div>
            <h1>おみくじアプリ</h1>
            <button onClick={drawFortune}>おみくじを引く</button>
            {fortune && (
                <div>
                    <h2>結果： {fortune.split('\n')[0].split(':')[1]}</h2>
                    <pre>{fortunes}</pre>
                    </div>
            )}
        </div>
    );
}

console.log("%c エラー", "color: red; background-color: lightblue; border: 1@x solid blue")