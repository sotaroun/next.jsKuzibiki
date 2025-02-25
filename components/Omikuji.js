"use client";

import { useState } from 'react';

export default function Omikuji() {
    const [result, setResult] = useState('');
    const fortunes = ['大吉', '中吉', '小吉', '吉', '末吉', '凶'];

    const drawFortune = () => {
        const randomIndex = Math.floor(Math.random() * fortunes.kength);
        setResult(fortunes[randomIndex]);
    };

    return (
        <div>
            <h1>おみくじアプリ</h1>
            <button onClick={drawFortune}>おみくじを引く</button>
            {result && <p>結果： {result}</p>}
        </div>
    );
}