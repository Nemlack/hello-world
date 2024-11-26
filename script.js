document.getElementById('derivative-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let inputFunction = document.getElementById('function').value.trim();

    if (inputFunction === "") {
        document.getElementById('result').innerHTML = `
            <span style="color: red;">Ошибка: Пожалуйста, введите функцию.</span>
        `;
        return;
    }

    inputFunction = inputFunction.replace(/\s+/g, ' ');
    inputFunction = inputFunction.replace(/\s*([+\-*/^()=])\s*/g, '$1');

    try {
        
        const expr = math.parse(inputFunction);
        
        const derivative = math.derivative(expr, 'x');

        document.getElementById('result').innerHTML = `
            <span style="color: green;">Производная функции <b>${inputFunction}</b> по переменной <i>x</i>: <b>${derivative.toString()}</b></span>
        `;
    } catch (error) {
        
        document.getElementById('result').innerHTML = `
            <span style="color: red;">Ошибка: Неверная функция. Пожалуйста, проверьте введенную функцию.</span>
        `;
    }
});

